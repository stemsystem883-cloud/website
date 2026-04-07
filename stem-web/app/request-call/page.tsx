import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Early Access | Stem",
  description: "Request early access to Stem and talk through your team's market intelligence needs.",
};

const EXPECTATIONS = [
  {
    title: "Align on priorities",
    body: "We learn which competitors, regulations, market shifts, or risks matter most to your team.",
  },
  {
    title: "Review where Stem fits",
    body: "We talk through how the product could support the decisions your team already needs to make.",
  },
  {
    title: "Determine next steps",
    body: "A clear conversation about fit, readiness, and what should happen next if it makes sense.",
  },
];

export default function RequestCallPage() {
  return (
    <div className="flex-1 bg-[#f7f9fc] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary-blue/70">Get Early Access</p>
          <h1 className="text-5xl font-bold tracking-[-0.04em] text-deep-ink sm:text-6xl lg:text-[4rem] lg:leading-[1.04]">
            Let&apos;s scope your intelligence needs.
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg leading-8 text-slate-600">
            Every team has different blind spots. This call helps us understand what your team is trying to track, assess, or decide and where Stem could make that workflow clearer.
          </p>

          <div className="mt-8 space-y-4">
            {EXPECTATIONS.map((item) => (
              <div key={item.title} className="rounded-[26px] border border-slate-200 bg-white px-5 py-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-blue" />
                  <div>
                    <h2 className="text-base font-semibold text-deep-ink">{item.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_64px_rgba(15,23,42,0.08)] lg:p-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-deep-ink">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-deep-ink transition-colors focus:border-primary-blue focus:outline-none"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-deep-ink">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-deep-ink transition-colors focus:border-primary-blue focus:outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-deep-ink">
                Work email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-deep-ink transition-colors focus:border-primary-blue focus:outline-none"
                placeholder="jane@company.com"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-deep-ink">
                  Company name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-deep-ink transition-colors focus:border-primary-blue focus:outline-none"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label htmlFor="role" className="mb-2 block text-sm font-medium text-deep-ink">
                  Role
                </label>
                <select
                  id="role"
                  defaultValue=""
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-deep-ink transition-colors focus:border-primary-blue focus:outline-none"
                >
                  <option value="" disabled>Select your role</option>
                  <option value="strategy">Strategy lead</option>
                  <option value="growth">Growth or expansion lead</option>
                  <option value="ceo">Founder or CEO</option>
                  <option value="research">Research or intelligence lead</option>
                  <option value="operations">Operations lead</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-deep-ink">
                What are you trying to understand or improve?
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-deep-ink transition-colors focus:border-primary-blue focus:outline-none"
                placeholder="For example: We need better visibility into competitor pricing changes and regulatory shifts affecting our product decisions."
              />
            </div>

            <button type="button" className="btn-primary w-full justify-center">
              Submit request
            </button>
            <p className="text-center text-xs leading-6 text-slate-500">
              By submitting this form, you agree to our standard processing of your business information for scoping purposes.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}