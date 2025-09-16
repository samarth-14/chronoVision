import { MapPin } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  showTagline?: boolean;
}

/**
 * Logo Component
 * 
 * Centralized logo component for easy branding updates.
 * 
 * To update the logo:
 * 1. Replace the MapPin icon with your custom logo icon/image
 * 2. Update the text "Itihaas360" with your brand name
 * 3. Modify the tagline "Discover India's Legacy" if needed
 * 4. Adjust CSS variables in globals.css for colors and sizes
 * 
 * The component supports different sizes and customization options.
 */
export function Logo({ 
  size = 'md', 
  className = '', 
  textClassName = '', 
  iconClassName = '', 
  showTagline = true 
}: LogoProps) {
  const sizes = {
    sm: {
      icon: 'h-6 w-6',
      text: 'text-lg',
      tagline: 'text-xs'
    },
    md: {
      icon: 'h-8 w-8',
      text: 'text-xl',
      tagline: 'text-xs'
    },
    lg: {
      icon: 'h-10 w-10',
      text: 'text-2xl',
      tagline: 'text-xs'
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        {/* TODO: Replace MapPin with custom logo when ready */}
        <MapPin className={`${sizes[size].icon} text-primary drop-shadow-lg ${iconClassName}`} />
      </div>
      <div>
        <span className={`${sizes[size].text} font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ${textClassName}`}>
          Itihaas360
        </span>
        {showTagline && (
          <div className={`${sizes[size].tagline} text-muted-foreground`}>
            Discover India's Legacy
          </div>
        )}
      </div>
    </div>
  );
}