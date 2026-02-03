import { useEffect, useRef } from "react";
import { Heart, Calendar } from "lucide-react";
import confetti from "canvas-confetti";
import FloatingHearts from "@/components/FloatingHearts";
import coupleSelfie from "@/assets/couple-selfie.jpeg";

const CelebrationPage = () => {
  const hasConfettiFired = useRef(false);

  useEffect(() => {
    if (hasConfettiFired.current) return;
    hasConfettiFired.current = true;

    // Fire confetti celebration
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;

    const colors = ["#ff69b4", "#ff1493", "#ffb6c1", "#ff85a2", "#ffc0cb", "#e75480"];

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      // Left side confetti
      confetti({
        particleCount: Math.floor(particleCount),
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2,
        },
        colors: colors,
        shapes: ["circle"],
        gravity: 0.8,
        scalar: 1.2,
      });

      // Right side confetti
      confetti({
        particleCount: Math.floor(particleCount),
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2,
        },
        colors: colors,
        shapes: ["circle"],
        gravity: 0.8,
        scalar: 1.2,
      });

      // Heart shaped confetti from center
      confetti({
        particleCount: 10,
        startVelocity: 45,
        spread: 100,
        origin: { x: 0.5, y: 0.5 },
        colors: ["#ff1493", "#ff69b4"],
        shapes: ["circle"],
        gravity: 0.6,
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen celebration-gradient flower-pattern relative overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Celebration header */}
        <div className="text-center mb-8 opacity-0 animate-fade-in-up">
          <div className="flex justify-center gap-4 mb-4">
            <Heart className="w-12 h-12 text-heart-red fill-heart-red animate-pulse-heart" />
            <Heart
              className="w-10 h-10 text-valentine-pink fill-valentine-pink animate-pulse-heart"
              style={{ animationDelay: "0.2s" }}
            />
            <Heart
              className="w-12 h-12 text-heart-red fill-heart-red animate-pulse-heart"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
          <h1 className="font-script text-5xl md:text-7xl text-foreground mb-2">
            Yay! 🎉
          </h1>
          <p className="font-script text-3xl md:text-4xl text-valentine-deep">
            You said Yes!
          </p>
        </div>

        {/* Couple photo */}
        <div
          className="relative mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-valentine-pink via-valentine-rose to-valentine-pink rounded-3xl blur-lg opacity-50 animate-pulse-heart" />
          <div className="relative rounded-2xl overflow-hidden border-4 border-primary shadow-2xl shadow-valentine-pink/30">
            <img
              src={coupleSelfie}
              alt="Our special moment"
              className="w-72 h-72 md:w-96 md:h-96 object-cover"
            />
          </div>

          {/* Decorative hearts around the photo */}
          <Heart className="absolute -top-4 -left-4 w-8 h-8 text-heart-red fill-heart-red animate-bounce-soft" />
          <Heart
            className="absolute -top-4 -right-4 w-8 h-8 text-valentine-pink fill-valentine-pink animate-bounce-soft"
            style={{ animationDelay: "0.3s" }}
          />
          <Heart
            className="absolute -bottom-4 -left-4 w-8 h-8 text-valentine-pink fill-valentine-pink animate-bounce-soft"
            style={{ animationDelay: "0.6s" }}
          />
          <Heart
            className="absolute -bottom-4 -right-4 w-8 h-8 text-heart-red fill-heart-red animate-bounce-soft"
            style={{ animationDelay: "0.9s" }}
          />
        </div>

        {/* Calendar booking card */}
        <div
          className="relative opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border-2 border-primary max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-valentine-deep" />
              <h2 className="font-poppins font-bold text-xl md:text-2xl text-foreground">
                Calendar Booked!
              </h2>
            </div>

            <div className="text-center space-y-2">
              <p className="font-poppins text-lg md:text-xl text-valentine-deep font-semibold">
                📅 Your calendar is blocked
              </p>
              <div className="bg-secondary/50 rounded-xl p-4 mt-4">
                <p className="font-poppins font-bold text-lg md:text-xl text-foreground">
                  From: <span className="text-valentine-rose">14th Feb, 11:00 AM</span>
                </p>
                <p className="font-poppins font-bold text-lg md:text-xl text-foreground mt-2">
                  To: <span className="text-valentine-rose">15th Feb, 5:00 PM</span>
                </p>
              </div>
              <p className="font-script text-2xl text-valentine-deep mt-4">
                💕 No cancellations allowed! 💕
              </p>
            </div>
          </div>

          {/* Sparkle decorations */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-valentine-pink rounded-full animate-sparkle" />
          <div
            className="absolute -bottom-2 -left-2 w-3 h-3 bg-heart-red rounded-full animate-sparkle"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-1/2 -left-3 w-2 h-2 bg-valentine-rose rounded-full animate-sparkle"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CelebrationPage;
