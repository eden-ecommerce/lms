import {
  BookOpen,
  CheckCircle2,
  CircleDot,
  Lock,
  Play,
  FileText,
  Layers,
  MessageCircleQuestion,
  TrendingUp,
} from "lucide-react";

/* ----------------------------------------------------------------------------
 * Static, presentational mockups of the learner / admin platform UI.
 * These are illustrative only — they contain no live data.
 * ------------------------------------------------------------------------- */

function Bar({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] text-muted-foreground">
        <span>{label}</span>
        <span className="font-medium text-foreground">{value}%</span>
      </div>
      <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-primary" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

/** Course module list with progress + gated states. */
export function CourseBuilderScreen() {
  const modules = [
    { title: "Module 0 — Welcome & Getting Started", icon: CheckCircle2, state: "done" },
    { title: "Module 1 — A Foundational Coaching Approach", icon: CheckCircle2, state: "done" },
    { title: "Module 2 — Enabling Others to Think", icon: CircleDot, state: "active" },
    { title: "Module 3 — Coaching to Empower Change", icon: Lock, state: "locked" },
    { title: "Module 4 — Managing Difference", icon: Lock, state: "locked" },
  ];
  return (
    <div>
      <div className="flex items-center gap-2">
        <BookOpen className="size-4 text-primary" />
        <span className="text-sm font-semibold text-foreground">Coaching Academy</span>
        <span className="ml-auto rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-accent-foreground">
          Blended · 8 modules
        </span>
      </div>
      <ul className="mt-4 flex flex-col gap-2">
        {modules.map(({ title, icon: Icon, state }) => (
          <li
            key={title}
            className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 ${
              state === "active"
                ? "border-primary/40 bg-primary/5"
                : "border-border bg-background"
            }`}
          >
            <Icon
              className={`size-4 shrink-0 ${
                state === "locked" ? "text-muted-foreground" : "text-primary"
              }`}
            />
            <span
              className={`truncate text-xs ${
                state === "locked" ? "text-muted-foreground" : "text-foreground"
              }`}
            >
              {title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Lesson with a sequence of content blocks. */
export function ContentBlocksScreen() {
  const blocks = [
    { icon: Play, label: "Video — Listening as a skill", tag: "content" },
    { icon: FileText, label: "Read — The GROW model", tag: "content" },
    { icon: Layers, label: "Flashcards — Coaching frameworks", tag: "engagement" },
    { icon: MessageCircleQuestion, label: "Reflection journal", tag: "engagement" },
  ];
  return (
    <div>
      <span className="text-sm font-semibold text-foreground">Lesson 2.3 · Content blocks</span>
      <ul className="mt-4 flex flex-col gap-2">
        {blocks.map(({ icon: Icon, label, tag }) => (
          <li
            key={label}
            className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2.5"
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon className="size-3.5" />
            </span>
            <span className="truncate text-xs text-foreground">{label}</span>
            <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Analytics overview with KPIs and benchmark uplift. */
export function AnalyticsScreen() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <TrendingUp className="size-4 text-primary" />
        <span className="text-sm font-semibold text-foreground">Programme impact</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { v: "78", l: "Enrolments" },
          { v: "92%", l: "Completion" },
          { v: "+1.8", l: "Confidence" },
        ].map((k) => (
          <div key={k.l} className="rounded-lg border border-border bg-background p-2.5 text-center">
            <p className="font-serif text-lg font-semibold text-foreground">{k.v}</p>
            <p className="text-[10px] text-muted-foreground">{k.l}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <Bar value={84} label="Pre-survey confidence" />
        <Bar value={96} label="Post-survey confidence" />
      </div>
      <p className="mt-3 rounded-lg bg-accent/50 px-3 py-2 text-[10px] leading-relaxed text-accent-foreground">
        AI theme analysis: learners cite &ldquo;structured frameworks&rdquo; and
        &ldquo;safe practice&rdquo; as the biggest drivers of growth.
      </p>
    </div>
  );
}

/** Cohort schedule with release dates. */
export function CohortScreen() {
  const rows = [
    { m: "Module 1", d: "13 May", live: "In-person" },
    { m: "Module 2", d: "10 Jun", live: "Online" },
    { m: "Module 3", d: "14 Jul", live: "Online" },
    { m: "Module 7", d: "10 Feb", live: "In-person" },
  ];
  return (
    <div>
      <span className="text-sm font-semibold text-foreground">May 2026 Cohort · Release schedule</span>
      <ul className="mt-4 flex flex-col gap-2">
        {rows.map((r) => (
          <li
            key={r.m}
            className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2.5 text-xs"
          >
            <span className="font-medium text-foreground">{r.m}</span>
            <span className="ml-auto text-muted-foreground">{r.d}</span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
              {r.live}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
