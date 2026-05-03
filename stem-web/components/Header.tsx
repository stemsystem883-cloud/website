"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white border-b border-gray-100 shadow-sm"
          : "bg-white/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center" onClick={closeMenu}>
            <BrandLogo size={34} />
          </Link>
        </div>

        <nav className="hidden md:flex gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors link-underline ${
                (link.href === "/" ? pathname === "/" : pathname === link.href)
                  ? "text-primary-blue after:w-full"
                  : "text-gray-600 hover:text-deep-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/waitlist"
            className="hidden md:inline-flex btn-primary !h-9 !px-4 !py-0 !text-sm"
          >
            Join the waitlist
          </Link>
          <button
            className="md:hidden p-2 text-gray-600 hover:text-deep-ink transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`text-sm font-medium py-2 transition-colors ${
                (link.href === "/" ? pathname === "/" : pathname === link.href) ? "text-primary-blue" : "text-gray-700 hover:text-deep-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/waitlist"
            onClick={closeMenu}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-primary-blue px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Join the waitlist
          </Link>
        </nav>
      )}
    </header>
  );
}