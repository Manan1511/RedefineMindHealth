import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSiteContent } from "../../../content/SiteContentProvider";
import { useSave } from "../useSave";
import SaveBar from "../SaveBar";
import type { TestimonialEntry } from "../../../content/types";

const CATEGORIES = [
  "Individual Counselling",
  "Couples Counselling",
  "Career Counselling",
  "Mental Fitness Assessment",
  "Corporate Workshop",
];

function newTestimonial(): TestimonialEntry {
  return { id: `t-${Date.now()}`, quote: "", attribution: "", category: CATEGORIES[0] };
}

export default function AdminTestimonials() {
  const { content, loading } = useSiteContent();
  const { save, status, errorMsg } = useSave();
  const [entries, setEntries] = useState<TestimonialEntry[]>(() => content.testimonials ?? []);
  const [editing, setEditing] = useState<TestimonialEntry | null>(null);
  const [isNew, setIsNew] = useState(false);

  if (loading) return <div className="py-20 text-center font-body-md text-on-surface-variant">Loading…</div>;

  function openNew() { setIsNew(true); setEditing(newTestimonial()); }
  function openEdit(t: TestimonialEntry) { setIsNew(false); setEditing({ ...t }); }
  function cancelEdit() { setEditing(null); }

  function commitEdit() {
    if (!editing) return;
    if (isNew) {
      setEntries((prev) => [...prev, editing]);
    } else {
      setEntries((prev) => prev.map((t) => (t.id === editing.id ? editing : t)));
    }
    setEditing(null);
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((t) => t.id !== id));
  }

  function handleSave() {
    save({ ...content, testimonials: entries });
  }

  const inputClass =
    "w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-4 py-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow";

  return (
    <section className="bg-surface rounded-2xl border border-outline-variant overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-lowest flex justify-between items-center">
        <h2 className="font-headline-md text-[24px] text-on-background">Testimonials</h2>
        <button
          onClick={openNew}
          className="flex items-center gap-2 text-primary font-label-sm text-label-sm hover:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined">add</span> Add Review
        </button>
      </div>

      <AnimatePresence>
        {editing && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="p-6 space-y-4 bg-surface-container-low border-b border-outline-variant">
              <h3 className="font-label-sm text-label-sm text-on-background">
                {isNew ? "New Review" : "Edit Review"}
              </h3>
              <div>
                <label className="block font-label-sm text-label-sm text-on-background mb-1">Category</label>
                <select
                  className={inputClass}
                  value={editing.category}
                  onChange={(e) => setEditing((p) => p && ({ ...p, category: e.target.value }))}
                >
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-background mb-1">Quote</label>
                <textarea
                  rows={4}
                  className={`${inputClass} resize-y`}
                  value={editing.quote}
                  onChange={(e) => setEditing((p) => p && ({ ...p, quote: e.target.value }))}
                  placeholder="What the client said…"
                />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-background mb-1">Attribution</label>
                <input
                  type="text"
                  className={inputClass}
                  value={editing.attribution}
                  onChange={(e) => setEditing((p) => p && ({ ...p, attribution: e.target.value }))}
                  placeholder="e.g. Young Professional, Married Couple"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={commitEdit}
                  className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  {isNew ? "Add" : "Update"}
                </button>
                <button
                  onClick={cancelEdit}
                  className="text-on-surface-variant font-label-sm text-label-sm px-5 py-2 rounded-full hover:bg-surface-container transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ul className="divide-y divide-outline-variant">
        {entries.length === 0 && (
          <li className="p-6 text-center font-body-md text-body-md text-on-surface-variant">
            No testimonials yet. Add one above.
          </li>
        )}
        {entries.map((t) => (
          <li key={t.id} className="p-6 hover:bg-surface-container-lowest transition-colors flex items-start justify-between gap-4">
            <div className="space-y-1 min-w-0">
              <span className="inline-block px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-xs mb-1">
                {t.category}
              </span>
              <p className="font-body-md text-body-md text-on-surface text-sm line-clamp-2">"{t.quote}"</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant text-xs">{t.attribution}</p>
            </div>
            <div className="flex gap-1 shrink-0">
              <button onClick={() => openEdit(t)} className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-full transition-colors">
                <span className="material-symbols-outlined text-base">edit</span>
              </button>
              <button onClick={() => deleteEntry(t.id)} className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container rounded-full transition-colors">
                <span className="material-symbols-outlined text-base">delete</span>
              </button>
            </div>
          </li>
        ))}
      </ul>

      <SaveBar status={status} errorMsg={errorMsg} onSave={handleSave} label="Save Testimonials" />
    </section>
  );
}
