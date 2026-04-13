import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { COMPANY_INFO } from "@/constants/data";

export default function MapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-cinema-darker py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6"
        >
          <div>
            <span className="font-inter text-gold-500 text-xs tracking-[0.4em] uppercase mb-3 block">
              Find Us
            </span>
            <h2 className="section-heading font-cinzel text-3xl md:text-4xl text-white">
              Our <span className="gold-text">Location</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
              <MapPin size={18} className="text-gold-500" />
            </div>
            <div>
              <p className="font-inter text-white text-sm font-medium">Rudhra Creations</p>
              <p className="font-inter text-cinema-text-muted text-xs">{COMPANY_INFO.location}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative"
        >
          {/* Map Frame */}
          <div className="relative border border-gold-500/20 overflow-hidden">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-500 z-10" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold-500 z-10" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold-500 z-10" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-500 z-10" />

            <iframe
              src={COMPANY_INFO.mapEmbedUrl}
              title="Rudhra Creations Location — Nanakramguda, Hyderabad"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>

          {/* Get Directions */}
          <div className="flex justify-end mt-4">
            <a
              href="https://maps.google.com/?q=Nanakramguda,Hyderabad,Telangana,India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-inter text-sm text-gold-500 hover:text-gold-400 transition-colors border border-gold-500/30 hover:border-gold-500 px-5 py-2.5 group"
            >
              <Navigation size={14} className="group-hover:translate-x-0.5 transition-transform" />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
