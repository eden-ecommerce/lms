type Stat = { value: string; label: string };

const DEFAULT_STATS: Stat[] = [
  { value: "26", label: "Content block types" },
  { value: "11", label: "Analytics report areas" },
  { value: "6", label: "Learner experience modes" },
  { value: "6", label: "Native platform integrations" },
];

export function StatStrip({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-card p-6 text-center">
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="block font-serif text-3xl font-semibold text-primary sm:text-4xl">
              {s.value}
            </span>
            <span className="mt-1 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {s.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
