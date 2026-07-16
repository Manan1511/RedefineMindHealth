import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSiteContent } from "../content/SiteContentProvider";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/research", label: "Research" },
  { to: "/forms", label: "Forms" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

function BookButton({ url, className = "" }: { url: string; className?: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-container text-on-surface font-label-sm text-label-sm hover:scale-95 transition-transform ${className}`}
    >
      Book a Session
    </a>
  );
}

export default function Layout() {
  const { content } = useSiteContent();
  const [open, setOpen] = useState(false);

  const linkBase =
    "font-body-md font-semibold transition-colors duration-300 hover:text-primary";

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 max-w-container-max">
        <div className="flex justify-between items-center px-gutter py-4 bg-background/80 backdrop-blur-md rounded-2xl mx-4 mt-3 shadow-sm border border-outline-variant/40">
          <Link
            to="/"
            className="font-headline-md text-base md:text-lg lg:text-2xl text-on-background tracking-tight shrink-0"
          >
            RedefineMindHealth
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary pb-1"
                    : `${linkBase} text-on-surface-variant`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <BookButton url={content.contact.bookingUrl} />
          </div>

          <button
            className="md:hidden text-on-background p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mx-gutter rounded-2xl bg-surface-container-low shadow-lg border border-outline-variant p-6 flex flex-col gap-4"
            >
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? "text-primary" : "text-on-surface-variant"}`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <BookButton url={content.contact.bookingUrl} className="mt-2" />
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto bg-surface-container border-t border-outline-variant rounded-t-3xl">
        {/* Emergency notice */}
        <div className="border-b border-outline-variant px-gutter py-8">
          <div className="max-w-container-max mx-auto">
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-3">
              A Note on Emergencies
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 max-w-3xl">
              This space is here to support your ongoing wellbeing, but it is not equipped for crisis or emergency situations. If you or someone you know is in immediate distress, please reach out to one of the helplines below or contact your local emergency services.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {[
                { name: "KIRAN", value: "1800-599-0019" },
                { name: "iCall", value: "+91 91529 87821" },
                { name: "Vandrevala Foundation", value: "1860-2662-345" },
                { name: "AASRA", value: "+91 98204 66726" },
              ].map((h) => (
                <span key={h.name} className="font-body-md text-body-md text-on-surface">
                  <span className="text-on-surface-variant">{h.name}:</span>{" "}
                  <a href={`tel:${h.value.replace(/\s|-/g, "")}`} className="hover:text-primary transition-colors">
                    {h.value}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="px-gutter py-section-padding-sm">
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="space-y-2">
              <div className="font-headline-md text-headline-md text-on-surface">
                RedefineMindHealth
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.contact.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {content.contact.address}
              </a>
              <a
                href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
                className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {content.contact.phone}
              </a>
              <div className="font-body-md text-body-md text-secondary pt-2">
                © {new Date().getFullYear()} {content.profile.displayName}. All rights reserved.
              </div>
              <a
                href="https://www.instagram.com/tessellatestudios__/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-3 py-1 rounded-full bg-surface-container-high font-body-md text-xs text-on-surface-variant/70 hover:text-primary hover:bg-surface-container-highest transition-colors"
              >
                Developed by Tessellate Studios
              </a>
            </div>
            <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link className="text-on-surface-variant font-body-md font-semibold hover:text-primary transition-colors" to="/contact">
                Contact
              </Link>
              <Link className="text-on-surface-variant font-body-md font-semibold hover:text-primary transition-colors" to="/research">
                Research
              </Link>
              <Link className="text-on-surface-variant font-body-md font-semibold hover:text-primary transition-colors" to="/forms">
                Forms
              </Link>
              <a className="text-on-surface-variant font-body-md font-semibold hover:text-primary transition-colors" href={content.contact.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a className="text-on-surface-variant font-body-md font-semibold hover:text-primary transition-colors" href={content.contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
