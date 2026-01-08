import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { getProjectBySlug, projects } from "@/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Projet introuvable | Yamen Najeh" };

  return {
    title: `${project.title} | Yamen Najeh`,
    description: project.description
  };
}

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Link href="/projects" className="hover:underline">
              Projets
            </Link>
            <span>/</span>
            <span>{project.title}</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            {project.title}
          </h1>
          <p className="mt-2 text-slate-700">{project.subtitle}</p>

          <div className="mt-8 relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
            <Image
              src={project.image}
              alt={`Capture du projet ${project.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority={false}
            />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="mt-2 text-slate-700 leading-relaxed">
                {project.description}
              </p>

              <h2 className="mt-6 text-lg font-semibold">Points clés</h2>
              <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl border border-slate-200 p-5 h-fit">
              <h2 className="font-semibold">Technologies</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-2">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white no-underline hover:bg-slate-800 text-center"
                  >
                    Voir sur GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm no-underline hover:bg-slate-50 text-center"
                  >
                    Voir la démo
                  </a>
                )}
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
