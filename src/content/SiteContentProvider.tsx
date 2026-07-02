import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { SiteContent } from "./types";
import { defaultContent } from "./defaultContent";
import { supabase } from "../lib/supabase";

interface ContentState {
  content: SiteContent;
  loading: boolean;
}

const SiteContentContext = createContext<ContentState>({
  content: defaultContent,
  loading: true,
});

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    supabase
      .from("site_content")
      .select("content")
      .eq("id", 1)
      .single()
      .then(({ data, error }) => {
        if (!cancelled) {
          if (!error && data?.content && (data.content as SiteContent).profile) {
            setContent(data.content as SiteContent);
          }
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <SiteContentContext.Provider value={{ content, loading }}>
      {children}
    </SiteContentContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSiteContent() {
  return useContext(SiteContentContext);
}
