import Container from "@/components/Container";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | Yamen Najeh",
};

export default function ContactPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Contact
          </h1>

          <p className="mt-3 text-slate-700">
            Vous pouvez me joindre par email ou via le formulaire ci-dessous.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-700">
              Email :{" "}
              <a className="hover:underline" href="mailto:ennajehyamen@gmail.com">
                ennajehyamen@gmail.com
              </a>
            </p>
            <p className="mt-2 text-sm text-slate-700">
              LinkedIn :{" "}
              <a
                className="hover:underline"
                href="https://www.linkedin.com/in/yamen-najeh/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/yamen-najeh/
              </a>
            </p>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
