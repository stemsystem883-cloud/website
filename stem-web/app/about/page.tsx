import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Mail, Shield, Sparkles } from "lucide-react";
import { PageReveal } from "@/components/PageReveal";
import teamMemberOne from "../../team/pf.jpg";
import teamMemberTwo from "../../team/2_gift~3.jpg";

export const metadata: Metadata = {
  title: "About | Founding Team | Stem Decision Intelligence",
  description: "Learn about Stem and its founders, Odion O. Alex and Gift Chinedu Nduka. Built to help African fintech and financial-services companies move with clarity.",
  keywords: [
    "Odion O. Alex",
    "Gift Chinedu Nduka",
    "Stem founders",
    "fintech founders Nigeria",
    "African decision intelligence",
    "market intelligence team",
  ],
  openGraph: {
    title: "About Stem | Founding Team",
    description: "Built by Odion O. Alex and Gift Chinedu Nduka to help African fintech and financial-services companies move with clarity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Stem | Founding Team",
    description: "Built by Odion O. Alex and Gift Chinedu Nduka to help African fintech and financial-services companies move with clarity.",
  },
};

const PRINCIPLES = [
  {
    title: "Clarity over noise",
    body: "You and your teams do not need more scattered information. You need a better way to understand what matters.",
  },
  {
    title: "Calm product design",
    body: "Stem-cogent helps decision makers and teams think more clearly under pressure, without overwhelming them with unnecessary complexity.",
  },
  {
    title: "Useful before impressive",
    body: "Designed to help decision makers and teams make real decisions faster, with less guesswork and less manual effort.",
  },
  {
    title: "Trust through restraint",
    body: "We would rather make grounded claims and build something genuinely useful than hide behind hype or technical theater.",
  },
];

const TEAM_MEMBERS = [
  {
    image: teamMemberOne,
    name: "Odion O. Alex",
    label: "Founding team",
    role: "Co-Founder and CEO",
    body: "An entrepreneur, AI engineer, and innovative builder driven by a passion to create intelligent systems that strengthen and improve the ecosystem around them.",
    objectPosition: "50% 16%",
    accent: "bg-[linear-gradient(180deg,#edf6ff_0%,#f7f9fc_100%)]",
    linkedin: "https://www.linkedin.com/in/alex-marco1820/",
  },
  {
    image: teamMemberTwo,
    name: "Gift Chinedu Nduka",
    label: "Founding team",
    role: "Co-Founder and CSO",
    body: "A strategic operator with the skills to build and scale businesses, focused on shaping a sharper commercial direction for Stem and the teams it serves.",
    objectPosition: "50% 20%",
    accent: "bg-[linear-gradient(180deg,#fff3f1_0%,#f7f9fc_100%)]",
    linkedin: "https://www.linkedin.com/in/gift-nduka/",
  },
];

const personSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Odion O. Alex",
    "jobTitle": "Co-Founder and CEO",
    "affiliation": {
      "@type": "Organization",
      "name": "Stem"
    },
    "url": "https://stem.africa/about",
    "sameAs": [
      "https://www.linkedin.com/in/alex-marco1820/"
    ],
    "description": "An entrepreneur, AI engineer, and innovative builder driven by a passion to create intelligent systems."
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gift Chinedu Nduka",
    "jobTitle": "Co-Founder and CSO",
    "affiliation": {
      "@type": "Organization",
      "name": "Stem"
    },
    "url": "https://stem.africa/about",
    "sameAs": [
      "https://www.linkedin.com/in/gift-nduka/"
    ],
    "description": "A strategic operator with the skills to build and scale businesses, focused on shaping a sharper commercial direction for Stem."
  }
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary-blue/70">{children}</p>;
}

