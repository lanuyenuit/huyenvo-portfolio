/*
  Page composition only. Everything else lives beside it:

    data/       the content — edit here to change what the page says
    sections/   one component per band of the page, top to bottom
    components/ pieces reused across sections
    hooks/      shared behaviour (reveal on scroll, pointer tracking, …)
    lib/        pure logic, no React
    styles/     portfolio.css

  Fonts and the document head are in index.html.
*/

import "./styles/portfolio.css";

import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { ProgressBar } from "./components/ProgressBar";
import { Nav } from "./components/Nav";
import { Ticker } from "./components/Ticker";

import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";
import { PracticeWork } from "./sections/PracticeWork";
import { Metrics } from "./sections/Metrics";
import { Matcher } from "./sections/Matcher";
import { Approach } from "./sections/Approach";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Testimonials } from "./sections/Testimonials";
import { Looking } from "./sections/Looking";
import { Faq } from "./sections/Faq";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function Portfolio() {
  const reduce = usePrefersReducedMotion();

  return (
    <div className="pf">
      <ProgressBar />
      <Nav />

      <Hero reduce={reduce} />
      <Ticker />

      <Work reduce={reduce} />
      <PracticeWork />
      <Metrics />
      <Matcher reduce={reduce} />
      <Approach />
      <Experience />
      <Skills />
      <Testimonials />
      <Looking />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
