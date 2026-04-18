import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TokenFlow — AI Token Management für deinen Haushalt",
  description:
    "Behalte den Überblick über den AI-Token-Verbrauch in deinem Smart Home. Setze Budgets für Kinder, Geräte und Auto. Die Haushaltskasse fürs AI-Zeitalter.",
  keywords: [
    "Token Management",
    "AI Budget",
    "Smart Home",
    "KI Verbrauch",
    "Familie",
    "Parental Control",
    "DACH",
  ],
  openGraph: {
    title: "TokenFlow — AI Token Management",
    description:
      "Die Haushaltskasse fürs AI-Zeitalter. Tokens verwalten wie Strom oder Wasser.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
