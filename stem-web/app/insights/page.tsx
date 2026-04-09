import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Download, TrendingUp } from "lucide-react";
import { PageReveal } from "@/components/PageReveal";

export const metadata: Metadata = {
  title: "Insights | Stem Decision Intelligence",
  description: "Analysis, research, and perspectives on market change, decision intelligence, and competitive strategy in African financial markets.",
  openGraph: {
    title: "Insights | Stem",
    description: "Analysis and perspectives on market change and decision intelligence in African financial markets.",
  },
};

const ARTICLES = [
  {
    title: "Navigating the latest capital requirement shift",
    category: "Policy and risk",
    date: "March 15, 2026",
    excerpt: "A grounded view of what the latest change means for teams thinking about timing, exposure, and strategic response.",
  },
  {
    title: "Where market movement is becoming easier to miss",
    category: "Market shifts",
    date: "February 28, 2026",
    excerpt: "How teams can spot early movement before the broader narrative catches up.",
  },
  {
    title: "Competitor monitoring without constant manual checking",
    category: "Competition",
    date: "February 10, 2026",
    excerpt: "Why a clearer system matters more than collecting more tabs, alerts, and screenshots.",
  },
];

const CATEGORIES = ["Fintech", "Competition", "Market shifts", "Policy and risk", "Expansion", "Decision support"];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary-blue/70">{children}</p>;
}

export default function InsightsPage() {
  return (
    <div className="flex-1 bg-[#fbfcff]">
      <PageReveal />
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,99,235,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7faff_100%)]" />
        <div className="relative mx-auto max-w-[980px] text-center" data-reveal>
          <SectionLabel>Insights</SectionLabel>
          <h1 className="text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-5xl lg:text-[4.2rem] lg:leading-[1.04]">
            Market thinking for teams navigating change.
          </h1>
          <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-8 text-slate-600 sm:text-xl">
            Reports, briefs, and observations designed to help fintech and financial companies/teams and decision makers understand what is changing and why it matters.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)] p-7 shadow-[0_18px_44px_rgba(15,23,42,0.06)]" data-reveal>
            <SectionLabel>Featured Brief</SectionLabel>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-deep-ink sm:text-4xl lg:text-5xl">
              The state of market clarity for fintech/financial teams.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A practical look at how you or teams deal with external ambiguity, where decision friction shows up, and why better timing starts with better visibility.
            </p>
            <div className="mt-8">
              <button className="btn-primary">
                <Download className="h-4 w-4" /> Download brief
              </button>
            </div>
          </div>
          <div className="rounded-[30px] border border-slate-200 bg-[#0f172a] p-7 text-white shadow-[0_24px_64px_rgba(15,23,42,0.28)]" data-reveal>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-200">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-3xl font-semibold">What this covers</h3>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <li>Where teams lose time when information is fragmented.</li>
              <li>How market change becomes harder to interpret under pressure.</li>
              <li>What a more useful decision-support workflow should look like.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-wrap gap-3" data-reveal>
            {CATEGORIES.map((cat) => (
              <span key={cat} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                {cat}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3" data-reveal-group>
            {ARTICLES.map((article) => (
              <article key={article.title} className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.10)]">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-primary-blue/15 bg-primary-blue/5 px-3 py-1 text-xs font-semibold text-primary-blue">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400">Publishing soon</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-deep-ink">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary-blue/80">
                  Brief preview
                  <ArrowRight className="h-4 w-4" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] px-6 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[840px] text-center" data-reveal>
          <TrendingUp className="mx-auto h-12 w-12 text-primary-blue" />
          <h2 className="mt-6 text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            When insight needs to become action, start with a scoping call.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Talk through the market questions your team is trying to answer and where Stem could make the workflow clearer.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/request-call" className="btn-primary">
              Get the brief and discuss fit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/platform" className="btn-secondary">
              Explore the platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}