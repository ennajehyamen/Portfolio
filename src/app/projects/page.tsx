import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projets | Yamen Najeh"
};

export default function ProjectsPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Projets
            </h1>
            <p className="mt-3 text-slate-700">
              Une sélection de mes réalisations. Chaque projet contient une page
              de détails (route dynamique) avec les technologies et les points clés.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
