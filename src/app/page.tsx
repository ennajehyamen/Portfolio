import Link from "next/link";
import Container from "@/components/Container";

export default function HomePage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm text-slate-600">Portfolio</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">
            Yamen Najeh — Développeur Full-Stack (Web)
          </h1>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Je conçois des applications web modernes, des APIs sécurisées et des
            interfaces responsives. Je travaille avec Next.js, Node/Express et
            PHP/MySQL.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm text-white no-underline hover:bg-slate-800"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm no-underline hover:bg-slate-50"
            >
              Me contacter
            </Link>
            <a
              href="/cv-yamen-najeh.pdf"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm no-underline hover:bg-slate-50"
              target="_blank"
              rel="noreferrer"
            >
              Télécharger mon CV
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="font-semibold">Ce que je fais</h2>
              <p className="mt-2 text-sm text-slate-700">
                Front-end (React/Next.js), back-end (Node/Express, PHP), APIs REST,
                bases de données, déploiement.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="font-semibold">Ce que je recherche</h2>
              <p className="mt-2 text-sm text-slate-700">
                Opportunités de stage / poste junior, projets concrets, environnement
                orienté qualité et livraison continue.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
