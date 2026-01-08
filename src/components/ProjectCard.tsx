import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow transition">
      <div className="relative aspect-[16/9] bg-slate-100">
        <Image
          src={project.image}
          alt={`Capture du projet ${project.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{project.subtitle}</p>

        <p className="mt-3 text-sm text-slate-700 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white no-underline hover:bg-slate-800"
          >
            Voir le projet
          </Link>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm no-underline hover:bg-slate-50"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
