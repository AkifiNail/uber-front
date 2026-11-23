import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "Dèche – Vos restos livrés, même à la dèche",
};

export default function HomePage() {
  return <Hero />;
}
