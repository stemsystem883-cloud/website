import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { RequestForm } from "@/components/RequestForm";
import { PageReveal } from "@/components/PageReveal";

export const metadata: Metadata = {
  title: "Get Early Access | Stem",
  description: "Request early access to Stem and talk through your team's market intelligence needs.",
  openGraph: {
    title: "Get Early Access | Stem",
    description: "Talk through your team's market intelligence needs and see how Stem can sharpen your decision workflow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Early Access | Stem",
    description: "Talk through your team's market intelligence needs and see how Stem can sharpen your decision workflow.",
  },
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
      <PageReveal />
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <div className="lg:sticky lg:top-24" data-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary-blue/70">Get Early Access</p>
          <h1 className="text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-5xl lg:text-[4rem] lg:leading-[1.04]">
            Let&apos;s scope your intelligence needs.
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg leading-8 text-slate-600">
            Every team and companies has different blind spots. This call helps us understand what you or your team and company is trying to track, assess, or decide and where Stem could make that workflow clearer.
          </p>

          <div className="mt-8 space-y-4" data-reveal-group>
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

        <div data-reveal>
          <RequestForm />
        </div>
      </div>
    </div>
  );
}