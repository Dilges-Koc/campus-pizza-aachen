import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | Campus Pizza Aachen",
  description: "Impressum von Campus Pizza Aachen.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#1a1a1a]">
      <section className="bg-[#15326c] text-white">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/75">
            Rechtliches
          </p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Impressum
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-[2rem] border-2 border-[#15326c] bg-white p-8 shadow-sm md:p-10">
          <div className="space-y-8 leading-8 text-black/80">
            <section>
              <h2 className="text-2xl font-extrabold text-[#15326c]">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="mt-4">
                Campus Pizza
                <br />
                Adris Koc
                <br />
                Turmstraße 14
                <br />
                52072 Aachen
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#15326c]">
                Kontakt
              </h2>
              <p className="mt-4">
                Telefon: 0241 95785202
                <br />
                E-Mail: adriskoc@outlook.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#15326c]">
                Vertreten durch
              </h2>
              <p className="mt-4">Adris Koc</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#15326c]">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-4">
                Adris Koc
                <br />
                Turmstraße 14
                <br />
                52072 Aachen
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#15326c]">
                Haftung für Inhalte
              </h2>
              <p className="mt-4">
                Trotz sorgfältiger inhaltlicher Kontrolle wird keine Gewähr für
                die Aktualität, Vollständigkeit und Richtigkeit der
                bereitgestellten Inhalte übernommen.
              </p>
            </section>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex rounded-full bg-[#c61d23] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}