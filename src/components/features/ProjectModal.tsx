import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Film, Globe } from "lucide-react";
import type { Movie } from "@/types";

interface ProjectModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export default function ProjectModal({ movie, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (movie) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [movie]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {movie && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-cinema-dark border border-gold-500/20 shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center border border-white/20 hover:border-gold-500 hover:text-gold-500 text-white transition-all duration-300"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-5 gap-0">
              {/* Poster */}
              <div className="md:col-span-2 relative overflow-hidden min-h-[280px]">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cinema-dark/60 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden" />
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-8 flex flex-col gap-5">
                {/* Badge */}
                <div className="inline-flex">
                  <span className="bg-crimson-600/20 border border-crimson-600/40 text-crimson-400 text-[10px] font-inter tracking-widest uppercase px-3 py-1">
                    {movie.genre}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-cinzel text-3xl font-bold text-white mb-1">{movie.title}</h3>
                  <div className="h-px w-16 bg-gold-500 mt-3" />
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Calendar, label: "Year", value: movie.year },
                    { icon: Globe, label: "Language", value: movie.language },
                    { icon: User, label: "Director", value: movie.director },
                    { icon: Film, label: "Cast", value: movie.cast },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-2.5">
                      <Icon size={14} className="text-gold-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-inter text-[10px] text-cinema-text-muted tracking-widest uppercase">
                          {label}
                        </p>
                        <p className="font-inter text-white text-sm">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="font-inter text-cinema-text-muted text-sm leading-relaxed border-t border-white/10 pt-5">
                  {movie.description}
                </p>

                {/* YouTube Trailer */}
                {movie.youtubeId && (
                  <div className="relative w-full pt-[56.25%] bg-black border border-gold-500/10">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${movie.youtubeId}?rel=0&modestbranding=1`}
                      title={`${movie.title} Trailer`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
