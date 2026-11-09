import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LoaderCircle, Mail, MessagesSquare, Send } from "lucide-react";
import { supabase } from "../lib/supabase";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const requiredFields = ["firstName", "lastName", "email", "subject", "message"];

const fieldLabels = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

function getErrors(form) {
  const errors = {};

  requiredFields.forEach((field) => {
    if (!form[field].trim()) {
      errors[field] = `${fieldLabels[field]} is required.`;
    }
  });

  if (
    form.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
  ) {
    errors.email = "Please enter a valid email address.";
  }

  return errors;
}

export default function WebMail() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (!snackbar) return undefined;

    const timeoutId = window.setTimeout(() => setSnackbar(null), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [snackbar]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
    setSnackbar(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSending) return;

    const nextErrors = getErrors(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSnackbar({
        type: "warning",
        message: "Please complete all required fields correctly.",
      });
      document
        .getElementById(`webmail-${Object.keys(nextErrors)[0]}`)
        ?.focus();
      return;
    }

    setIsSending(true);
    setSnackbar(null);

    try {
      const { error } = await supabase.from("web_mail").insert({
        id: crypto.randomUUID(),
        first_name: form.firstName.trim(),
        last_name: form.lastName.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        created_at: new Date().toISOString(),
      });

      if (error) throw error;

      setForm(initialForm);
      setErrors({});
      setSnackbar({
        type: "success",
        message: "Your message was sent successfully. Thank you!",
      });
    } catch (error) {
      console.error("Failed to submit web mail:", error);
      setSnackbar({
        type: "error",
        message: "Unable to send your message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  }

  const fields = [
    { name: "firstName", type: "text", required: true },
    { name: "lastName", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "subject", type: "text", required: true },
    { name: "message", type: "textarea", required: true },
  ];

  const snackbarColors = {
    success: "bg-emerald-600 text-white",
    warning: "bg-amber-300 text-amber-950",
    error: "bg-red-600 text-white",
  };

  return (
    <>
      <div className="w-full rounded-[28px] bg-cream p-6 text-black shadow-inner shadow-black/5 sm:p-8 lg:p-10">
        <form noValidate onSubmit={handleSubmit}>
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 font-footlight text-xl font-bold text-rose-dark sm:text-2xl">
                <Mail className="h-5 w-5" />
                Send me a message
              </p>
              <p className="mt-1 font-abeezee text-xs text-black/60">
                I&apos;d love to hear from you.
              </p>
            </div>
            <p className="font-abeezee text-xs text-black/55">
              * Required fields
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-6">
            {fields.map(({ name, type, required }) => {
              const error = errors[name];
              const isTextarea = type === "textarea";
              const fieldId = `webmail-${name}`;
              const label = fieldLabels[name];
              const fieldClassName = `w-full rounded-2xl border bg-white px-4 py-3.5 font-abeezee text-sm text-black outline-none transition-all placeholder:text-black/35 focus:ring-4 ${
                error
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                  : "border-rose-dark/20 focus:border-rose-dark focus:ring-rose-dark/15"
              } ${isTextarea ? "min-h-40 resize-y" : "h-14"}`;

              return (
                <div
                  key={name}
                  className={
                    name === "firstName" || name === "lastName"
                      ? ""
                      : "sm:col-span-2"
                  }
                >
                  <label
                    htmlFor={fieldId}
                    className="mb-2 block font-abeezee text-sm font-medium text-black/80"
                  >
                    {label}
                    {required && (
                      <span className="ml-1 text-rose-dark" aria-hidden="true">
                        *
                      </span>
                    )}
                  </label>
                  {isTextarea ? (
                    <textarea
                      id={fieldId}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder="Tell me a little about your project..."
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${fieldId}-error` : undefined}
                      className={fieldClassName}
                    />
                  ) : (
                    <input
                      id={fieldId}
                      name={name}
                      type={type}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={
                        name === "email"
                          ? "you@example.com"
                          : name === "subject"
                            ? "What would you like to discuss?"
                            : ""
                      }
                      autoComplete={
                        name === "firstName"
                          ? "given-name"
                          : name === "lastName"
                            ? "family-name"
                            : name === "email"
                              ? "email"
                              : undefined
                      }
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${fieldId}-error` : undefined}
                      className={fieldClassName}
                    />
                  )}
                  {error && (
                    <p
                      id={`${fieldId}-error`}
                      className="mt-1.5 font-abeezee text-xs text-red-600"
                      role="alert"
                    >
                      {error}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col gap-4 border-t border-rose-dark/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md font-abeezee text-xs leading-relaxed text-black/55">
              Your details will only be used to get back to you about this
              message.
            </p>
            <button
              type="submit"
              disabled={isSending}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-rose-dark px-7 font-abeezee text-sm font-medium text-white shadow-md shadow-rose-dark/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b56e7c] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-dark enabled:cursor-pointer disabled:cursor-wait disabled:opacity-60"
            >
              {isSending ? (
                <>
                  Sending
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      {snackbar &&
        createPortal(
          <div
            className={`fixed right-4 top-4 z-[100] flex w-[calc(100%-2rem)] max-w-sm items-start gap-4 rounded-lg px-5 py-4 font-abeezee shadow-xl animate-[snackbar-enter_250ms_ease-out] sm:right-6 sm:top-6 ${snackbarColors[snackbar.type]}`}
            role={snackbar.type === "error" ? "alert" : "status"}
            aria-live={snackbar.type === "error" ? "assertive" : "polite"}
          >
            <p className="flex-1 text-sm leading-relaxed">{snackbar.message}</p>
            <button
              type="button"
              onClick={() => setSnackbar(null)}
              className="rounded px-1 text-lg leading-5 opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              aria-label="Dismiss notification"
            >
              &times;
            </button>
          </div>,
          document.body,
        )}
    </>
  );
}