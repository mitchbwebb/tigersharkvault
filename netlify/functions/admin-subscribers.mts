import type { Context, Config } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

interface Subscriber {
  email: string;
  subscribedAt: string;
}

export default async (req: Request, context: Context) => {
  // Check for admin secret in header or query param
  const url = new URL(req.url);
  const authHeader = req.headers.get("x-admin-secret");
  const querySecret = url.searchParams.get("secret");
  const adminSecret = Netlify.env.get("ADMIN_SECRET");

  // Require admin secret for security
  if (!adminSecret) {
    return new Response(
      JSON.stringify({ error: "Admin secret not configured. Set ADMIN_SECRET environment variable." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  if (authHeader !== adminSecret && querySecret !== adminSecret) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const store = getStore("drop-list-subscribers");
    const { blobs } = await store.list();

    // Fetch all subscribers
    const subscribers: Subscriber[] = [];
    for (const blob of blobs) {
      const data = await store.get(blob.key, { type: "json" }) as Subscriber | null;
      if (data) {
        subscribers.push(data);
      }
    }

    // Sort by subscription date (newest first)
    subscribers.sort((a, b) =>
      new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime()
    );

    // Check for export format
    const format = url.searchParams.get("format");

    if (format === "csv") {
      // Generate CSV for email blast tools
      const csv = "email,subscribed_at\n" +
        subscribers.map(s => `${s.email},${s.subscribedAt}`).join("\n");

      return new Response(csv, {
        status: 200,
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": "attachment; filename=drop-list-subscribers.csv",
        },
      });
    }

    if (format === "emails") {
      // Just emails, one per line (easy copy/paste for email tools)
      const emails = subscribers.map(s => s.email).join("\n");

      return new Response(emails, {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    }

    // Default: JSON response with stats
    return new Response(
      JSON.stringify({
        totalSubscribers: subscribers.length,
        subscribers,
        exportFormats: {
          csv: "Add ?format=csv to download as CSV",
          emails: "Add ?format=emails for plain text email list",
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Admin subscribers error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch subscribers" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const config: Config = {
  path: "/api/admin/subscribers",
};
