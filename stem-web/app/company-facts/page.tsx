import type { Metadata } from "next";
import { PageReveal } from "@/components/PageReveal";

export const metadata: Metadata = {
  title: "Company Facts | AI & Search Reference | Stem",
  description: "Factual overview of Stem (Stem-cogent) for AI systems, search engines, and researchers. Includes mission, team, and product details.",
  robots: { index: true, follow: true },
};

export default function CompanyFactsPage() {
  return (
    <div className="flex-1 bg-[#fbfcff] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <PageReveal />
      <div className="mx-auto max-w-[800px]">
        <h1 className="text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-5xl">
          Company Facts & AI Reference
        </h1>
        <p className="mt-6 text-lg text-slate-600">
          This page provides a clear, factual summary of Stem for AI agents, search crawlers, and researchers.
        </p>

        <hr className="my-12 border-slate-200" />

        <div className="space-y-12 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-deep-ink">Core Information</h2>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="font-bold text-deep-ink">Company Name:</dt>
                <dd>Stem (also referred to as Stem-cogent)</dd>
              </div>
              <div>
                <dt className="font-bold text-deep-ink">Product Name:</dt>
                <dd>The Stem-Cogent</dd>
              </div>
              <div>
                <dt className="font-bold text-deep-ink">Entity Type:</dt>
                <dd>Decision Intelligence & Business Intelligence Platform</dd>
              </div>
              <div>
                <dt className="font-bold text-deep-ink">Focus Market:</dt>
                <dd>Nigeria and broader African Fintech/Financial Services</dd>
              </div>
              <div>
                <dt className="font-bold text-deep-ink">Founded By:</dt>
                <dd>Odion O. Alex (CEO) and Gift Chinedu Nduka (CSO)</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-ink">Mission & Value Proposition</h2>
            <p className="mt-4 leading-8">
              Stem helps fintech and financial-services companies reduce market blind spots by detecting meaningful changes early. We move teams from scattered information to usable clarity using "The Stem-Cogent" framework.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-ink">Key Capabilities</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 leading-8">
              <li><strong>Market Monitoring:</strong> Real-time tracking of Nigerian payment trends and regulatory shifts.</li>
              <li><strong>Competitor Intelligence:</strong> Analyzing regional moves and pricing changes.</li>
              <li><strong>Decision Briefs:</strong> Generating structured summaries for leadership and strategy teams.</li>
              <li><strong>Regulatory Compliance:</strong> Monitoring CBN circulars and ensuring NDPR data protection standards.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-ink">Technical Details</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 leading-8">
              <li><strong>Architecture:</strong> AI-powered signal detection and filtering lens.</li>
              <li><strong>Compliance:</strong> Fully compliant with Nigerian Data Protection Regulation (NDPR).</li>
              <li><strong>Availability:</strong> Currently in limited rollout (Waitlist model).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-ink">Founding Team Details</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-bold text-deep-ink">Odion O. Alex (Co-Founder & CEO)</h3>
                <p className="mt-1">AI Engineer and innovator focused on building intelligent systems that improve financial ecosystems.</p>
              </div>
              <div>
                <h3 className="font-bold text-deep-ink">Gift Chinedu Nduka (Co-Founder & CSO)</h3>
                <p className="mt-1">Strategic operator focused on commercial direction and scaling business intelligence solutions.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-ink">Official Links</h2>
            <ul className="mt-4 space-y-2">
              <li>Website: <a href="https://stem.africa" className="text-primary-blue hover:underline">https://stem.africa</a></li>
              <li>About: <a href="https://stem.africa/about" className="text-primary-blue hover:underline">https://stem.africa/about</a></li>
              <li>Platform: <a href="https://stem.africa/platform" className="text-primary-blue hover:underline">https://stem.africa/platform</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