export default function AboutPage() {
  return (
    <div className="flex-1 bg-[#fbfcff]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <PageReveal />
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,99,235,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7faff_100%)]" />
        <div className="relative mx-auto max-w-[980px] text-center" data-reveal>
          <SectionLabel>About Stem-Cogent</SectionLabel>
          <h1 className="text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-5xl lg:text-[4.2rem] lg:leading-[1.04]">
            Built for decision makers and teams making important decisions in companies and fast-moving markets.
          </h1>
          <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-8 text-slate-600 sm:text-xl">
            Stem-cogent exists to help fintech and financial teams reduce blind spots, cut through fragmented signals, and make business decisions with more confidence.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          <div className="rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)] p-7 shadow-[0_18px_44px_rgba(15,23,42,0.06)]" data-reveal>
            <SectionLabel>Why We Built Stem-cogent</SectionLabel>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-deep-ink sm:text-4xl lg:text-5xl">
              Important market decisions are still made with incomplete visibility.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Strategy, growth, and leadership teams often work across fragmented market information. Signals live in different places, change at different speeds, and rarely arrive in a form that is easy to discuss.
              </p>
              <p>
                We built Stem-cogent because more raw information is not the answer. Leaders, innovative teams need usable clarity. They need to know what changed, why it matters, and what deserves attention now.
              </p>
            </div>
          </div>

          <div className="rounded-[30px] border border-primary-blue/15 bg-[linear-gradient(180deg,#ffffff_0%,#eef4ff_100%)] p-7 shadow-[0_18px_44px_rgba(53,99,235,0.10)]" data-reveal>
            <SectionLabel>What We Are Trying To Build</SectionLabel>
            <div className="space-y-4">
              {[
                "A clearer way to keep up with market change.",
                "A more useful view of what matters and why.",
                "A calmer foundation for difficult business decisions.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white bg-white/80 px-4 py-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-blue" />
                  <p className="text-sm font-medium leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] px-6 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl">
            <SectionLabel>Principles</SectionLabel>
            <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              The ideas shaping the product and the company.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2" data-reveal-group>
            {PRINCIPLES.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-[0_18px_44px_rgba(2,6,23,0.16)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(2,6,23,0.22)]">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl" data-reveal>
            <SectionLabel>Founding Team</SectionLabel>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-deep-ink sm:text-4xl lg:text-5xl">
              The people building Stem.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Stem-cogent is being shaped by a small founding team focused on one thing: giving financial teams a clearer way to understand market change and make better decisions faster.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2" data-reveal-group>
            {TEAM_MEMBERS.map((member, index) => (
              <article
                key={member.name}
                className={`overflow-hidden rounded-[32px] border border-slate-200 shadow-[0_18px_44px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.10)] ${member.accent}`}
              >
                {/* Responsive layout: vertical on mobile, horizontal on sm+ */}
                <div className="flex flex-col sm:flex-row sm:items-stretch h-full">
                  {/* Image container — fixed height on mobile, fixed width on sm+ */}
                  <div className="relative h-[300px] w-full shrink-0 overflow-hidden bg-[#eaf0fb] sm:h-auto sm:w-[200px]">
                    <Image
                      src={member.image}
                      alt={`${member.name} portrait`}
                      fill
                      priority={index === 0}
                      quality={85}
                      sizes="(min-width: 640px) 200px, 100vw"
                      className="object-cover"
                      style={{ objectPosition: member.objectPosition }}
                    />
                    {/* Gradient overlay: bottom-up on mobile, left-to-right on sm+ */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-black/10" />
                  </div>

                  {/* Info — centered on sm+, naturally stacked on mobile */}
                  <div className="flex flex-col justify-start sm:justify-center gap-3 p-6 sm:p-8 sm:flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary-blue/70">
                      {member.label}
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-deep-ink">{member.name}</h3>
                      <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                        {member.role} at Stem
                      </p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{member.body}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-primary-blue/30 hover:text-primary-blue"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        LinkedIn
                      </a>
                      <a
                        href="mailto:placeholder@stem.africa"
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-primary-blue/30 hover:text-primary-blue"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <div data-reveal>
            <SectionLabel>Early Rollout</SectionLabel>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-deep-ink sm:text-4xl lg:text-5xl">
              Built for a real problem companies and teams face every day.
            </h2>
            <p className="mt-6 max-w-[48ch] text-lg leading-8 text-slate-600">
              We&apos;re currently speaking with a small number of teams ahead of public launch. That early work is shaping the product toward clarity, usefulness, and trust.
            </p>
          </div>
          <div className="rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)] p-7 shadow-[0_18px_44px_rgba(15,23,42,0.06)]" data-reveal>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-deep-ink">What matters right now</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A sharper product for real teams. Grounded claims. Clearer decisions. Less wasted effort.
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-4 py-4">
              <div className="flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5 text-primary-blue" />
                <p className="text-sm font-medium leading-7 text-slate-700">
                  We are deliberately building trust through focus, product clarity, and honest positioning rather than inflated claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] px-6 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[840px] text-center" data-reveal>
          <h2 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            See how Stem could support your team&apos;s decision environment.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/waitlist" className="btn-primary">
              Join the waitlist <ArrowRight className="h-4 w-4" />
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