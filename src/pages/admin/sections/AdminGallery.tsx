import { useRef, useState } from "react";
import { useSiteContent } from "../../../content/SiteContentProvider";
import { useSave } from "../useSave";
import SaveBar from "../SaveBar";
import { supabase } from "../../../lib/supabase";
import { transformImage } from "../../../lib/imageTransform";
import type { GalleryEntry } from "../../../content/types";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export default function AdminGallery() {
  const { content, loading } = useSiteContent();
  const { save, status, errorMsg } = useSave();
  const [entries, setEntries] = useState<GalleryEntry[]>(() => content.gallery ?? []);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (loading) return <div className="py-20 text-center font-body-md text-on-surface-variant">Loading…</div>;

  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setUploadError("");

    if (!ALLOWED_TYPES.includes(file.type)) {
      setUploadError("Only JPG, PNG, or WEBP images are allowed.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setUploadError("Image must be under 5MB.");
      return;
    }

    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error: uploadErr } = await supabase.storage.from("gallery").upload(path, file);
    if (uploadErr) {
      setUploadError(uploadErr.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("gallery").getPublicUrl(path);
    setEntries((prev) => [...prev, { id: `gal-${Date.now()}`, url: data.publicUrl, caption: "" }]);
    setUploading(false);
  }

  function updateCaption(id: string, caption: string) {
    setEntries((prev) => prev.map((g) => (g.id === id ? { ...g, caption } : g)));
  }

  async function deleteEntry(id: string) {
    const entry = entries.find((g) => g.id === id);
    setEntries((prev) => prev.filter((g) => g.id !== id));
    if (entry) {
      const path = entry.url.split("/gallery/")[1];
      if (path) await supabase.storage.from("gallery").remove([path]);
    }
  }

  function handleSave() {
    save({ ...content, gallery: entries });
  }

  const inputClass =
    "w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-4 py-2 font-body-md text-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow";

  return (
    <section className="bg-surface rounded-2xl border border-outline-variant overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-lowest flex justify-between items-center">
        <h2 className="font-headline-md text-[24px] text-on-background">Gallery</h2>
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-2 text-primary font-label-sm text-label-sm hover:opacity-70 transition-opacity disabled:opacity-50"
        >
          <span className="material-symbols-outlined">{uploading ? "hourglass_top" : "upload"}</span>
          {uploading ? "Uploading…" : "Upload Photo"}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>

      {uploadError && (
        <div className="px-6 py-3 bg-error-container text-on-error-container font-body-md text-sm">
          {uploadError}
        </div>
      )}

      {entries.length === 0 ? (
        <div className="p-6 text-center font-body-md text-body-md text-on-surface-variant">
          No photos yet. Upload one above.
        </div>
      ) : (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {entries.map((g) => (
            <div key={g.id} className="rounded-2xl border border-outline-variant overflow-hidden">
              <img src={transformImage(g.url, 300)} alt={g.caption || "Gallery photo"} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              <div className="p-3 space-y-2">
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Caption (optional)"
                  value={g.caption}
                  onChange={(e) => updateCaption(g.id, e.target.value)}
                />
                <button
                  onClick={() => deleteEntry(g.id)}
                  className="flex items-center gap-1 text-error font-label-sm text-xs hover:opacity-70 transition-opacity"
                >
                  <span className="material-symbols-outlined text-sm">delete</span> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <SaveBar status={status} errorMsg={errorMsg} onSave={handleSave} label="Save Gallery" />
    </section>
  );
}
