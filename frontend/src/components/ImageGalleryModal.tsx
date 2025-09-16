import React, { useState } from 'react';
import { BaseModal } from './ui/base-modal';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, ZoomIn, Download, Share2, ChevronLeft, ChevronRight, Grid3X3 } from 'lucide-react';

import { type HeritageSite } from '../data/heritage-sites';

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  site: HeritageSite | null;
}

/**
 * Image Gallery Modal - displays heritage site photos in grid and single view modes
 * Features: category filtering, thumbnail navigation, and standardized close button
 */
export function ImageGalleryModal({ isOpen, onClose, site }: ImageGalleryModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'single'>('grid');

  if (!site) return null;

  // Template gallery data - this would be populated from a CMS or image management system
  const galleryImages = [
    {
      id: 1,
      url: site.image,
      title: `${site.title} - Main View`,
      description: "The magnificent facade showcasing intricate architectural details",
      category: "Architecture",
      photographer: "Heritage Documentation Team",
      date: "2024"
    },
    {
      id: 2,
      url: site.image,
      title: `${site.title} - Interior`,
      description: "Sacred interior spaces with traditional decorative elements",
      category: "Interior",
      photographer: "Cultural Heritage Society",
      date: "2024"
    },
    {
      id: 3,
      url: site.image,
      title: `${site.title} - Details`,
      description: "Close-up view of intricate stone carvings and sculptural work",
      category: "Details",
      photographer: "Archaeological Survey",
      date: "2024"
    },
    {
      id: 4,
      url: site.image,
      title: `${site.title} - Surroundings`,
      description: "The heritage site in its natural and cultural landscape",
      category: "Landscape",
      photographer: "Tourism Department",
      date: "2024"
    },
    {
      id: 5,
      url: site.image,
      title: `${site.title} - Historical`,
      description: "Rare historical photograph from archives",
      category: "Historical",
      photographer: "National Archives",
      date: "1950s"
    },
    {
      id: 6,
      url: site.image,
      title: `${site.title} - Festival`,
      description: "The site during traditional cultural celebrations",
      category: "Cultural",
      photographer: "Cultural Documentation",
      date: "2023"
    }
  ];

  const categories = [...new Set(galleryImages.map(img => img.category))];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredImages = selectedCategory 
    ? galleryImages.filter(img => img.category === selectedCategory)
    : galleryImages;

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={`Image Gallery - ${site.title}`}
      description={`High-resolution photo collection showcasing different views and aspects of ${site.title}`}
      maxWidth="7xl"
      customScrollbar={true}
      className="p-0"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <Camera className="h-6 w-6 text-primary" />
            <div>
              <h2 className="text-xl font-semibold gradient-text">
                {site.title} Gallery
              </h2>
              <p className="text-sm text-muted-foreground">
                {filteredImages.length} images
              </p>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode(viewMode === 'grid' ? 'single' : 'grid')}
            className="glass"
          >
            {viewMode === 'grid' ? <ZoomIn className="h-4 w-4" /> : <Grid3X3 className="h-4 w-4" />}
            {viewMode === 'grid' ? 'Single View' : 'Grid View'}
          </Button>
        </div>

        {/* Category Filter */}
        <div className="p-4 border-b border-border/50 flex-shrink-0">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className="glass"
              >
                All ({galleryImages.length})
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="glass"
                >
                  {category} ({galleryImages.filter(img => img.category === category).length})
                </Button>
              ))}
            </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {viewMode === 'grid' ? (
            /* Grid View */
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredImages.map((image, index) => (
                    <div 
                      key={image.id}
                      className="group cursor-pointer glass rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
                      onClick={() => {
                        setSelectedImageIndex(index);
                        setViewMode('single');
                      }}
                    >
                      <div className="relative aspect-[4/3]">
                        <ImageWithFallback
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ZoomIn className="h-8 w-8 text-white" />
                        </div>
                        <Badge className="absolute top-2 left-2 bg-black/60 text-white text-xs">
                          {image.category}
                        </Badge>
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium text-sm mb-1">{image.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{image.description}</p>
                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                          <span>{image.photographer}</span>
                          <span>{image.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          ) : (
            /* Single View */
            <div className="flex min-h-[60vh]">
              {/* Main Image */}
              <div className="flex-1 relative bg-black/20">
                  <ImageWithFallback
                    src={filteredImages[selectedImageIndex]?.url}
                    alt={filteredImages[selectedImageIndex]?.title}
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Navigation */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {selectedImageIndex + 1} / {filteredImages.length}
                  </div>
              </div>

              {/* Sidebar */}
              <div className="w-80 border-l border-border/50">
                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">{filteredImages[selectedImageIndex]?.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {filteredImages[selectedImageIndex]?.description}
                      </p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Category:</span>
                          <Badge variant="outline" className="text-xs">
                            {filteredImages[selectedImageIndex]?.category}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Photographer:</span>
                          <span>{filteredImages[selectedImageIndex]?.photographer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date:</span>
                          <span>{filteredImages[selectedImageIndex]?.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full glass">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="w-full glass">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">All Images</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {filteredImages.map((image, index) => (
                          <div
                            key={image.id}
                            className={`aspect-square cursor-pointer rounded-md overflow-hidden border-2 transition-all ${
                              index === selectedImageIndex 
                                ? 'border-primary' 
                                : 'border-transparent hover:border-border'
                            }`}
                            onClick={() => setSelectedImageIndex(index)}
                          >
                            <ImageWithFallback
                              src={image.url}
                              alt={image.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </BaseModal>
  );
}