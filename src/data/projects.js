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
        "Extraction runs through a chain of three Llama models on Groq. A 429 from one model isn't a failed request — the call drops to the next model down the chain, so a rate limit costs a little accuracy instead of losing the job posting.",
    },
    specs: [
      ["Frontend", "React 19, TypeScript, Vite, React Router 7, Tailwind 4"],
      ["Backend", "Node.js, Express, pnpm monorepo, multer + pdf-parse for CV upload"],
      ["Auth", "JWT access tokens (15 min) with rotating refresh tokens — SHA-256 hashed in Postgres, httpOnly cookie scoped to /api/auth, bcrypt at cost 12, rate limiting on register and login"],
      ["Data", "PostgreSQL on Neon, six sequential migrations, seeded company registry"],
      ["AI", "Groq SDK, three-model Llama fallback chain"],
      ["Infra", "Deployed on Vercel, GitHub Actions"],
      ["Role", "Sole engineer — architecture, implementation, deployment"],
    ],
    /* Screenshots. Put the files in /public/shots/. Any that fail to load are
       hidden automatically, so a missing file never shows a broken image. */
    shots: [
      { src: "./shots/jobintel-dashboard.png", alt: "Job listings dashboard" },
      { src: "./shots/jobintel-match.png", alt: "Résumé match scoring view" },
      { src: "./shots/jobintel-signin.png", alt: "JobIntel sign-in screen" },
    ],
    detail: [
      {
        h: "Failing over on rate limits without hiding real failures",
        p: "The retry loop catches HTTP 429 only, and only while another model is left in the chain. Every other error — a malformed prompt, a bad key, a schema the parser can't read — is re-thrown on the spot. Blanket-catching would have made the endpoint look reliable while quietly returning nothing.",
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
      { label: "Repository", href: "https://github.com/lanuyenuit/irvine-jobs-app" },
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
