import { NextResponse } from "next/server";
import { validateContactForm } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const form = {
      name: String(body.name ?? ""),
      email: String(body.email ?? ""),
      message: String(body.message ?? "")
    };

    const errors = validateContactForm(form);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { ok: false, message: "Données invalides.", errors },
        { status: 400 }
      );
    }

    // À minima : log serveur (acceptable pour un TP).
    // Option future: intégrer Resend/SendGrid.
    console.log("[CONTACT]", {
      name: form.name,
      email: form.email,
      message: form.message,
      at: new Date().toISOString()
    });

    return NextResponse.json(
      { ok: true, message: "Message envoyé avec succès. Merci." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, message: "Erreur serveur. Réessayez plus tard." },
      { status: 500 }
    );
  }
}
