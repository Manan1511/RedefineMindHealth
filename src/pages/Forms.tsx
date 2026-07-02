import Reveal from "../components/Reveal";

const FORMS = [
  {
    id: "consent",
    icon: "assignment",
    title: "Consent Form",
    description:
      "Review and complete the general consent form before beginning counselling. This outlines the nature of the therapeutic relationship, confidentiality, and your rights as a client.",
    label: "Complete Consent Form",
    url: "https://forms.gle/2CncioGShNr96s7q7",
  },
  {
    id: "parental-consent",
    icon: "family_restroom",
    title: "Parental Consent Form",
    description:
      "Required for child artist mental fitness assessments and any sessions involving a minor. Completed by a parent or legal guardian prior to the assessment.",
    label: "Complete Parental Consent",
    url: "https://forms.gle/bS72ZS6kfPj2AiPr5",
  },
  {
    id: "intake",
    icon: "edit_note",
    title: "Client Intake Form",
    description:
      "A brief intake form to help understand your background and what brings you in. Completing this before your first session allows us to make the best use of our time together.",
    label: "Complete Intake Form",
    url: "https://forms.gle/XdHmdHVU9Tdrq9us6",
  },
];

export default function Forms() {
  return (
    <div className="max-w-container-max mx-auto px-gutter md:px-section-padding-sm pt-32 pb-section-padding-lg overflow-hidden">
      <Reveal className="text-center max-w-2xl mx-auto mb-section-padding-sm">
        <h1 className="font-display-xl-mobile text-display-xl-mobile md:font-headline-lg md:text-headline-lg mb-6">
          Forms
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Complete the relevant forms before your first session to help us get started smoothly.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FORMS.map((f, i) => (
          <Reveal key={f.id} delay={i * 0.06}>
            <div className="h-full bg-surface rounded-[24px] border border-surface-variant shadow-[0_4px_24px_rgba(49,48,44,0.05)] p-8 flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-secondary-container text-xl">
                  {f.icon}
                </span>
              </div>
              <div className="flex-1">
                <h2 className="font-headline-md text-headline-md text-[20px] mb-3">{f.title}</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {f.description}
                </p>
              </div>
              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary hover:gap-3 transition-all self-start"
              >
                {f.label}
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
