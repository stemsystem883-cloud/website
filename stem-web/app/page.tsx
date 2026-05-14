import type { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Stem | Decision Intelligence & Business Intelligence Nigeria",
  description:
    "Stem helps fintech and financial-services companies in Nigeria detect meaningful market changes early. The leading decision intelligence platform for Nigerian business growth and automated financial reporting.",
  alternates: {
    canonical: "https://thestemgrid.com",
  },
};

export default function Home() {
  return <HomeClient />;
}
