import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://https://campus-pizza-aachen.vercel.app"),
  title: "Campus Pizza Aachen",
  description:
    "Campus Pizza in Aachen: Jede Pizza 5,00 €, 3 Zutaten nach Wahl, 29 cm. Speisekarte, Öffnungszeiten und Kontakt auf einen Blick.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}