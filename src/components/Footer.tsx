import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <Container>
        <div className="py-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Yamen Najeh. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://github.com/ennajehyamen/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-slate-900"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yamen-najeh/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-slate-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
