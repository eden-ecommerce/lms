const LOGOS = [
  "Transforming Lives for Good",
  "Christian360",
  "Eden.co.uk",
];

export function LogoStrip({ heading }: { heading: string }) {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {heading}
      </p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {LOGOS.map((logo) => (
          <li
            key={logo}
            className="font-serif text-lg font-semibold text-muted-foreground/70"
          >
            {logo}
          </li>
        ))}
      </ul>
    </div>
  );
}
