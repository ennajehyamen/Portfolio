export type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export function validateContactForm(values: ContactForm) {
  const errors: Partial<Record<keyof ContactForm, string>> = {};

  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < 2) errors.name = "Le nom doit contenir au moins 2 caractères.";
  if (name.length > 80) errors.name = "Le nom est trop long (max 80).";

  // Validation email simple (suffisante pour un TP)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) errors.email = "Adresse email invalide.";

  if (message.length < 10)
    errors.message = "Le message doit contenir au moins 10 caractères.";
  if (message.length > 2000)
    errors.message = "Le message est trop long (max 2000).";

  return errors;
}
