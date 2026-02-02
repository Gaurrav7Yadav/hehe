import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

interface ValentineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "big";
  className?: string;
}

const ValentineButton = ({
  children,
  onClick,
  variant = "primary",
  className,
}: ValentineButtonProps) => {
  const baseClasses =
    "relative font-poppins font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg";

  const variants = {
    primary:
      "bg-primary text-primary-foreground px-8 py-4 text-lg hover:shadow-xl hover:shadow-valentine-pink/30",
    secondary:
      "bg-secondary text-secondary-foreground px-8 py-4 text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground",
    big: "bg-primary text-primary-foreground px-12 py-6 text-2xl hover:shadow-2xl hover:shadow-valentine-pink/40 animate-pulse-heart",
  };

  return (
    <button
      onClick={onClick}
      className={cn(baseClasses, variants[variant], className)}
    >
      {variant === "big" && <Heart className="w-6 h-6 fill-current" />}
      {children}
      {variant === "big" && <Heart className="w-6 h-6 fill-current" />}
    </button>
  );
};

export default ValentineButton;
