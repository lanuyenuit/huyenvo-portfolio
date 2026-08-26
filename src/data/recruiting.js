/* Screening material: role targets, FAQ, and the two sections that stay
   hidden until there is something real to put in them. */

/* ---- What I'm looking for: answers the screening call before it happens ---- */
export const LOOKING = [
  { k: "Titles", v: "Software Engineer, Frontend Engineer, Full Stack Engineer" },
  { k: "Level", v: "Mid to senior — 6 years shipping production code" },
  { k: "Stack", v: "React or Next.js with TypeScript, Node backends, Postgres" },
  { k: "Team", v: "Product teams that ship weekly and review each other's code" },
  { k: "Location", v: "Dallas / DFW onsite or hybrid, or fully remote US" },
  { k: "Start date", v: "Available immediately" },
];

/* ---- Recruiter FAQ ---- */
export const FAQ = [
  {
    q: "Do you need visa sponsorship?",
    a: "No. I'm authorized to work in the US and require no sponsorship, now or in the future.",
  },
  {
    q: "Your experience is from Vietnam — how does that translate?",
    a: "I worked at CMC Global and NFQ Asia, both software consultancies delivering for Western clients, so the working language was English and the process was standard Agile with sprint ceremonies, code review and QA handoff. My degree has a completed US credential evaluation from ECE.",
  },
  {
    q: "Are you open to relocation?",
    a: "Yes. I'm in Dallas now and open to relocating for the right role, including back to Southern California, where I lived previously.",
  },
  {
    q: "What are you strongest at?",
    a: "Frontend architecture in React and TypeScript — component design, state management, forms and validation, and the testing around them. I'm comfortable in a Node/Express backend and reading SQL, but I'd describe backend as supporting rather than primary.",
  },
  {
    q: "What are you actively learning?",
    a: "AWS Solutions Architect Associate, and Kubernetes past the concept level — I'm containerizing my own projects rather than reading about it.",
  },
  {
    q: "How fast do you respond?",
    a: "Within one business day, usually sooner. Email is fastest.",
  },
];

/*
  METRICS — leave empty until you have REAL numbers. The section hides itself
  when this array is empty, so nothing invented ever ships.

  Go dig these out of Jira, your PR history, or old standup notes. Examples of
  the shape to look for:
    { n: "40%",  label: "Faster dashboard load", sub: "After query batching and memoization" }
    { n: "120+", label: "Pull requests reviewed", sub: "Across two product teams" }
    { n: "0",    label: "P1 regressions in 2025", sub: "On the checkout flow I owned" }
  One real number beats six adjectives.
*/
export const METRICS = [];

/*
  TESTIMONIALS — same rule. Ask two former colleagues for three sentences each.
  A line from a tech lead who watched you work is worth more than anything you
  can write about yourself.
    { quote: "...", who: "Name", role: "Tech Lead, CMC Global" }
*/
export const TESTIMONIALS = [];
