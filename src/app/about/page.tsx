import Container from "@/components/Container";

export const metadata = {
  title: "À propos | Yamen Najeh"
};

export default function AboutPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            À propos de moi
          </h1>

          <p className="mt-5 text-slate-700 leading-relaxed">
            Je suis Yamen Najeh, développeur full-stack en fin d’AEC. Je développe
            des applications web orientées produit : interfaces responsives, APIs
            REST sécurisées, et intégration de bases de données.
          </p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Mes projets récents couvrent Next.js (App Router), React (Vite), et des
            backends Node/Express ainsi que PHP/MySQL avec authentification JWT.
            J’accorde une importance particulière à la structure du code, la
            lisibilité, et une expérience utilisateur soignée.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 p-5">
            <h2 className="font-semibold">Compétences</h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li>Next.js (App Router), React</li>
              <li>Node.js, Express</li>
              <li>PHP, Laravel</li>
              <li>MySQL, MongoDB (selon projets)</li>
              <li>APIs REST, Auth (JWT)</li>
              <li>Git/GitHub, déploiement Vercel</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/cv-yamen-najeh.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm text-white no-underline hover:bg-slate-800"
            >
              Télécharger mon CV
            </a>
            <a
              href="https://www.linkedin.com/in/yamen-najeh/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm no-underline hover:bg-slate-50"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
