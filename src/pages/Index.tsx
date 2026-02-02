import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineButton from "@/components/ValentineButton";
import RunawayButton from "@/components/RunawayButton";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen valentine-gradient flower-pattern relative overflow-hidden">
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
