import { Heart } from "lucide-react";
import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 20 + 12,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 3}s`,
      opacity: Math.random() * 0.4 + 0.2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-valentine-pink fill-valentine-pink"
          style={{
            left: heart.left,
            top: heart.top,
            width: heart.size,
            height: heart.size,
            opacity: heart.opacity,
            animation: `float-heart ${heart.duration} ease-in-out infinite`,
            animationDelay: heart.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
