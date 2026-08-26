/* Selected work. Each project drives one card in the Work section. */

export const PROJECTS = [
  {
    id: "jobs",
    title: "Irvine Job Intelligence",
    year: "2026",
    state: "building",
    stateLabel: "In progress",
    tags: ["Frontend", "Backend", "AI", "Infra"],
    blurb:
      "A crawler and dashboard that watches career pages across Orange County tech companies, turns each posting into a structured record with an LLM, and scores it against an uploaded résumé.",
    hook: {
      label: "The interesting decision",
      text:
        "Three LLM providers sit behind one interface. A rate limit or outage on any single provider degrades the crawl instead of stopping it — extraction falls through to the next available model and keeps going.",
    },
    specs: [
      ["Frontend", "React, Next.js, TypeScript"],
      ["Backend", "Node.js, Express, pnpm monorepo, JWT auth, multer + PDF parsing"],
      ["Data", "PostgreSQL on Neon, six sequential migrations, seeded company registry"],
      ["AI", "Anthropic, Gemini and Groq SDKs behind a shared extraction interface"],
      // TODO: confirm where the API actually runs. The live URL is on Vercel, but the
      // long-running crawl was the reason for choosing Render. Whichever is true, this
      // line and the "Why Render and not Vercel" note below must agree with reality —
      // a reviewer WILL click the link and notice a mismatch.
      ["Infra", "Deployed on Vercel, GitHub Actions"],
      ["Role", "Sole engineer — architecture, implementation, deployment"],
    ],
    /* Screenshots. Put the files in /public/shots/. Any that fail to load are
       hidden automatically, so a missing file never shows a broken image. */
    shots: [
      { src: "./shots/jobintel-signin.png", alt: "JobIntel sign-in screen" },
      { src: "./shots/jobintel-dashboard.png", alt: "Job listings dashboard" },
      { src: "./shots/jobintel-match.png", alt: "Résumé match scoring view" },
    ],
    detail: [
      {
        h: "Why Render and not Vercel for the API",
        p: "A crawl pass runs for minutes, and résumé upload streams a PDF through multer before parsing. Both patterns exceed serverless execution limits, so the API runs as a long-lived process on Render while the Next.js frontend stays on Vercel where it belongs.",
      },
      {
        h: "Why Neon for Postgres",
        p: "Render's free database expires after thirty days, which is fine for a demo and useless for a tool you actually rely on. Neon's free tier persists, so the schema and seed data survive.",
      },
      {
        h: "What I'd do differently",
        p: "The crawler runs on request. It should be a scheduled job with a queue in front of it, so one slow career page can't hold up the rest of the batch. That's the next piece of work.",
      },
    ],
    links: [
      { label: "Live app", href: "https://irvine-jobs-app-api.vercel.app/", primary: true },
      { label: "API repository", href: "https://github.com/lanuyenuit/irvine-jobs-app" },
      { label: "Frontend repository", href: "https://github.com/lanuyenuit/job-intelligence" },
    ],
  },
  {
    id: "ds",
    title: "Component library & design system",
    year: "Proposed",
    state: "planned",
    stateLabel: "Proposed",
    tags: ["Frontend"],
    blurb:
      "An accessible React component set — form controls, data table, modal, toast — published to npm with a docs site, visual regression tests and a changelog.",
    hook: {
      label: "Why this one",
      text:
        "Your résumé claims reusable component architecture and accessibility. This is the artifact that proves it in four seconds of clicking instead of asking a reviewer to take your word for it.",
    },
    specs: [
      ["Suggested", "React, TypeScript, Radix primitives, Storybook, Vitest, Playwright"],
      ["Show off", "Keyboard navigation, ARIA correctness, theming tokens, bundle size"],
      ["Effort", "~2 weekends for a credible v0.1"],
    ],
    detail: [],
    links: [],
  },
  {
    id: "rt",
    title: "Real-time collaboration board",
    year: "Proposed",
    state: "planned",
    stateLabel: "Proposed",
    tags: ["Frontend", "Backend"],
    blurb:
      "A shared kanban board where several people move cards at once — WebSocket transport, optimistic UI, and conflict resolution when two edits land together.",
    hook: {
      label: "Why this one",
      text:
        "It's the clearest way to show you can reason about state that isn't request/response, which is the actual dividing line between mid and senior in most frontend interviews.",
    },
    specs: [
      ["Suggested", "Next.js, Socket.IO or Yjs, Redis pub/sub, PostgreSQL"],
      ["Show off", "Optimistic updates, reconnection handling, presence indicators"],
      ["Effort", "~3 weekends"],
    ],
    detail: [],
    links: [],
  },
  {
    id: "k8s",
    title: "Containerized deploy template",
    year: "Proposed",
    state: "planned",
    stateLabel: "Proposed",
    tags: ["Infra"],
    blurb:
      "A starter repo that takes a Node API from commit to running container: multi-stage Dockerfile, GitHub Actions with test and lint gates, health checks, Kubernetes manifests.",
    hook: {
      label: "Why this one",
      text:
        "It converts \u201cDocker, Kubernetes concepts\u201d on your résumé into something a reviewer can read — and it doubles as the deployment path for the job intelligence platform.",
    },
    specs: [
      ["Suggested", "Docker, GitHub Actions, Kubernetes (kind locally), Helm"],
      ["Show off", "Image size, cached layers, zero-downtime rollout, secrets handling"],
      ["Effort", "~2 weekends, and it pays for itself"],
    ],
    detail: [],
    links: [],
  },
];

/* Tag values the Work filter row offers. "All" is not a tag — it clears the filter. */
export const FILTERS = ["All", "Frontend", "Backend", "AI", "Infra"];
