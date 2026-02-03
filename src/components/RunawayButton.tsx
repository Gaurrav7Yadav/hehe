import { useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
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
  const [isEscaping, setIsEscaping] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const originalPosRef = useRef<{ x: number; y: number } | null>(null);

  const runAway = useCallback(() => {
    if (escapeCount >= maxEscapes) {
      return;
    }

    const button = buttonRef.current;
    if (!button) return;

    // Store original position on first escape
    if (!originalPosRef.current) {
      const rect = button.getBoundingClientRect();
      originalPosRef.current = { x: rect.left, y: rect.top };
    }

    setIsEscaping(true);

    // Calculate safe bounds (keeping button visible on screen)
    const buttonWidth = 120;
    const buttonHeight = 60;
    const padding = 20;
    
    const minX = padding;
    const maxX = window.innerWidth - buttonWidth - padding;
    const minY = padding + 60; // Account for header
    const maxY = window.innerHeight - buttonHeight - padding;

    // Generate random position within bounds
    let newX, newY;
    let attempts = 0;
    
    do {
      newX = minX + Math.random() * (maxX - minX);
      newY = minY + Math.random() * (maxY - minY);
      attempts++;
    } while (
      attempts < 10 && 
      Math.abs(newX - position.x) < 80 && 
      Math.abs(newY - position.y) < 80
    );

    setPosition({ x: newX, y: newY });
    setEscapeCount((prev) => prev + 1);
  }, [escapeCount, maxEscapes, position]);

  const handleClick = () => {
    if (escapeCount >= maxEscapes && onClick) {
      onClick();
    }
  };

  const buttonElement = (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={runAway}
      onTouchStart={runAway}
      className={cn(
        "font-poppins font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg",
        "bg-secondary text-secondary-foreground px-8 py-4 text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground",
        isEscaping && "fixed z-[9999]",
        className
      )}
      style={
        isEscaping
          ? {
              left: position.x,
              top: position.y,
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }
          : undefined
      }
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

  // Use portal when escaping to avoid overflow:hidden clipping
  if (isEscaping) {
    return createPortal(buttonElement, document.body);
  }

  return buttonElement;
};

export default RunawayButton;
