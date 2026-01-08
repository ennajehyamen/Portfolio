import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-20">
      <Container>
        <h1 className="text-2xl font-semibold">Page introuvable</h1>
        <p className="mt-3 text-slate-700">
          La page demandée n’existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 rounded-full bg-slate-900 px-5 py-2.5 text-sm text-white no-underline hover:bg-slate-800"
        >
          Retour à l’accueil
        </Link>
      </Container>
    </section>
  );
}
