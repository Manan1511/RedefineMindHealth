import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSiteContent } from "../content/SiteContentProvider";
import Reveal from "../components/Reveal";

export default function Services() {
  const { content } = useSiteContent();
  const { services, contact } = content;
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="max-w-container-max mx-auto px-gutter md:px-section-padding-sm pt-32 pb-section-padding-lg overflow-hidden">
      <Reveal className="text-center max-w-2xl mx-auto mb-section-padding-sm">
        <h1 className="font-display-xl-mobile text-display-xl-mobile md:font-headline-lg md:text-headline-lg mb-6">
          Services
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Tailored, evidence-informed support, at your pace, in a space that feels safe.
        </p>
      </Reveal>

      <div className="flex flex-col gap-4">
        {services.map((s, i) => {
          const isOpen = expanded === s.id;
          return (
            <Reveal key={s.id} delay={i * 0.04}>
              <div className="bg-surface rounded-[24px] border border-surface-variant shadow-[0_4px_24px_rgba(49,48,44,0.05)] overflow-hidden">
                {/* Summary row */}
                <button
                  onClick={() => setExpanded(isOpen ? null : s.id)}
                  className="w-full flex items-center gap-5 p-6 md:p-8 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-secondary-container text-xl">
                      {s.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-headline-md text-headline-md text-[20px] md:text-[24px] mb-1">
                      {s.title}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                      {s.blurb}
                    </p>
                  </div>
                  <span
                    className={`material-symbols-outlined shrink-0 text-on-surface-variant transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {/* Expanded details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 border-t border-outline-variant">
                        <p className="font-body-lg text-body-lg text-on-surface-variant whitespace-pre-line mt-6 mb-8">
                          {s.details || s.blurb}
                        </p>
                        <a
                          href={contact.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary-container text-on-surface font-label-sm text-label-sm hover:opacity-90 transition-opacity"
                        >
                          Book a Session
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
