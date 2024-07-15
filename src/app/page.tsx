import { Card } from "@/components/card/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CordarSe - Página inicial",
};

export default function PageHome() {
  return (
    <main className="bg-background">
      <Card />
    </main>
  );
}
