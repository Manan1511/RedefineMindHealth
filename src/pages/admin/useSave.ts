import { useState } from "react";
import type { SiteContent } from "../../content/types";
import { supabase } from "../../lib/supabase";
import { useSiteContent } from "../../content/SiteContentProvider";

export type SaveStatus = "idle" | "saving" | "saved" | "error";

export function useSave() {
  const [status, setStatus] = useState<SaveStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const { setContent } = useSiteContent();

  async function save(content: SiteContent) {
    setStatus("saving");
    setErrorMsg("");
    try {
      const { error } = await supabase
        .from("site_content")
        .update({ content })
        .eq("id", 1);

      if (error) throw error;

      setContent(content);
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Save failed.");
      setStatus("error");
    }
  }

  return { save, status, errorMsg };
}
