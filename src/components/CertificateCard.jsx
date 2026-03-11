import React, { useState } from "react";
import { LuExternalLink } from "react-icons/lu";

const CertificateCard = ({ cert }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-72 cursor-pointer"
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
        {/* Front */}
        <div
          className="absolute inset-0 bg-(--card-background) border border-(--border-color) rounded-xl overflow-hidden flex flex-col hover:border-(--accent) hover:shadow-lg transition-colors duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full h-36 overflow-hidden shrink-0">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover"
            />
          </div>

          <span className="absolute top-2 right-2 text-xs font-medium text-white bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full">
            {cert.receivedDate}
          </span>

          <div className="flex flex-col flex-1 p-4 gap-1">
            <p className="md:text-sm text-xs font-semibold text-(--accent) uppercase tracking-wide truncate">
              {cert.issuer}
            </p>
            <h3 className="md:text-sm text-xs font-bold text-(--text-primary) leading-snug line-clamp-2">
              {cert.title}
            </h3> 
          </div>

          <div className="px-4 pb-3 flex items-center gap-1 text-xs text-(--text-secondary) opacity-60">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Click to read more</span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-(--card-background) border border-(--accent) rounded-xl flex flex-col p-5 gap-3"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <p className="md:text-sm text-xs font-semibold text-(--accent) uppercase tracking-wide mb-1">
              {cert.issuer}
            </p>
            <h3 className="md:text-sm text-xs font-bold text-(--text-primary) leading-snug mb-3">
              {cert.title}
            </h3>
            <div className="h-px bg-(--border-color) mb-3"></div>
            <p className="md:text-sm text-xs text-(--text-secondary) leading-relaxed">
              {cert.description}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <span className="text-xs text-(--text-secondary) font-medium">
              {cert.receivedDate}
            </span>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-(--accent) hover:text-(--primary) transition-colors duration-200"
            >
              <span>View</span>
              <LuExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-1 text-[10px] text-(--text-secondary) opacity-60">
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

export default CertificateCard;