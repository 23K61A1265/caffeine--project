import { Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoffeeSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const CoffeeSpinner = ({ className, size = "md" }: CoffeeSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        <Coffee 
          className={cn(
            sizeClasses[size],
            "text-coffee-primary animate-spin"
          )} 
        />
        <div className={cn(
          "absolute inset-0 rounded-full border-2 border-coffee-light border-t-coffee-accent animate-spin",
          sizeClasses[size]
        )} />
      </div>
    </div>
  );
};

export const CoffeePageLoader = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center space-y-4">
        <CoffeeSpinner size="lg" />
        <p className="text-muted-foreground text-sm">Brewing your experience...</p>
      </div>
    </div>
  );
};
