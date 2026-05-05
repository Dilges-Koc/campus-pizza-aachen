import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz | Campus Pizza Aachen",
  description: "Datenschutzerklärung von Campus Pizza Aachen.",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#1a1a1a]">
      <section className="bg-[#15326c] text-white">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/75">
            Rechtliches
          </p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-[2rem] border-2 border-[#15326c] bg-white p-8 shadow-sm md:p-10">
          <div className="space-y-8 leading-8 text-black/80">
            <section>
              <h2 className="text-2xl font-extrabold text-[#15326c]">
                1. Verantwortlicher
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
                <br />
                adriskoc@outlook.de
                <br />
                Telefon: 0241 95785202
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#15326c]">
                2. Allgemeine Hinweise
              </h2>
              <p className="mt-4">
                Der Schutz personenbezogener Daten ist wichtig. Personenbezogene
                Daten werden auf dieser Website nur im erforderlichen Umfang
                verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#15326c]">
                3. Hosting
              </h2>
              <p className="mt-4">
                Diese Website wird bei Vercel gehostet. Beim Aufruf der Website
                können technisch erforderliche Daten wie IP-Adresse,
                Browserinformationen, Uhrzeit des Zugriffs und Logdaten
                verarbeitet werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#15326c]">
                4. Kontaktaufnahme
              </h2>
              <p className="mt-4">
                Wenn du telefonisch oder per E-Mail Kontakt aufnimmst, werden
                die dabei übermittelten Daten zur Bearbeitung der Anfrage
                verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#15326c]">
                5. Cookies und technisch notwendige Funktionen
              </h2>
              <p className="mt-4">
                Diese Website verwendet derzeit keine Marketing- oder
                Analyse-Cookies. Es können technisch notwendige Funktionen
                eingesetzt werden, die für den Betrieb der Website erforderlich
                sind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#15326c]">
                6. Rechte betroffener Personen
              </h2>
              <p className="mt-4">
                Betroffene Personen haben im Rahmen der gesetzlichen Vorgaben
                insbesondere das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung sowie Widerspruch.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-[#15326c]">
                7. Kontakt zum Datenschutz
              </h2>
              <p className="mt-4">
                Bei Fragen zum Datenschutz kann Kontakt aufgenommen werden über:
                <br />
                adriskoc@outlook.de
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