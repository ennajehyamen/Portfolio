"use client";

import { useMemo, useState } from "react";
import { validateContactForm } from "@/lib/validators";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const errors = useMemo(() => validateContactForm(form), [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerMsg("");

    const currentErrors = validateContactForm(form);
    if (Object.keys(currentErrors).length > 0) {
      setStatus("error");
      setServerMsg("Veuillez corriger les champs en erreur.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { ok: boolean; message: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setServerMsg(data.message || "Une erreur est survenue.");
        return;
      }

      setStatus("success");
      setServerMsg(data.message);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setServerMsg("Impossible d’envoyer le message. Réessayez plus tard.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 rounded-2xl border border-slate-200 p-6 space-y-4"
      aria-describedby="form-status"
    >
      <div>
        <label className="block text-sm font-medium" htmlFor="name">
          Nom
        </label>
        <input
          id="name"
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/20"
          value={form.name}
          onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
          placeholder="Votre nom"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/20"
          value={form.email}
          onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
          placeholder="nom@exemple.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          className="mt-1 w-full min-h-32 rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/20"
          value={form.message}
          onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
          placeholder="Votre message…"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-slate-900 px-6 py-2.5 text-sm text-white no-underline hover:bg-slate-800 disabled:opacity-60"
      >
        {status === "loading" ? "Envoi..." : "Envoyer"}
      </button>

      <p id="form-status" className="text-sm">
        {serverMsg && (
          <span className={status === "success" ? "text-emerald-700" : "text-red-700"}>
            {serverMsg}
          </span>
        )}
      </p>
    </form>
  );
}
