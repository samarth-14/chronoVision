import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Calendar, Star } from 'lucide-react';

interface SiteCardProps {
  title: string;
  location: string;
  year: string;
  image: string;
  description: string;
  category: string;
  isUNESCO?: boolean;
  onClick?: () => void;
}

export function SiteCard({ 
  title, 
  location, 
  year, 
  image, 
  description, 
  category,
  isUNESCO = false,
  onClick 
}: SiteCardProps) {
  return (
    <Card 
      className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 hover:border-primary/50 relative equal-height-card"
      onClick={onClick}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant="secondary" className="bg-black/70 text-white">
              {category}
            </Badge>
            {isUNESCO && (
              <Badge className="bg-blue-600 text-white">
                <Star className="h-3 w-3 mr-1" />
                UNESCO
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 card-content">
        <h3 className="mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center text-muted-foreground mb-2 space-x-4">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{year}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-3 card-description">
          {description}
        </p>
        
        <div className="text-xs text-primary/70 group-hover:text-primary transition-colors italic mt-auto">
          Click to explore options →
        </div>
      </CardContent>
    </Card>
  );
}