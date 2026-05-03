import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { RequestForm } from "@/components/RequestForm";
import { PageReveal } from "@/components/PageReveal";

export const metadata: Metadata = {
  title: "Join the Waitlist | Stem",
  description: "Join the waitlist for Stem and be the first to know when we launch.",
  openGraph: {
    title: "Join the Waitlist | Stem",
    description: "Join the waitlist for Stem and be the first to know when we launch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Waitlist | Stem",
    description: "Join the waitlist for Stem and be the first to know when we launch.",
  },
};

const EXPECTATIONS = [
  {
    title: "Priority access",
    body: "Get notified as soon as we open up more seats for our limited rollout.",
  },
  {
    title: "Product updates",
    body: "Stay informed on new features and improvements as we build toward public launch.",
  },
  {
    title: "Direct feedback",
    body: "An opportunity to share your needs and help shape the future of Stem.",
  },
];

export default function WaitlistPage() {
  return (
    <div className="flex-1 bg-[#f7f9fc] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <PageReveal />
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <div className="lg:sticky lg:top-24" data-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary-blue/70">Waitlist</p>
          <h1 className="text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-5xl lg:text-[4rem] lg:leading-[1.04]">
            Join the waitlist for Stem.
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg leading-8 text-slate-600">
            We&apos;re currently in a limited rollout. Join the waitlist to get notified when we&apos;re ready to onboard new teams and companies.
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