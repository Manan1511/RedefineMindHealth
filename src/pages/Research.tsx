import Reveal from "../components/Reveal";
import { useSiteContent } from "../content/SiteContentProvider";
import { defaultContent } from "../content/defaultContent";

export default function Research() {
  const { content } = useSiteContent();
  const research = content.research ?? defaultContent.research;

  const embedUrl = research.formUrl.includes("?embedded=true")
    ? research.formUrl
    : research.formUrl.replace(/\?.*$/, "") + "?embedded=true";

  return (
    <div className="max-w-container-max mx-auto px-gutter md:px-section-padding-sm pt-32 pb-section-padding-lg overflow-hidden">
      <Reveal className="text-center max-w-2xl mx-auto mb-section-padding-sm">
        <h1 className="font-display-xl-mobile text-display-xl-mobile md:font-headline-lg md:text-headline-lg mb-6">
          Research
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Doctoral research on relationships, emotional experiences, and digital well-being.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-start">
        {/* About */}
        <Reveal>
          <div className="bg-surface rounded-[24px] border border-surface-variant p-8 shadow-[0_4px_24px_rgba(49,48,44,0.05)]">
            <h2 className="font-headline-md text-headline-md text-[20px] mb-4">About the Research</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {research.about}
            </p>
          </div>
        </Reveal>

        {/* Interests */}
        <Reveal delay={0.06}>
          <div className="bg-surface rounded-[24px] border border-surface-variant p-8 shadow-[0_4px_24px_rgba(49,48,44,0.05)]">
            <h2 className="font-headline-md text-headline-md text-[20px] mb-4">Research Interests</h2>
            <ul className="space-y-3">
              {research.interests.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                    chevron_right
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Current study + embedded form */}
      <Reveal>
        <div className="bg-surface rounded-[32px] border border-surface-variant shadow-[0_4px_24px_rgba(49,48,44,0.05)] overflow-hidden">
          <div className="p-8 md:p-12 border-b border-outline-variant">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-5">
              <span className="material-symbols-outlined text-on-secondary-container text-xl">science</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-[22px] mb-3">
              {research.studyTitle}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              {research.studyDescription}
            </p>
          </div>

          {/* Embedded Google Form */}
          <div className="w-full bg-surface-container-low">
            <iframe
              src={embedUrl}
              className="w-full"
              style={{ minHeight: "720px", border: "none" }}
              title={research.studyTitle}
            >
              Loading form…
            </iframe>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
