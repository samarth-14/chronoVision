import { Button } from './button';
import { X } from 'lucide-react';

interface ModalCloseButtonProps {
  onClick: () => void;
  className?: string;
}

/**
 * Standardized close button for all modals
 * Provides consistent styling and behavior across the application
 */
export function ModalCloseButton({ onClick, className = "" }: ModalCloseButtonProps) {
  return (
    <Button 
      onClick={onClick}
      variant="ghost"
      size="icon"
      className={`h-10 w-10 rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all duration-300 ease-in-out ${className}`}
    >
      <X className="h-5 w-5" />
    </Button>
  );
}