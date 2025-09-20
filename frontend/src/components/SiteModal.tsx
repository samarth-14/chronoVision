import { useState } from 'react';
import { BaseModal } from './ui/base-modal';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { HistoryModal } from './HistoryModal';
import { ImageGalleryModal } from './ImageGalleryModal';
import { HeritageQuizModal } from './HeritageQuizModal';
import { MapPin, Calendar, History, Camera, Eye, Brain, Sparkles, Star } from 'lucide-react';

import { type HeritageSite } from '../data/heritage-sites';

interface SiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  site: HeritageSite | null;
  onARViewClick: (siteId?: string) => void;
}

/**
 * Site Modal - main modal displaying heritage site options
 * Features: AR experience, image gallery, history, and quiz options
 */
export function SiteModal({ 
  isOpen, 
  onClose, 
  site, 
  onARViewClick
}: SiteModalProps) {
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [quizModalOpen, setQuizModalOpen] = useState(false);

  if (!site) return null;

  const options = [
    {
      id: 'history',
      title: 'View History',
      description: 'Uncover the rich stories and timelines.',
      icon: History,
      onClick: () => {
        setHistoryModalOpen(true);
        onClose();
      },
      accentColor: 'primary',
      className: 'lg:col-span-1' // Takes 1 column space
    },
    {
      id: 'images',
      title: 'Image Gallery',
      description: 'Browse stunning, high-resolution photos.',
      icon: Camera,
      onClick: () => {
        setGalleryModalOpen(true);
        onClose();
      },
      accentColor: 'secondary',
      className: 'lg:col-span-1' // Takes 1 column space
    },
    {
      id: 'ar',
      title: 'AR Experience',
      description: 'Bring this site to life in your own space.',
      icon: Eye,
      onClick: () => onARViewClick(String(site.id)),
      accentColor: 'accent',
      className: 'lg:col-span-2' // This makes it take up 2 column spaces
    },
    {
      id: 'quiz',
      title: 'Heritage Quiz',
      description: 'Test your knowledge and learn facts.',
      icon: Brain,
      onClick: () => {
        setQuizModalOpen(true);
        onClose();
      },
      accentColor: 'primary',
      className: 'lg:col-span-2' // This also takes up 2 column spaces
    }
  ];

  function getAccentStyles(accentColor: string) {
    switch (accentColor) {
      case 'primary':
        return {
          iconBg: 'bg-primary/20',
          iconColor: 'text-primary',
          hoverBorder: 'border-primary'
        };
      case 'secondary':
        return {
          iconBg: 'bg-secondary/20',
          iconColor: 'text-secondary',
          hoverBorder: 'border-secondary'
        };
      case 'accent':
        return {
          iconBg: 'bg-accent/20',
          iconColor: 'text-accent',
          hoverBorder: 'border-accent'
        };
      default:
        return {
          iconBg: 'bg-muted/20',
          iconColor: 'text-muted-foreground',
          hoverBorder: 'border-muted'
        };
    }
  }

  return (
    <>
      <BaseModal
        isOpen={isOpen}
        onClose={onClose}
        title={site.title}
        description={`${site.description} Choose from different ways to explore this heritage site.`}
        maxWidth="6xl"
        customScrollbar={true}
        className="p-0"
      >
        <div className="flex flex-col h-full">
          {/* Hero Section with Image */}
          <div className="relative h-64 md:h-80 overflow-hidden flex-shrink-0">
            <ImageWithFallback
              src={site.image}
              alt={site.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Floating Elements */}
            <div className="absolute top-6 left-6 flex gap-3">
              <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white border border-white/20">
                {site.category}
              </Badge>
              {site.isUNESCO && (
                <Badge className="bg-blue-500/80 backdrop-blur-sm text-white border border-blue-300/30">
                  <Star className="h-3 w-3 mr-1" />
                  UNESCO Heritage
                </Badge>
              )}
            </div>

            {/* Title and Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center mb-3">
                <Sparkles className="h-6 w-6 text-accent mr-3 animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  {site.title}
                </h2>
              </div>
              
              <div className="flex items-center text-white/90 mb-4 space-x-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="text-lg">{site.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="text-lg">{site.year}</span>
                </div>
              </div>
              
              <p className="text-white/90 text-lg leading-relaxed max-w-4xl">
                {site.description}
              </p>
            </div>
          </div>

          {/* Options Section */}
          <div className="p-6 md:p-8 modal-content-background flex-1">
            <div className="text-center mb-8">
              <h3 className="text-2xl mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-bold">
                Choose Your Experience
              </h3>
              <p className="text-muted-foreground text-lg">
                Explore this sacred heritage site through different perspectives
              </p>
            </div>
            
            {/* --- BENTO GRID CONTAINER --- */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
  {options.map((option) => {
    const IconComponent = option.icon;
    const styles = getAccentStyles(option.accentColor);
    
    return (
      // We use a div instead of a button for more layout flexibility
      <div
        key={option.id}
        onClick={() => {
          option.onClick();
          if (option.id === 'ar') {
            onClose();
          }
        }}
        // The new className from our options array is used here
        className={`group relative overflow-hidden p-6 border border-border hover:border-white/40 transition-all duration-300 rounded-xl bg-card hover:bg-white/20 backdrop-blur-xl hover:scale-105 hover:shadow-xl text-foreground hover:text-white cursor-pointer flex flex-col justify-between ${option.className}`}
      >
        <div className="relative z-10">
          <div className={`mb-4 w-12 h-12 rounded-full ${styles.iconBg} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className={`h-6 w-6 ${styles.iconColor}`} />
          </div>
          <h4 className="font-bold text-lg mb-1">{option.title}</h4>
          {/* We add the new description here */}
          <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
            {option.description}
          </p>
        </div>
        
        {/* Hover Effect Overlays (same as your button had) */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className={`absolute inset-0 rounded-xl border-2 ${styles.hoverBorder} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>
    );
  })}
</div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Explore this sacred heritage site through different perspectives
              </p>
            </div>
          </div>
        </div>
      </BaseModal>

      {/* Sub-modals */}
      <HistoryModal 
        isOpen={historyModalOpen} 
        onClose={() => setHistoryModalOpen(false)} 
        site={site} 
      />
      <ImageGalleryModal 
        isOpen={galleryModalOpen} 
        onClose={() => setGalleryModalOpen(false)} 
        site={site} 
      />
      <HeritageQuizModal 
        isOpen={quizModalOpen} 
        onClose={() => setQuizModalOpen(false)} 
        site={site} 
      />
    </>
  );
}