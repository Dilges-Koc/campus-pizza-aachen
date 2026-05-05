import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Campus Pizza Aachen",
  description:
    "Campus Pizza in Aachen: Jede Pizza 5,00 €, 3 Zutaten nach Wahl, 29 cm. Abholung, Speisekarte, Öffnungszeiten und Kontakt auf einen Blick.",
};

const pizzaZutaten = [
  "Paprika",
  "Jalapeños",
  "Peperoni",
  "Champignons",
  "Spinat",
  "Brokkoli",
  "Zwiebeln",
  "Oliven",
  "Tomaten",
  "Ei",
  "Mais",
  "Ananas",
  "Artischocken",
  "Krabben",
  "Meeresfrüchte",
  "Sardinen",
  "Weichkäse",
  "Mozzarella",
  "Gorgonzola",
  "Hähnchenbrust",
  "Hackfleisch",
  "Salami",
  "Schinken",
  "Thunfisch",
  "Sucuk",
  "BBQ-Sauce",
];

const baguettes = [
  { name: "Käse", price: "3,00 €" },
  { name: "Salami", price: "3,50 €" },
  { name: "Thunfisch", price: "3,50 €" },
  { name: "Hähnchenbrust", price: "3,50 €" },
];

const salate = [
  {
    name: "Gemischter Salat",
    price: "4,00 €",
    desc: "Eisbergsalat mit Gurken, Tomaten, Oliven und dazu 2 Pizzabrötchen.",
  },
  {
    name: "Thunfisch Salat",
    price: "4,90 €",
    desc: "Eisbergsalat mit Gurken, Tomaten, Oliven und Thunfisch.",
  },
  {
    name: "Artischocken Salat",
    price: "4,90 €",
    desc: "Eisbergsalat mit Gurken, Tomaten, Oliven und Artischocken.",
  },
  {
    name: "Hähnchen Salat",
    price: "5,90 €",
    desc: "Eisbergsalat mit Gurken, Tomaten, Zwiebeln, Champignons, Oliven und Hähnchenbrust.",
  },
];

const pizzabroetchen = [
  { name: "Käse", price: "2,90 €" },
  { name: "Salami", price: "3,50 €" },
  { name: "Thunfisch", price: "3,50 €" },
  { name: "Schinken", price: "3,50 €" },
  { name: "Hähnchenbrust", price: "3,50 €" },
  { name: "Spinat & Weichkäse", price: "3,50 €" },
];

