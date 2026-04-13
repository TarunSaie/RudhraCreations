import { motion } from "framer-motion";
import { Instagram, Youtube, Heart, ChevronUp } from "lucide-react";
import { COMPANY_INFO } from "@/constants/data";

const FOOTER_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Filmography", href: "#films" },
  { label: "Upcoming", href: "#upcoming" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const navTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-cinema-darker border-t border-gold-500/15 overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-4 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full bg-gold-500 blur-[120px]" />
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border-2 border-gold-500 flex items-center justify-center">
                <span className="font-cinzel font-black text-gold-500 text-lg">R</span>
              </div>
              <div>
                <span className="font-cinzel font-bold text-white text-base tracking-widest block">
                  RUDHRA
                </span>
                <span className="font-inter text-gold-500 text-[9px] tracking-[0.35em] uppercase">
                  Creations
                </span>
              </div>
            </div>
            <p className="font-playfair italic text-cinema-text-muted text-base mb-4 leading-relaxed">
              "Crafting Stories that Inspire"
            </p>
            <p className="font-inter text-cinema-text-muted text-xs leading-relaxed">
              A premier Telugu film production house based in Nanakramguda, Hyderabad. Founded by
              Deepak with a vision to elevate Telugu cinema on the world stage.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-cinzel text-white text-xs tracking-[0.3em] uppercase mb-6">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => navTo(link.href)}
                  className="font-inter text-cinema-text-muted text-sm hover:text-gold-500 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-cinzel text-white text-xs tracking-[0.3em] uppercase mb-6">
              Connect With Us
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-cinema-gray-mid hover:border-gold-500 flex items-center justify-center text-cinema-text-muted hover:text-gold-500 transition-all duration-300 hover:bg-gold-500/5"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={COMPANY_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-cinema-gray-mid hover:border-crimson-500 flex items-center justify-center text-cinema-text-muted hover:text-crimson-400 transition-all duration-300 hover:bg-crimson-600/5"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
            <div className="space-y-2">
              <p className="font-inter text-[10px] text-cinema-text-muted tracking-widest uppercase">
                Location
              </p>
              <p className="font-inter text-cinema-text-muted text-sm leading-relaxed">
                {COMPANY_INFO.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-cinema-text-muted text-xs tracking-wide text-center sm:text-left">
            © {new Date().getFullYear()} Rudhra Creations. All Rights Reserved. Founded by{" "}
            <span className="text-gold-500">Deepak</span>.
          </p>

          <div className="flex items-center gap-1 font-inter text-cinema-text-muted text-xs">
            Made with <Heart size={11} className="text-crimson-500 mx-1" fill="currentColor" /> in
            Hyderabad
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="w-10 h-10 border border-gold-500/30 hover:border-gold-500 flex items-center justify-center text-cinema-text-muted hover:text-gold-500 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
