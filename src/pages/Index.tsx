import { Heart, Volume2, VolumeX } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineButton from "@/components/ValentineButton";
import RunawayButton from "@/components/RunawayButton";
import proposalCat from "@/assets/proposal-cat.jpg";

const Index = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Auto-play background music at low volume
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
      audioRef.current.play().catch(() => {
        // Autoplay may be blocked by browser
      });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen valentine-gradient flower-pattern relative overflow-hidden">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="fixed top-4 right-4 z-50 bg-card/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-valentine-deep" />
        ) : (
          <Volume2 className="w-5 h-5 text-valentine-deep" />
        )}
      </button>

      <FloatingHearts />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Main question card */}
        <div className="text-center animate-fade-in-up">
          {/* Decorative hearts */}
          <div className="flex justify-center gap-4 mb-8">
            <Heart className="w-10 h-10 text-heart-red fill-heart-red animate-pulse-heart" />
            <Heart
              className="w-8 h-8 text-valentine-pink fill-valentine-pink animate-pulse-heart"
              style={{ animationDelay: "0.3s" }}
            />
            <Heart
              className="w-10 h-10 text-heart-red fill-heart-red animate-pulse-heart"
              style={{ animationDelay: "0.6s" }}
            />
          </div>

          {/* Main question */}
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 animate-bounce-soft">
            Vibha
          </h1>
          <p className="font-script text-4xl md:text-5xl lg:text-6xl text-valentine-deep mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            Will you be my Valentine?
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up" style={{ animationDelay: "1s" }}>
            <ValentineButton
              variant="primary"
              onClick={() => navigate("/celebration")}
            >
              <Heart className="w-5 h-5 fill-current" />
              Yes
              <Heart className="w-5 h-5 fill-current" />
            </ValentineButton>

            <RunawayButton
              onClick={() => navigate("/why")}
              maxEscapes={5}
            >
              Why?
            </RunawayButton>
          </div>
          {/* Proposal Cat Image */}
          <div className="mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
            <div className="relative w-64 h-48 md:w-80 md:h-60 mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-valentine-pink/30">
              <img 
                src={proposalCat} 
                alt="Adorable cat with ring" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-valentine-pink/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-8 flex gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.5s" }}>
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="w-6 h-6 text-valentine-pink fill-valentine-pink animate-wiggle"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
