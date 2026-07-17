import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { useSiteContent } from "../content/SiteContentProvider";
import { transformImage } from "../lib/imageTransform";

export default function Gallery() {
  const { content } = useSiteContent();
  const gallery = content.gallery ?? [];
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="max-w-container-max mx-auto px-gutter md:px-section-padding-sm pt-32 pb-section-padding-lg overflow-hidden">
      <Reveal className="text-center max-w-2xl mx-auto mb-section-padding-sm">
        <h1 className="font-display-xl-mobile text-display-xl-mobile md:font-headline-lg md:text-headline-lg mb-6">
          Gallery
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Moments from workshops, sessions, and the practice space.
        </p>
      </Reveal>

      {gallery.length === 0 ? (
        <p className="text-center font-body-md text-body-md text-on-surface-variant">
          Photos coming soon.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {gallery.map((item, i) => (
            <Reveal key={item.id} delay={(i % 6) * 0.05}>
              <button
                onClick={() => setActive(i)}
                className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-surface-variant"
              >
                <img
                  src={transformImage(item.url, 500)}
                  alt={item.caption || "Gallery photo"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                {item.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-body-md text-body-md text-white text-sm line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                )}
              </button>
            </Reveal>
          ))}
        </div>
      )}

      <AnimatePresence>
        {active !== null && gallery[active] && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={transformImage(gallery[active].url, 1400, 80)}
                alt={gallery[active].caption || "Gallery photo"}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              {gallery[active].caption && (
                <p className="mt-4 text-center font-body-md text-body-md text-white/90">
                  {gallery[active].caption}
                </p>
              )}
              <button
                onClick={() => setActive(null)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
