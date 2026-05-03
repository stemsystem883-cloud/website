"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "What is The Stem-Cogent and how does it help fintechs?",
    answer: "The Stem-Cogent is Stem's proprietary market intelligence framework. It helps fintechs by filtering scattered market signals into a structured grid of competitor moves, regulatory shifts, and expansion opportunities, allowing teams to act with more confidence.",
  },
  {
    question: "How does the platform help with business intelligence in Nigeria?",
    answer: "Stem provides high-intent business intelligence specifically for the Nigerian financial sector. We monitor local payment trends, CBN circulars, and regional competitor movement to provide a clearer picture of the market landscape.",
  },
  {
    question: "Who are the primary users of The Stem-Cogent?",
    answer: "The Stem-Cogent is built for strategy leads, growth and expansion leads, founders, CEOs, and research analysts at fintech startups and financial institutions who need to make data-driven decisions.",
  },
  {
    question: "How can The Stem-Cogent identify early market shifts in African fintech?",
    answer: "By monitoring a wide array of high-fidelity signals—from regulatory hints to competitor pricing changes—The Stem-Cogent spots patterns early, giving your team the visibility needed to lead rather than react.",
  },
  {
    question: "Does the platform provide real-time data on Nigerian payment trends?",
    answer: "Yes, we track and surface meaningful changes in payment trends and infrastructure moves across the Nigerian market as they happen, ensuring your team stays ahead of the curve.",
  },
  {
    question: "How does decision intelligence differ from standard business analytics?",
    answer: "While standard analytics focus on historical internal data, Stem's decision intelligence focuses on external market shifts and future-facing signals, providing the 'why' and 'what next' behind the numbers.",
  },
  {
    question: "Is The Stem-Cogent a standalone platform or does it integrate with existing tools?",
    answer: "Stem is designed to be a focused decision-support environment. We currently provide structured briefs and reports that can be easily shared and integrated into your team's existing strategic workflows.",
  },
  {
    question: "What kind of reports can my team generate using the platform?",
    answer: "Teams generate decision briefs, competitor monitoring summaries, risk/policy alerts, and market visibility reports designed for direct use in leadership and strategy meetings.",
  },
  {
    question: "How does The Stem-Cogent ensure data accuracy in the Nigerian financial sector?",
    answer: "We source signals from trusted primary sources, including official regulatory filings, verified news hub, and direct market observations, ensuring a high level of reliability for your strategic calls.",
  },
  {
    question: "What is the ROI of using a decision intelligence platform for my startup?",
    answer: "The ROI comes from faster decision cycles, reduced manual research time, and avoiding expensive blind spots in competitive response or regulatory compliance.",
  },
  {
    question: "How does The Stem-Cogent protect sensitive organizational data?",
    answer: "Security is foundational. We employ industry-standard encryption and follow strict data handling protocols to ensure your team's strategic focus areas remain private.",
  },
  {
    question: "How does The Stem improve data accuracy for Nigerian financial and fintech institutions?",
    answer: "By cross-referencing multiple signal sources and applying our 'Stem Cogent' filter, we reduce the noise and misinformation often found in raw market data, providing a ground-truth perspective.",
  },
  {
    question: "What are the key benefits of using automated business intelligence in Nigeria?",
    answer: "Automation allows for 24/7 monitoring of the fast-paced Nigerian market, ensuring that important policy changes or competitor moves are never missed due to human bandwidth limits.",
  },
  {
    question: "Is The Stem compliant with Nigerian Data Protection Regulation (NDPR)?",
    answer: "Yes, we are committed to full compliance with the NDPR, ensuring that all data processing activities meet the highest standards of privacy and legal requirements in Nigeria.",
  },
  {
    question: "How can Nigerian startups and companies use decision intelligence to scale operations?",
    answer: "Startups use Stem to map expansion opportunities, time their product launches based on market readiness, and defend their growth strategies with hard market data.",
  },
  {
    question: "What is the difference between standard reporting and The Stem decision intelligence?",
    answer: "Standard reporting tells you what happened; Stem decision intelligence tells you what is changing, why it matters for your specific goals, and how it affects your next strategic move.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-3xl mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary-blue/70">FAQ</p>
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Everything you need to know about Stem, The Stem-Cogent, and our approach to business intelligence in Nigeria.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            {FAQS.slice(0, 8).map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-deep-ink leading-relaxed">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 flex-shrink-0 text-primary-blue" />
                  ) : (
                    <Plus className="h-5 w-5 flex-shrink-0 text-slate-400" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {FAQS.slice(8).map((faq, index) => {
              const actualIndex = index + 8;
              return (
                <div
                  key={actualIndex}
                  className="overflow-hidden rounded-[24px] border border-slate-200 bg-white transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-deep-ink leading-relaxed">
                      {faq.question}
                    </span>
                    {openIndex === actualIndex ? (
                      <Minus className="h-5 w-5 flex-shrink-0 text-primary-blue" />
                    ) : (
                      <Plus className="h-5 w-5 flex-shrink-0 text-slate-400" />
                    )}
                  </button>
                  {openIndex === actualIndex && (
                    <div className="px-6 pb-6">
                      <p className="text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
