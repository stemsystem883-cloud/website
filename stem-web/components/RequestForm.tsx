"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitRequestAction } from "@/app/actions";

type FormState = "idle" | "loading" | "success" | "error";

export function RequestForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    if (!data.get("firstName")) errs.firstName = "Required";
    if (!data.get("lastName")) errs.lastName = "Required";
    const email = String(data.get("email") ?? "");
    if (!email) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email";
    if (!data.get("company")) errs.company = "Required";
    if (!data.get("role")) errs.role = "Select a role";
    if (!data.get("message")) errs.message = "Required";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setState("loading");
    try {
      const result = await submitRequestAction(data);
      if (result.success) {
        setState("success");
      } else {
        setState("error");
      }
    } catch (err) {
      console.error("Submission catch:", err);
      setState("error");
    }
  }

  const fieldClass = (key: string) =>
    `w-full rounded-2xl border px-4 py-3 text-deep-ink bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue/20 ${
      errors[key]
        ? "border-red-400 focus:border-red-400"
        : "border-slate-200 focus:border-primary-blue"
    }`;

  if (state === "success") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_24px_64px_rgba(15,23,42,0.08)] text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle2 className="h-8 w-8 text-emerald-500" />
        </div>
        <h2 className="mt-6 text-2xl font-semibold text-deep-ink">Request received</h2>
        <p className="mt-3 max-w-[36ch] text-sm leading-7 text-slate-500">
          We will be in touch within 48 hours to schedule a conversation that fits your team.
        </p>
      </div>
    );
  }

  const isLoading = state === "loading";

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_64px_rgba(15,23,42,0.08)] lg:p-10">
      {state === "error" && (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again or email us directly.
        </div>
      )}
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-deep-ink">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              aria-required="true"
              autoComplete="given-name"
              placeholder="Jane"
              disabled={isLoading}
              className={fieldClass("firstName")}
            />
            {errors.firstName && <p className="mt-1.5 text-xs text-red-500">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-deep-ink">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              aria-required="true"
              autoComplete="family-name"
              placeholder="Doe"
              disabled={isLoading}
              className={fieldClass("lastName")}
            />
            {errors.lastName && <p className="mt-1.5 text-xs text-red-500">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-deep-ink">
            Work email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            autoComplete="email"
            placeholder="jane@company.com"
            disabled={isLoading}
            className={fieldClass("email")}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-medium text-deep-ink">
              Company name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              aria-required="true"
              autoComplete="organization"
              placeholder="Moniepoint Ltd"
              disabled={isLoading}
              className={fieldClass("company")}
            />
            {errors.company && <p className="mt-1.5 text-xs text-red-500">{errors.company}</p>}
          </div>
          <div>
            <label htmlFor="role" className="mb-2 block text-sm font-medium text-deep-ink">
              Role
            </label>
            <select
              id="role"
              name="role"
              defaultValue=""
              required
              aria-required="true"
              disabled={isLoading}
              className={`${fieldClass("role")} appearance-none`}
            >
              <option value="" disabled>Select your role</option>
              <option value="strategy">Strategy lead</option>
              <option value="growth">Growth or expansion lead</option>
              <option value="ceo">Founder or CEO</option>
              <option value="research">Research or intelligence lead</option>
              <option value="operations">Operations lead</option>
              <option value="other">Other</option>
            </select>
            {errors.role && <p className="mt-1.5 text-xs text-red-500">{errors.role}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-deep-ink">
            What are you trying to understand or improve?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            aria-required="true"
            disabled={isLoading}
            className={`${fieldClass("message")} resize-none`}
            placeholder="E.g. We need better visibility into competitor pricing changes and regulatory shifts."
          />
          {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting…
            </>
          ) : (
            "Submit request"
          )}
        </button>
        <p className="text-center text-xs leading-6 text-slate-500">
          By submitting, you agree to our standard processing of your business information for scoping purposes.
        </p>
      </form>
    </div>
  );
}