const auflaeufe = [
  { name: "Bolognese", price: "7,00 €" },
  { name: "Quattro Formaggi", price: "7,00 €" },
  { name: "Hähnchenauflauf", price: "7,00 €" },
  { name: "Auflauf Spinaci", price: "7,00 €" },
  { name: "Hähnchen-Brokkoli", price: "7,00 €" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#1a1a1a]">
      <section className="bg-[#c61d23] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 text-sm md:flex-row md:items-center md:justify-between">
          <p className="font-semibold">Campus Pizza · Turmstraße 14 · 52072 Aachen</p>
          <div className="flex flex-wrap gap-5">
            <a href="tel:+4924195785202" className="font-semibold hover:underline">
              0241 95785202
            </a>
            <a
              href="https://maps.google.com/?q=Turmstraße+14+52072+Aachen"
              target="_blank"
              rel="noreferrer"
              className="font-semibold hover:underline"
            >
              Route öffnen
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_1fr] md:py-20">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit rounded-full bg-[#0e6b3d] px-4 py-2 text-sm font-bold text-white">
            Campus Pizza Aachen
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Jede Pizza{" "}
          <span className="whitespace-nowrap text-[#c61d23]">5,00 €</span>{" "}
          – mit{" "}
            <span className="text-[#0e6b3d]">3 Zutaten nach Wahl</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/75">
            29 cm Pizza mit Tomatensoße und Käse inklusive. Schnell, unkompliziert
            und ideal zum Abholen in Aachen.
          </p>

          <div className="mt-5 inline-flex w-fit rounded-full border border-[#15326c]/15 bg-[#15326c] px-4 py-2 text-sm font-semibold text-white">
            Nur Abholung · Keine Lieferung
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+4924195785202"
              className="rounded-full bg-[#c61d23] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Jetzt anrufen
            </a>
            <a
              href="#speisekarte"
              className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition hover:bg-black/5"
            >
              Speisekarte ansehen
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-black/50">Preis</p>
              <p className="mt-2 text-3xl font-bold text-[#c61d23]">5,00 €</p>
              <p className="mt-1 text-sm text-black/60">jede Pizza</p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-black/50">Größe</p>
              <p className="mt-2 text-3xl font-bold text-[#0e6b3d]">29 cm</p>
              <p className="mt-1 text-sm text-black/60">frisch zubereitet</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border-2 border-[#15326c] bg-white shadow-[0_20px_60px_rgba(21,50,108,0.18)]">
          <Image
            src="/campus-pizza/campus-pizza.jpg"
            alt="Campus Pizza Laden in Aachen"
            width={1200}
            height={1600}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="rounded-[2rem] border-2 border-[#15326c] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c61d23]">
            Das Angebot
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-[#c61d23] p-6 text-white">
              <p className="text-sm opacity-80">Pizza</p>
              <p className="mt-2 text-3xl font-extrabold">5,00 €</p>
              <p className="mt-2">3 Zutaten nach Wahl</p>
            </div>

            <div className="rounded-2xl bg-[#0e6b3d] p-6 text-white">
              <p className="text-sm opacity-80">Größe</p>
              <p className="mt-2 text-3xl font-extrabold">29 cm</p>
              <p className="mt-2">Tomatensoße & Käse inklusive</p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#f6f2ea] p-6">
              <p className="text-sm text-black/50">Extra Zutat</p>
              <p className="mt-2 text-3xl font-extrabold text-[#15326c]">+1,00 €</p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#f6f2ea] p-6">
              <p className="text-sm text-black/50">Hinweis</p>
              <p className="mt-2 text-xl font-bold text-[#15326c]">Keine Lieferung</p>
            </div>
          </div>
        </div>
      </section>

      <section id="speisekarte" className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c61d23]">
            Speisekarte
          </p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
            Alles auf einen Blick
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-black/70">
            Alle Speisen und Preise auf einen Blick. Für größere Bestellungen bitte
            frühzeitig telefonisch anfragen.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border-2 border-[#15326c] bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-extrabold text-[#15326c]">Pizza</h3>
                <span className="rounded-full bg-[#c61d23] px-4 py-2 text-sm font-bold text-white">
                  nur 5,00 €
                </span>
              </div>

              <p className="mt-4 leading-7 text-black/70">
                Jede Pizza mit Tomatensoße und Käse inklusive. 3 Zutaten nach Wahl.
                Durchmesser: 29 cm.
              </p>

              <div className="mt-8">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#c61d23]">
                  Zutaten
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {pizzaZutaten.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-[#f6f2ea] px-4 py-2 text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border-2 border-[#15326c] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-extrabold text-[#15326c]">Salate</h3>
              <p className="mt-3 text-black/70">
                Dressing nach Wahl: Cocktail, Joghurt oder Essig-Öl.
              </p>

              <div className="mt-6 space-y-5">
                {salate.map((item) => (
                  <div key={item.name} className="border-b border-black/10 pb-4 last:border-b-0">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-bold">{item.name}</h4>
                      <span className="font-bold text-[#c61d23]">{item.price}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-black/65">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] border-2 border-[#15326c] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-extrabold text-[#15326c]">Baguettes</h3>
              <p className="mt-3 text-sm leading-6 text-black/65">
                Frisch belegt mit Tomaten, Gurken und Remoulade.
              </p>

              <div className="mt-6 space-y-4">
                {baguettes.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-4 border-b border-dashed border-black/10 pb-3">
                    <span className="font-medium">{item.name}</span>
                    <span className="font-bold text-[#c61d23]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border-2 border-[#15326c] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-extrabold text-[#15326c]">Pizzabrötchen</h3>
              <p className="mt-3 text-sm leading-6 text-black/65">
                6 Stück gefüllte Pizzabrötchen.
              </p>

              <div className="mt-6 space-y-4">
                {pizzabroetchen.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-4 border-b border-dashed border-black/10 pb-3">
                    <span className="font-medium">{item.name}</span>
                    <span className="font-bold text-[#c61d23]">{item.price}</span>
                  </div>
                ))}

                <div className="pt-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium">Ungefüllt (5 Stück)</span>
                    <span className="font-bold text-[#c61d23]">2,00 €</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-4">
                    <span className="text-sm text-black/65">Kräuterbutter oder Aioli</span>
                    <span className="font-bold text-[#c61d23]">0,50 €</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border-2 border-[#15326c] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-extrabold text-[#15326c]">Aufläufe</h3>
              <p className="mt-3 text-sm leading-6 text-black/65">
                Nudel-Auflauf und Kartoffel-Auflauf jeweils erhältlich.
              </p>

              <div className="mt-6 space-y-4">
                {auflaeufe.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-4 border-b border-dashed border-black/10 pb-3">
                    <span className="font-medium">{item.name}</span>
                    <span className="font-bold text-[#c61d23]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border-2 border-[#15326c] bg-white shadow-sm">
            <Image
              src="/campus-pizza/flyer-1.jpg"
              alt="Flyer Vorderseite Campus Pizza"
              width={1200}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[2rem] border-2 border-[#15326c] bg-white shadow-sm">
            <Image
              src="/campus-pizza/flyer-2.jpg"
              alt="Flyer Rückseite Campus Pizza"
              width={1200}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-[2rem] bg-[#c61d23] p-8 text-white shadow-lg md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/75">
            Gruppen & Großbestellungen
          </p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
            Viele Pizzen für Uni, Feiern oder Events?
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Für Uni-Gruppen, Feiern, Events oder größere Bestellungen ab{" "}
            <strong>50 Pizzen</strong> bitte frühzeitig telefonisch anfragen.
            So kann die Bestellung besser vorbereitet und pünktlich abgeholt werden.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+4924195785202"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#c61d23] transition hover:opacity-90"
            >
              Großbestellung anfragen
            </a>
            <a
              href="https://maps.google.com/?q=Turmstraße+14+52072+Aachen"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Standort ansehen
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c61d23]">
            Kontakt & Öffnungszeiten
          </p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
            Vorbeikommen, anrufen, abholen
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[2rem] border-2 border-[#15326c] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#c61d23]">
              Adresse
            </p>
            <p className="mt-4 text-lg font-semibold">
              Turmstraße 14
              <br />
              52072 Aachen
            </p>
            <p className="mt-4 text-sm text-black/60">(Keine Lieferung)</p>
          </div>

          <div className="rounded-[2rem] border-2 border-[#15326c] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#c61d23]">
              Telefon
            </p>
            <a
              href="tel:+4924195785202"
              className="mt-4 block text-lg font-semibold hover:underline"
            >
              0241 95785202
            </a>
          </div>

          <div className="rounded-[2rem] border-2 border-[#15326c] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#c61d23]">
              Öffnungszeiten
            </p>
            <p className="mt-4 text-lg font-semibold">
              Mo–Fr: 12:00 – 22:00 Uhr
              <br />
              Sa, So & Feiertage: 13:00 – 22:00 Uhr
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#15326c] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between">
          <p>© 2026 Campus Pizza Aachen</p>

          <div className="flex flex-wrap gap-4 text-white/85">
            <a href="/impressum" className="hover:text-white">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-white">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}