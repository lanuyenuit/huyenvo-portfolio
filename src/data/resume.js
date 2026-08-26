/* Employment history and the toolkit grid. */

export const JOBS = [
  {
    when: "DEC 2022 — JUN 2026",
    org: "CMC Global",
    where: "Vietnam",
    role: "Software Engineer",
    bullets: [
      "Built and maintained web application components in React, TypeScript and Node.js/Express, working from design documentation and user stories through to release builds.",
      "Delivered API-connected forms, dashboards and authentication screens — validation flows, error states and responsive layouts across complex user journeys.",
      "Integrated REST services with JSON and XML payloads, handling data mapping, response parsing, client state and business workflow behavior.",
      "Wrote unit and integration tests with Jest and React Testing Library; supported end-to-end coverage in Cypress and Playwright.",
      "Contributed to CI/CD workflows using Git, GitHub Actions, Docker, Vite and Webpack, with code review on every change.",
    ],
  },
  {
    when: "JUN 2019 — NOV 2022",
    org: "NFQ Asia",
    where: "Vietnam",
    role: "Full Stack Developer",
    bullets: [
      "Developed full-stack features in JavaScript, TypeScript and React with REST-backed workflows, from product requirements through to production.",
      "Built reusable components, data tables, dashboards and customer-facing pages for business-critical flows.",
      "Partnered with backend engineers and QA to reproduce defects, verify fixes and reduce regressions ahead of each release.",
      "Improved code quality through reviews, refactoring and performance work on component architecture.",
    ],
  },
  {
    when: "2019",
    org: "UIT — VNU-HCM",
    where: "Vietnam",
    role: "B.E. Information Systems",
    bullets: [
      "University of Information Technology, Vietnam National University Ho Chi Minh City.",
      "US credential evaluation completed by Educational Credential Evaluators (ECE).",
    ],
  },
];

export const SKILLS = [
  { g: "Languages", items: [["TypeScript", 1], ["JavaScript", 1], ["HTML5", 1], ["CSS3 / SCSS", 1], ["SQL", 1], ["Java", 0], ["Python", 0]] },
  { g: "Frontend", items: [["React", 1], ["Next.js", 1], ["Redux Toolkit", 1], ["React Query", 1], ["React Hook Form", 0], ["Accessibility", 0], ["Performance", 0]] },
  { g: "Backend & data", items: [["Node.js", 1], ["Express", 1], ["REST APIs", 1], ["PostgreSQL", 1], ["JWT auth", 0], ["JSON / XML", 0], ["NoSQL", 0]] },
  { g: "Testing", items: [["Jest", 1], ["React Testing Library", 1], ["Cypress", 0], ["Playwright", 0], ["Integration testing", 0]] },
  { g: "Platform", items: [["Docker", 1], ["GitHub Actions", 1], ["CI/CD", 1], ["Kubernetes", 0], ["Microservices", 0], ["AWS", 0]] },
  { g: "Tooling", items: [["Git", 1], ["Vite", 1], ["Webpack", 0], ["Jira", 0], ["Chrome DevTools", 0], ["Figma handoff", 0]] },
];
