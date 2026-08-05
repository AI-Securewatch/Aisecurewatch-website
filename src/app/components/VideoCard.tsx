import { useState } from "react";
import { Play } from "lucide-react";
import { track } from "../services/analytics";

interface VideoCardProps {
  videoId: string;
  title: string;
  durationLabel?: string;
  className?: string;
}

// Thumbnail + play button + duration badge, matching the site's glass-card
// media-box convention (see the architecture diagram box on Home.tsx and
// the flow box on PolicyEngine.tsx). The YouTube iframe itself is never
// mounted until a visitor clicks play, so no YouTube JS or network request
// happens on page load. The "lazy-load the embed" requirement is met
// structurally, not via a loading="lazy" attribute on an iframe that would
// still fetch YouTube's player framework immediately.
export default function VideoCard({ videoId, title, durationLabel, className = "" }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const [thumbnailSrc, setThumbnailSrc] = useState(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);

  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden relative ${className}`}
      style={{ border: "1px solid rgba(124,111,255,0.2)", boxShadow: "0 0 32px rgba(124,111,255,0.08)" }}
    >
      <div className="relative aspect-video w-full">
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              setPlaying(true);
              // Both fire at the click moment: YouTube's embedded iframe is
              // cross-origin, so this app has no way to observe the actual
              // player's play/pause state without integrating the YouTube
              // IFrame API: "clicked play" is the best available proxy for
              // "played" without that added complexity.
              track("YouTube Clicked", { video_id: videoId, page: window.location.pathname });
              track("Demo Video Played", { video_id: videoId, page: window.location.pathname });
            }}
            aria-label={`Play video: ${title}`}
            className="absolute inset-0 w-full h-full group cursor-pointer"
            style={{ background: "#0d1020" }}
          >
            <img
              src={thumbnailSrc}
              alt={title}
              loading="lazy"
              onError={() => setThumbnailSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)}
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(7,8,15,0.15) 0%, rgba(7,8,15,0.55) 100%)" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #7c6fff, #3b8cf8)", boxShadow: "0 0 40px rgba(124,111,255,0.5)" }}
              >
                <Play size={28} fill="#fff" style={{ color: "#fff", marginLeft: 2 }} />
              </div>
            </div>
            {durationLabel && (
              <span
                className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md mono text-xs"
                style={{
                  background: "rgba(7,8,15,0.75)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#e8ecf4",
                  letterSpacing: "0.04em",
                }}
              >
                {durationLabel}
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
