import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { MapPin, Calendar, Star } from 'lucide-react';

interface SiteCardProps {
  title: string;
  location: string;
  year: string;
  image: string;
  description: string;
  category: string;
  isUNESCO?: boolean;
}

export function SiteCard({ 
  title, 
  location, 
  year, 
  image, 
  description, 
  category,
  isUNESCO = false 
}: SiteCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
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
                UNESCO
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
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
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}