import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";
import { vercelURL } from "./utils";
import HomePage from "./components/HomePage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Color Warrior",
    description: "Let's go to color battle",
    other: {
      ...(await fetchMetadata(
        new URL(
          "/frames",
          vercelURL() || "http://localhost:3000"
        )
      )),
    },
  };
}

// This is a react server component only
export default async function Home() {
  return (
    <HomePage />
  );
}
