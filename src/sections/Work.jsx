import { useState, useMemo } from "react";
import { SectionHead } from "../components/SectionHead";
import { ProjectCard } from "../components/ProjectCard";
import { PROJECTS, FILTERS } from "../data/projects";

export function Work({ reduce }) {
  const [filter, setFilter] = useState("All");

  const shown = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter))),
    [filter]
  );

  return (
    <section className="wrap sec" id="work">
      <SectionHead title="Selected work" count={`${shown.length} of ${PROJECTS.length} shown`} />

      <div className="filters" role="group" aria-label="Filter projects by area">
        {FILTERS.map((f) => (
          <button
            key={f}
            className="filter"
            data-on={filter === f ? "1" : "0"}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* keyed on filter so the stagger replays whenever the set changes */}
      <div className="work" key={filter}>
        {shown.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} reduce={reduce} />
        ))}
      </div>
    </section>
  );
}
