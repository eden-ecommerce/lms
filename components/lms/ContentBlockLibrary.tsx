type Block = { name: string; category: Category };
type Category = "content" | "interactive" | "engagement" | "assessment" | "benchmarking";

const CATEGORY_STYLES: Record<Category, string> = {
  content: "border-primary/30 bg-primary/5 text-primary",
  interactive: "border-sky-500/30 bg-sky-500/5 text-sky-700",
  engagement: "border-amber-500/30 bg-amber-500/5 text-amber-700",
  assessment: "border-rose-500/30 bg-rose-500/5 text-rose-700",
  benchmarking: "border-emerald-600/30 bg-emerald-600/5 text-emerald-700",
};

const CATEGORY_LABELS: Record<Category, string> = {
  content: "Content",
  interactive: "Interactive",
  engagement: "Engagement",
  assessment: "Assessment",
  benchmarking: "Benchmarking",
};

const BLOCKS: Block[] = [
  { name: "Read / Article", category: "content" },
  { name: "Video", category: "content" },
  { name: "Audio (AI transcription)", category: "content" },
  { name: "Document / PDF", category: "content" },
  { name: "External Link", category: "content" },
  { name: "Video & PDF", category: "content" },
  { name: "Devotional Media", category: "content" },
  { name: "Interactive Timeline", category: "content" },
  { name: "Poll", category: "interactive" },
  { name: "Interactive Video", category: "interactive" },
  { name: "Hotspot / Image Map", category: "interactive" },
  { name: "Live Classroom Activity", category: "interactive" },
  { name: "Flashcards", category: "engagement" },
  { name: "Memory Game", category: "engagement" },
  { name: "Word Search", category: "engagement" },
  { name: "Crossword", category: "engagement" },
  { name: "Word Puzzle", category: "engagement" },
  { name: "Drag & Drop Matching", category: "engagement" },
  { name: "Sorting Challenge", category: "engagement" },
  { name: "Reflection Journal", category: "engagement" },
  { name: "Survey (8 types)", category: "engagement" },
  { name: "Quiz", category: "assessment" },
  { name: "Assignment", category: "assessment" },
  { name: "Fill in the Blanks", category: "assessment" },
  { name: "Benchmark Pre-Survey", category: "benchmarking" },
  { name: "Benchmark Post-Survey", category: "benchmarking" },
];

const CATEGORIES: Category[] = [
  "content",
  "interactive",
  "engagement",
  "assessment",
  "benchmarking",
];

export function ContentBlockLibrary() {
  return (
    <div>
      <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
        {CATEGORIES.map((cat) => (
          <li key={cat} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <span
              className={`size-2.5 rounded-full border ${CATEGORY_STYLES[cat].split(" ").slice(0, 2).join(" ")}`}
              aria-hidden
            />
            {CATEGORY_LABELS[cat]}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap justify-center gap-2.5">
        {BLOCKS.map((block) => (
          <span
            key={block.name}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${CATEGORY_STYLES[block.category]}`}
          >
            {block.name}
          </span>
        ))}
      </div>
    </div>
  );
}
