import { useState } from "react";
import { LuCode, LuExternalLink, LuLoader, LuWifiOff } from "react-icons/lu";
import { projects } from "../data/projects";

const ProjectCard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  const hasCode = project.codeUrl && project.codeUrl.trim() !== "";
  const hasLive = project.liveUrl && project.liveUrl.trim() !== "";

  const isTeam =
    project.team &&
    (project.team.toLowerCase() === "team");

  return (
    <div
      className="relative h-110 md:h-130 cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-(--card-background) border border-(--border-color) rounded-lg overflow-hidden flex flex-col hover:border-(--accent) hover:shadow-lg transition-colors duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Image */}
          <div className="w-full h-40 overflow-hidden shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Project type badge */}
          <span className="absolute top-2 right-2 text-xs md:text-sm font-medium text-white bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full">
            {project.type}
          </span>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5 gap-1">
            <h3 className="text-lg md:text-xl font-semibold text-(--text-primary) line-clamp-2">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium mt-0.5">{project.duration}</p>

            {/* Problem */}
            <div>
              <h4 className="text-xs md:text-sm font-bold text-red-500 uppercase tracking-widest mb-1 mt-3">
                Problem
              </h4>
              <p className="text-xs md:text-sm text-(--text-secondary) leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1 mt-auto">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 bg-(--bg-primary) text-(--accent) text-xs md:text-sm font-medium rounded border border-(--border-color)"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 pt-1 text-xs md:text-sm text-(--text-secondary)">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Flip hint */}
          <div className="px-5 pb-5 flex items-center gap-1 text-xs text-(--text-secondary) opacity-60">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Click to read more</span>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-(--card-background) border border-(--accent) rounded-lg flex flex-col p-5 gap-3"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-(--text-primary) leading-snug">
            {project.title}
          </h3>

          {/* Duration + Role name tag */}
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-xs md:text-sm text-gray-500 font-medium">{project.duration}</p>
            {project.roleName && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-(--accent)/10 text-(--accent) border border-(--accent)/30 tracking-wide">
                {project.roleName}
              </span>
            )}
          </div>

          <div className="h-px bg-(--border-color)"></div>

          {/* Solution / Role description */}
          <div>
            <h4 className="text-xs md:text-sm font-bold text-green-700 uppercase tracking-widest mb-1">
              Role
            </h4>
            <p className="text-xs md:text-sm text-(--text-secondary) leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-(--bg-primary) text-(--accent) text-xs md:text-sm font-medium rounded border border-(--border-color)"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto flex flex-col gap-2">
            <div className="flex gap-2">
              {/* Code button */}
              {hasCode ? (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md border border-(--border-color) text-(--text-secondary) hover:text-yellow-600 hover:bg-(--hover-bg) transition-all duration-200"
                  title="View code"
                >
                  <LuCode className="w-4 h-4" />
                </a>
              ) : (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md border border-dashed border-amber-400 text-amber-400 cursor-default opacity-80"
                  title="Project in progress"
                >
                  <LuLoader className="w-4 h-4 animate-spin" />
                </div>
              )}

              {/* Live URL button */}
              {hasLive ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md border border-(--border-color) text-(--text-secondary) hover:text-green-700 hover:bg-(--hover-bg) transition-all duration-200"
                  title="Visit project"
                >
                  <LuExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md border border-dashed border-gray-400 text-gray-400 cursor-default opacity-80"
                  title="Live site not available"
                >
                  <LuWifiOff className="w-4 h-4" />
                </div>
              )}
            </div>

            {/* Status messages */}
            <div className="flex flex-col gap-0.5">
              {!hasCode && (
                <p className="text-xs text-amber-500 flex items-center gap-1">
                  <LuLoader className="w-3 h-3 animate-spin shrink-0" />
                  This project is currently in progress
                </p>
              )}
              {!hasLive && (
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <LuWifiOff className="w-3 h-3 shrink-0" />
                  Live site not available at this time
                </p>
              )}
            </div>
          </div>

          {/* Flip back hint */}
          <div className="flex items-center gap-1 text-xs text-(--text-secondary) opacity-60">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Click to go back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-14 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) flex items-center gap-3">
            <span className="text-(--primary)">03.</span> PROJECTS
          </h2>
          <div className="hidden sm:flex flex-1 h-px bg-linear-to-r from-(--accent) to-transparent"></div>
          <span className="hidden md:block text-sm text-(--text-secondary) uppercase tracking-widest whitespace-nowrap">
            // Case Studies
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;