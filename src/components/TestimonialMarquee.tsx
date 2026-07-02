import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { TestimonialEntry } from "../content/types";

interface Props {
  testimonials: TestimonialEntry[];
}

function TestimonialCard({ t, onReadMore }: { t: TestimonialEntry; onReadMore: () => void }) {
  return (
    <div className="w-[260px] sm:w-[300px] md:w-[340px] shrink-0 mx-2 md:mx-3 bg-surface-container-lowest border border-outline-variant rounded-[20px] p-5 md:p-6 flex flex-col gap-3">
      <span className="self-start px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-xs tracking-wide">
        {t.category}
      </span>
      <p className="font-body-md text-body-md text-on-surface leading-relaxed line-clamp-4 flex-1">
        "{t.quote}"
      </p>
      <div className="flex items-center justify-between">
        <p className="font-label-sm text-label-sm text-on-surface-variant text-sm">
          — {t.attribution}
        </p>
        <button
          onClick={onReadMore}
          className="text-primary font-label-sm text-xs hover:underline shrink-0 ml-3"
        >
          Read more
        </button>
      </div>
    </div>
  );
}

function TestimonialModal({ t, onClose }: { t: TestimonialEntry; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/30 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-surface-container-lowest border border-outline-variant rounded-3xl p-8 max-w-lg w-full shadow-xl z-10"
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-xs tracking-wide mb-6">
          {t.category}
        </span>
        <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-6">
          "{t.quote}"
        </p>
        <p className="font-label-sm text-label-sm text-on-surface-variant text-sm">
          — {t.attribution}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function TestimonialMarquee({ testimonials }: Props) {
  const [active, setActive] = useState<TestimonialEntry | null>(null);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <>
      <section className="py-section-padding-sm md:py-section-padding-lg overflow-hidden">
        <div className="flex overflow-hidden">
          <div
            className="marquee-track flex"
            style={{ animation: "marquee-left 80s linear infinite" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.animationPlayState = "running")
            }
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard
                key={`${t.id}-${i}`}
                t={t}
                onReadMore={() => setActive(t)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && <TestimonialModal t={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}
