/* Vocabulary for the job-description matcher in src/lib/analyse.js. */

/* ---- Skill profile powering the job-description matcher ---- */
export const SKILL_PROFILE = [
  { name: "React", weight: 3, aliases: ["react", "react.js", "reactjs"] },
  { name: "TypeScript", weight: 3, aliases: ["typescript", "ts"] },
  { name: "JavaScript", weight: 3, aliases: ["javascript", "js", "es6"] },
  { name: "Next.js", weight: 2, aliases: ["next.js", "nextjs", "next js"] },
  { name: "Node.js", weight: 3, aliases: ["node", "node.js", "nodejs"] },
  { name: "Express", weight: 2, aliases: ["express", "express.js"] },
  { name: "REST APIs", weight: 2, aliases: ["rest", "rest api", "restful", "web services"] },
  { name: "PostgreSQL", weight: 2, aliases: ["postgres", "postgresql", "sql", "rdbms"] },
  { name: "Redux", weight: 2, aliases: ["redux", "redux toolkit", "rtk"] },
  { name: "React Query", weight: 1, aliases: ["react query", "tanstack"] },
  { name: "HTML/CSS", weight: 2, aliases: ["html", "css", "scss", "sass", "responsive"] },
  { name: "Jest", weight: 2, aliases: ["jest", "unit test", "unit testing"] },
  { name: "Testing Library", weight: 1, aliases: ["testing library", "rtl"] },
  { name: "Cypress", weight: 1, aliases: ["cypress"] },
  { name: "Playwright", weight: 1, aliases: ["playwright", "end-to-end", "e2e"] },
  { name: "Docker", weight: 2, aliases: ["docker", "container", "containers"] },
  { name: "CI/CD", weight: 2, aliases: ["ci/cd", "ci cd", "continuous integration", "github actions"] },
  { name: "Git", weight: 2, aliases: ["git", "github", "gitlab", "version control"] },
  { name: "Agile", weight: 1, aliases: ["agile", "scrum", "sprint"] },
  { name: "Accessibility", weight: 1, aliases: ["accessibility", "a11y", "wcag", "aria"] },
  { name: "AWS", weight: 1, aliases: ["aws", "amazon web services", "cloud"] },
  { name: "Kubernetes", weight: 1, aliases: ["kubernetes", "k8s"] },
  { name: "Webpack/Vite", weight: 1, aliases: ["webpack", "vite", "bundler"] },
  { name: "Microservices", weight: 1, aliases: ["microservice", "microservices"] },
];

/* Things a job req might ask for that aren't on the profile — honest gap detection. */
export const GAP_VOCAB = [
  { name: "Angular", aliases: ["angular", "angularjs"] },
  { name: "Vue", aliases: ["vue", "vue.js", "vuejs"] },
  { name: "Svelte", aliases: ["svelte"] },
  { name: "GraphQL", aliases: ["graphql", "apollo"] },
  { name: "Python", aliases: ["python", "django", "flask", "fastapi"] },
  { name: "Java", aliases: ["java", "spring", "spring boot"] },
  { name: "C#/.NET", aliases: ["c#", ".net", "dotnet", "asp.net"] },
  { name: "Go", aliases: ["golang", "go lang"] },
  { name: "Ruby", aliases: ["ruby", "rails"] },
  { name: "PHP", aliases: ["php", "laravel"] },
  { name: "MongoDB", aliases: ["mongodb", "mongo", "nosql"] },
  { name: "Redis", aliases: ["redis"] },
  { name: "Kafka", aliases: ["kafka", "rabbitmq", "message queue"] },
  { name: "Terraform", aliases: ["terraform", "infrastructure as code"] },
  { name: "Azure", aliases: ["azure"] },
  { name: "GCP", aliases: ["gcp", "google cloud"] },
  { name: "React Native", aliases: ["react native", "mobile app"] },
  { name: "Swift/Kotlin", aliases: ["swift", "kotlin", "ios development", "android development"] },
  { name: "Machine learning", aliases: ["machine learning", "ml model", "pytorch", "tensorflow"] },
  { name: "Salesforce", aliases: ["salesforce", "apex"] },
];

export const SAMPLE_JD = `Senior Frontend Engineer

We're looking for an engineer to own the customer-facing web experience.

Requirements:
- 5+ years building production web applications with React and TypeScript
- Strong grasp of state management (Redux or similar) and data fetching patterns
- Experience with Node.js and consuming REST APIs
- Comfortable writing unit tests with Jest and end-to-end tests
- Familiarity with CI/CD pipelines and Docker
- Experience with accessibility standards (WCAG)
- Works in an Agile/Scrum environment with sprint planning and code review

Nice to have:
- Next.js, GraphQL, AWS`;
