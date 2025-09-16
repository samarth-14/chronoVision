import React from 'react';
import { BaseModal } from './ui/base-modal';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Calendar, Crown, Clock, Users, BookOpen, Sparkles } from 'lucide-react';

import { type HeritageSite } from '../data/heritage-sites';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  site: HeritageSite | null;
}

/**
 * History Modal - detailed historical information about heritage sites
 * Features: historical periods, architectural significance, and cultural impact
 */
export function HistoryModal({ isOpen, onClose, site }: HistoryModalProps) {
  if (!site) return null;

  // Template data - this would be filled from a CMS or database in a real application
  const historicalContent = {
    overview: site.history?.ancient || "This heritage site holds immense historical significance and represents centuries of architectural mastery, cultural evolution, and spiritual devotion. Built during an era of great artistic achievement, it stands as a testament to the skill and vision of ancient craftsmen.",
    
    periods: [
      {
        era: "Ancient Period",
        timeframe: `${site.year || "8th Century"} - 12th Century`,
        description: site.history?.construction || "The foundation period marked by initial construction and establishment of the site's primary architectural elements."
      },
      {
        era: "Medieval Period", 
        timeframe: "12th Century - 16th Century",
        description: site.history?.significance || "Expansion and renovation phases that added significant architectural elements and enhanced the site's cultural importance."
      },
      {
        era: "Modern Era",
        timeframe: "16th Century - Present",
        description: site.history?.modernHistory || "Conservation efforts, archaeological discoveries, and recognition as a protected heritage site."
      }
    ],

    architecture: {
      style: "Traditional Indian Architecture",
      materials: ["Local stone", "Carved granite", "Traditional mortar", "Sacred metals"],
      features: [
        "Intricate stone carvings and sculptures",
        "Geometric patterns and symbolic motifs", 
        "Traditional construction techniques",
        "Harmonious integration with natural landscape"
      ]
    },

    culturalImpact: [
      "Center of spiritual and cultural activities for centuries",
      "Influenced regional architectural development",
      "Preserved traditional craftsmanship techniques",
      "Continues to inspire contemporary design and art"
    ]
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={`History of ${site.title}`}
      description={`Detailed historical information, architectural significance, and cultural impact of ${site.title}`}
      maxWidth="4xl"
      customScrollbar={true}
      className="p-0"
    >
      <div className="flex flex-col h-full">
        {/* Hero Section */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
            <ImageWithFallback
              src={site.image}
              alt={site.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center mb-3">
                <Crown className="h-6 w-6 text-accent mr-3" />
                <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                  History of {site.title}
                </h2>
              </div>
              
              <div className="flex items-center text-white/90 space-x-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span>{site.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>{site.year}</span>
                </div>
                {site.isUNESCO && (
                  <Badge className="bg-blue-500/80 backdrop-blur-sm text-white border border-blue-300/30">
                    <Sparkles className="h-3 w-3 mr-1" />
                    UNESCO Heritage
                  </Badge>
                )}
              </div>
            </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 p-6 space-y-8">
            {/* Overview */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold gradient-text">Historical Overview</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {historicalContent.overview}
              </p>
            </div>

            {/* Historical Periods */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-secondary" />
                <h3 className="text-xl font-semibold gradient-text">Historical Periods</h3>
              </div>
              <div className="grid gap-4">
                {historicalContent.periods.map((period, index) => (
                  <div key={index} className="glass p-4 rounded-lg border-l-4 border-l-primary">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-primary">{period.era}</h4>
                      <Badge variant="outline" className="text-xs">
                        {period.timeframe}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {period.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Crown className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-semibold gradient-text">Architectural Significance</h3>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-secondary">Materials & Construction</h4>
                    <div className="space-y-2">
                      {historicalContent.architecture.materials.map((material, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{material}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-accent">Key Features</h4>
                    <div className="space-y-2">
                      {historicalContent.architecture.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural Impact */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold gradient-text">Cultural Impact</h3>
              </div>
              <div className="grid gap-3">
                {historicalContent.culturalImpact.map((impact, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 glass rounded-lg">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-primary font-semibold text-xs">{index + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground flex-1">{impact}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </BaseModal>
  );
}