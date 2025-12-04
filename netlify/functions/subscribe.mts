import type { Context, Config } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

interface SubscribeBody {
  email: string;
}

interface Subscriber {
  email: string;
  subscribedAt: string;
}

export default async (req: Request, context: Context) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body: SubscribeBody = await req.json();
    const { email } = body;

    // Validate email
    if (!email || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Normalize email (lowercase)
    const normalizedEmail = email.toLowerCase().trim();

    // Store in Netlify Blobs
    const store = getStore("drop-list-subscribers");

    // Use email as key (with @ replaced to avoid path issues)
    const key = normalizedEmail.replace("@", "_at_");

    // Check if already subscribed
    const existing = await store.get(key);
    if (existing) {
      return new Response(
        JSON.stringify({ message: "You're already on the list!", alreadySubscribed: true }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Store subscriber data
    const subscriber: Subscriber = {
      email: normalizedEmail,
      subscribedAt: new Date().toISOString(),
    };

    await store.setJSON(key, subscriber);

    return new Response(
      JSON.stringify({ message: "Successfully joined the drop list!", success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to subscribe. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const config: Config = {
  path: "/api/subscribe",
};
