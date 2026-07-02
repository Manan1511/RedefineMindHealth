import { useState } from "react";
import { useSiteContent } from "../../../content/SiteContentProvider";
import { useSave } from "../useSave";
import SaveBar from "../SaveBar";
import { defaultContent } from "../../../content/defaultContent";

export default function AdminResearch() {
  const { content, loading } = useSiteContent();
  const { save, status, errorMsg } = useSave();

  const initial = content.research ?? defaultContent.research;
  const [about, setAbout] = useState(initial.about);
  const [interests, setInterests] = useState<string[]>(initial.interests);
  const [studyTitle, setStudyTitle] = useState(initial.studyTitle);
  const [studyDescription, setStudyDescription] = useState(initial.studyDescription);
  const [formUrl, setFormUrl] = useState(initial.formUrl);

  if (loading) return <div className="py-20 text-center font-body-md text-on-surface-variant">Loading…</div>;

  const inputClass =
    "w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-4 py-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow";

  function updateInterest(i: number, val: string) {
    setInterests((prev) => prev.map((x, idx) => (idx === i ? val : x)));
  }
  function addInterest() {
    setInterests((prev) => [...prev, ""]);
  }
  function removeInterest(i: number) {
    setInterests((prev) => prev.filter((_, idx) => idx !== i));
  }

  function handleSave() {
    save({
      ...content,
      research: { about, interests, studyTitle, studyDescription, formUrl },
    });
  }

  return (
    <>
      <section className="bg-surface rounded-2xl border border-outline-variant overflow-hidden">
        <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-lowest">
          <h2 className="font-headline-md text-[24px] text-on-background">Research Overview</h2>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <label className="block font-label-sm text-label-sm text-on-background mb-1">About the Research</label>
            <textarea
              rows={5}
              className={`${inputClass} resize-y`}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-label-sm text-label-sm text-on-background">Research Interests</label>
              <button
                onClick={addInterest}
                className="flex items-center gap-1 text-primary font-label-sm text-xs hover:opacity-70 transition-opacity"
              >
                <span className="material-symbols-outlined text-sm">add</span> Add
              </button>
            </div>
            <div className="space-y-2">
              {interests.map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <input
                    type="text"
                    className={inputClass}
                    value={item}
                    onChange={(e) => updateInterest(i, e.target.value)}
                  />
                  <button
                    onClick={() => removeInterest(i)}
                    className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container rounded-full transition-colors shrink-0"
                  >
                    <span className="material-symbols-outlined text-base">delete</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface rounded-2xl border border-outline-variant overflow-hidden">
        <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-lowest">
          <h2 className="font-headline-md text-[24px] text-on-background">Current Study</h2>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <label className="block font-label-sm text-label-sm text-on-background mb-1">Study Title</label>
            <input
              type="text"
              className={inputClass}
              value={studyTitle}
              onChange={(e) => setStudyTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-background mb-1">Study Description</label>
            <textarea
              rows={4}
              className={`${inputClass} resize-y`}
              value={studyDescription}
              onChange={(e) => setStudyDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-background mb-1">Google Form URL</label>
            <input
              type="url"
              className={inputClass}
              value={formUrl}
              onChange={(e) => setFormUrl(e.target.value)}
              placeholder="https://docs.google.com/forms/d/e/…/viewform"
            />
            <p className="mt-1 font-body-md text-xs text-on-surface-variant">
              Paste the full Google Form URL. The site will embed it automatically.
            </p>
          </div>
        </div>
      </section>

      <SaveBar status={status} errorMsg={errorMsg} onSave={handleSave} />
    </>
  );
}
