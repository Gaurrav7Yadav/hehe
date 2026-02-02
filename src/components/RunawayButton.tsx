import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface RunawayButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  maxEscapes?: number;
}

const RunawayButton = ({
  children,
  onClick,
  className,
  maxEscapes = 5,
}: RunawayButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const runAway = useCallback(() => {
    if (escapeCount >= maxEscapes) {
      // After max escapes, let them click it
      return;
    }

    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const parentRect = button.parentElement?.getBoundingClientRect();
    
    if (!parentRect) return;

    // Calculate available space
    const maxX = window.innerWidth - rect.width - 40;
    const maxY = window.innerHeight - rect.height - 40;

    // Generate random new position
    let newX = Math.random() * maxX - maxX / 2;
    let newY = Math.random() * maxY - maxY / 2;

    // Make sure it moves significantly
    const minMove = 100;
    if (Math.abs(newX - position.x) < minMove) {
      newX = position.x + (Math.random() > 0.5 ? minMove : -minMove);
    }
    if (Math.abs(newY - position.y) < minMove) {
      newY = position.y + (Math.random() > 0.5 ? minMove : -minMove);
    }

    // Clamp to screen bounds
    newX = Math.max(-200, Math.min(200, newX));
    newY = Math.max(-150, Math.min(150, newY));

    setPosition({ x: newX, y: newY });
    setEscapeCount((prev) => prev + 1);
  }, [escapeCount, maxEscapes, position]);

  const handleClick = () => {
    if (escapeCount >= maxEscapes && onClick) {
      onClick();
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={runAway}
      onTouchStart={runAway}
      className={cn(
        "relative font-poppins font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg",
        "bg-secondary text-secondary-foreground px-8 py-4 text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground",
        className
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {children}
      {escapeCount > 0 && escapeCount < maxEscapes && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-valentine-deep font-script whitespace-nowrap animate-fade-in-up">
          {escapeCount === 1 && "Nope! 😜"}
          {escapeCount === 2 && "Not that easy! 💕"}
          {escapeCount === 3 && "Try again! 😊"}
          {escapeCount === 4 && "Almost... 🥺"}
        </span>
      )}
      {escapeCount >= maxEscapes && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-valentine-deep font-script whitespace-nowrap animate-fade-in-up">
          Fine, you can click now! 😄
        </span>
      )}
    </button>
  );
};

export default RunawayButton;
