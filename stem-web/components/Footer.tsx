import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-[#fbfcff] px-6 py-14 text-slate-600 lg:px-8">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div className="col-span-1 sm:col-span-2 md:col-span-2">
          <Link href="/" className="inline-flex items-center">
            <BrandLogo size={38} />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Stem helps companies, teams, and decision makers know what matters, less guesswork, see what changing decide faster with confidence.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-deep-ink mb-4">Product</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/platform" className="hover:text-primary-blue link-underline">Platform</Link></li>
            <li><Link href="/solutions" className="hover:text-primary-blue link-underline">Solutions</Link></li>
            <li><Link href="/use-cases" className="hover:text-primary-blue link-underline">Use Cases</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-deep-ink mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-primary-blue link-underline">About</Link></li>
            <li><Link href="/insights" className="hover:text-primary-blue link-underline">Insights</Link></li>
            <li><Link href="/request-call" className="hover:text-primary-blue link-underline">Get early access</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1280px] items-center justify-between border-t border-slate-200 pt-8 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Stem. All rights reserved.</p>
      </div>
    </footer>
  );
}