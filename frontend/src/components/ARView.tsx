import { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Smartphone, QrCode, Eye, Zap, Sparkles, ArrowLeft, MapPin, Clock, Calendar, Users, Crown } from 'lucide-react';

interface ARViewProps {
  onBack: () => void;
}

export function ARView({ onBack }: ARViewProps) {
  const [selectedTemple, setSelectedTemple] = useState<number | null>(null);
  
  const temples = [
    {
      id: 0,
      name: "Kedarnath Temple",
      location: "Uttarakhand, India",
      elevation: "3,583 m",
      description: "One of the twelve Jyotirlingas, nestled in the Himalayas",
      arUrl: "https://templeexplorer-ar.vercel.app/kedarnath",
      image: "https://images.unsplash.com/photo-1649147313351-c86537fda0eb?w=400",
      history: {
        ancient: "The Kedarnath temple is believed to be over 1,000 years old, though its origins trace back to ancient times when the Pandavas from the Mahabharata sought Lord Shiva's blessings here.",
        construction: "The present temple structure was built by Adi Shankaracharya in the 8th century CE, constructed using large stone slabs without the use of any mortar.",
        significance: "It is one of the twelve Jyotirlingas dedicated to Lord Shiva and is part of the Panch Kedar pilgrimage circuit in the Himalayas.",
        legend: "According to legend, after the Kurukshetra war, the Pandavas sought Lord Shiva's forgiveness. Shiva, wanting to avoid them, took the form of a bull. When found, he disappeared into the ground, leaving behind his hump, which is worshipped at Kedarnath.",
        architecture: "The temple showcases remarkable ancient Indian architecture with massive stone slabs, conical-shaped lingam, and intricate carvings that have withstood centuries of harsh Himalayan weather.",
        modernHistory: "The temple suffered significant damage during the 2013 Uttarakhand floods but was restored and continues to be a major pilgrimage destination, opening only during the summer months due to extreme winter conditions."
      }
    },
    {
      id: 1,
      name: "Jagannath Temple", 
      location: "Puri, Odisha",
      built: "12th Century",
      description: "Famous for the annual Rath Yatra festival",
      arUrl: "https://templeexplorer-ar.vercel.app/jagannath",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400",
      history: {
        ancient: "The Jagannath Temple in Puri dates back to the 12th century and is dedicated to Lord Jagannath, a form of Lord Krishna. The temple has been a center of devotion for over 900 years.",
        construction: "Built by King Anantavarman Chodaganga Deva of the Eastern Ganga Dynasty around 1135 CE, the temple took several decades to complete under subsequent rulers.",
        significance: "It is one of the four sacred Char Dham pilgrimage sites for Hindus and is famous for the annual Rath Yatra (Chariot Festival), where the deities are taken out in massive wooden chariots.",
        legend: "The legend states that Lord Krishna instructed King Indradyumna to build the temple after finding the deity's image floating in the sea. The wooden idols are replaced every 12-19 years in a secret ceremony called Nabakalebara.",
        architecture: "The temple features stunning Kalinga architecture with a 65-meter tall main spire (shikhara), elaborate carvings, and the famous Chakra (wheel) on top that can be seen from great distances.",
        modernHistory: "The temple continues to attract millions of devotees annually. The Rath Yatra festival, where devotees pull the chariots of Lord Jagannath, Balabhadra, and Subhadra, is celebrated with great fervor and draws international attention."
      }
    },
    {
      id: 2,
      name: "Konark Sun Temple",
      location: "Odisha, India", 
      built: "13th Century",
      description: "UNESCO World Heritage Site shaped like a chariot",
      arUrl: "https://templeexplorer-ar.vercel.app/konark",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400",
      history: {
        ancient: "The Konark Sun Temple, also known as the Black Pagoda, was built in the 13th century (around 1250 CE) and is dedicated to the Hindu Sun God, Surya.",
        construction: "Commissioned by King Narasimhadeva I of the Eastern Ganga Dynasty, the temple took 12 years to build and employed over 12,000 artisans and craftsmen.",
        significance: "The temple is designed as a massive chariot with 24 wheels, pulled by seven horses, representing the Sun God's chariot that carries him across the sky. It's a UNESCO World Heritage Site since 1984.",
        legend: "Local legends speak of the temple's main attraction - a powerful magnet at the top that could pull ships from the sea. The temple was also said to have been built by Samba, son of Lord Krishna, to cure himself of leprosy.",
        architecture: "The temple exemplifies Kalinga architecture with intricate stone carvings depicting the wheel of time, celestial beings, animals, and erotic sculptures. The wheels function as sundials, accurately telling time by their shadows.",
        modernHistory: "Much of the temple is now in ruins due to natural disasters and invasions, but its architectural grandeur continues to inspire visitors. Conservation efforts by the Archaeological Survey of India help preserve this magnificent monument for future generations."
      }
    }
  ];

  const generateQRCode = (url: string) => {
    // In a real implementation, you'd use a QR code library
    // For now, we'll create a visual pattern that represents each temple uniquely
    const pattern = url.split('').map((char, index) => char.charCodeAt(0) + index).slice(0, 64);
    return pattern;
  };
  
  return (
    <section className="min-h-screen bg-card relative z-10 shadow-2xl pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Button 
          onClick={onBack}
          variant="ghost" 
          className="mb-8 text-primary hover:text-primary hover:bg-primary/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Eye className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="gradient-text">AR Temple Experience</h1>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Immerse yourself in the sacred beauty of ancient Indian temples through cutting-edge 
            Augmented Reality technology. Scan the QR code with your mobile device to begin your spiritual journey.
          </p>
        </div>

        {selectedTemple !== null ? (
          /* Individual Temple QR Code View */
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* QR Code Section */}
              <div className="order-2 lg:order-1">
                <Card className="glass border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <QrCode className="h-6 w-6 text-primary" />
                      <h3>{temples[selectedTemple].name} AR</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Scan this QR code to experience {temples[selectedTemple].name} in AR
                    </p>
                  </CardHeader>
                  
                  <CardContent className="flex flex-col items-center space-y-6">
                    {/* Dynamic QR Code */}
                    <div className="relative">
                      <div className="w-64 h-64 bg-white rounded-lg p-4 shadow-2xl">
                        <div className="w-full h-full bg-black relative overflow-hidden rounded">
                          {/* Temple-specific QR code pattern */}
                          <div className="absolute inset-0 grid grid-cols-8 gap-1 p-2">
                            {generateQRCode(temples[selectedTemple].arUrl).map((value, i) => (
                              <div 
                                key={i} 
                                className={`${
                                  value % 2 === 0 ? 'bg-black' : 'bg-white'
                                } rounded-sm`}
                              />
                            ))}
                          </div>
                          {/* Corner markers */}
                          <div className="absolute top-2 left-2 w-8 h-8 border-4 border-black bg-white"></div>
                          <div className="absolute top-2 right-2 w-8 h-8 border-4 border-black bg-white"></div>
                          <div className="absolute bottom-2 left-2 w-8 h-8 border-4 border-black bg-white"></div>
                        </div>
                      </div>
                      
                      {/* Animated scanning indicator */}
                      <div className="absolute -inset-4 border-2 border-primary rounded-lg animate-pulse"></div>
                    </div>

                    <div className="text-center space-y-2">
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        <Smartphone className="h-3 w-3 mr-1" />
                        Mobile Required
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Compatible with iOS Safari & Android Chrome
                      </p>
                    </div>

                    {/* Fallback URL */}
                    <div className="w-full p-4 bg-muted/20 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">Manual Link:</p>
                      <code className="text-xs text-primary break-all">
                        {temples[selectedTemple].arUrl}
                      </code>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="default"
                            className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent/80 hover:to-secondary/80"
                          >
                            <Clock className="h-4 w-4 mr-2" />
                            Know the History
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] glass border-2 border-primary/20">
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-2 text-xl gradient-text">
                              <Crown className="h-6 w-6 text-accent" />
                              <span>History of {temples[selectedTemple].name}</span>
                            </DialogTitle>
                          </DialogHeader>
                          <ScrollArea className="max-h-[60vh] pr-4">
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <Card className="glass p-4">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Calendar className="h-4 w-4 text-primary" />
                                    <span className="font-medium">Built</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {temples[selectedTemple].built || temples[selectedTemple].elevation}
                                  </p>
                                </Card>
                                <Card className="glass p-4">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <MapPin className="h-4 w-4 text-secondary" />
                                    <span className="font-medium">Location</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {temples[selectedTemple].location}
                                  </p>
                                </Card>
                              </div>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium mb-3 flex items-center">
                                    <Sparkles className="h-4 w-4 mr-2 text-accent" />
                                    Ancient Origins
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {temples[selectedTemple].history.ancient}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-medium mb-3 flex items-center">
                                    <Users className="h-4 w-4 mr-2 text-primary" />
                                    Construction & Builders
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {temples[selectedTemple].history.construction}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-medium mb-3 flex items-center">
                                    <Crown className="h-4 w-4 mr-2 text-secondary" />
                                    Religious Significance
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {temples[selectedTemple].history.significance}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-medium mb-3 flex items-center">
                                    <Sparkles className="h-4 w-4 mr-2 text-accent" />
                                    Sacred Legends
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {temples[selectedTemple].history.legend}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-medium mb-3 flex items-center">
                                    <Eye className="h-4 w-4 mr-2 text-primary" />
                                    Architectural Marvel
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {temples[selectedTemple].history.architecture}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-medium mb-3 flex items-center">
                                    <Clock className="h-4 w-4 mr-2 text-secondary" />
                                    Modern Era
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {temples[selectedTemple].history.modernHistory}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </ScrollArea>
                        </DialogContent>
                      </Dialog>

                      <Button 
                        onClick={() => setSelectedTemple(null)}
                        variant="outline"
                        className="w-full"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Temple List
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Temple Details */}
              <div className="order-1 lg:order-2">
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-4 gradient-text">
                      {temples[selectedTemple].name}
                    </h2>
                    <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{temples[selectedTemple].location}</span>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {temples[selectedTemple].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {temples[selectedTemple].elevation && (
                      <Card className="glass p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent mb-2">
                            {temples[selectedTemple].elevation}
                          </div>
                          <div className="text-sm text-muted-foreground">Elevation</div>
                        </div>
                      </Card>
                    )}
                    {temples[selectedTemple].built && (
                      <Card className="glass p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-secondary mb-2">
                            {temples[selectedTemple].built}
                          </div>
                          <div className="text-sm text-muted-foreground">Built</div>
                        </div>
                      </Card>
                    )}
                  </div>

                  <Card className="glass border-accent/20">
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-4 flex items-center">
                        <Eye className="h-4 w-4 mr-2 text-accent" />
                        AR Experience Features
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• 360° temple exploration</li>
                        <li>• Historical timeline overlay</li>
                        <li>• Interactive architectural details</li>
                        <li>• Sacred geometry visualization</li>
                        <li>• Audio spiritual guidance</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Temple Selection View */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Instructions Section */}
            <div className="order-1 lg:order-1 space-y-8">
              <div className="space-y-6">
                <h2 className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-accent" />
                  <span>How to Experience AR</span>
                </h2>
                
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Select Temple",
                      description: "Choose a temple from the list to generate its QR code",
                      icon: QrCode
                    },
                    {
                      step: "2", 
                      title: "Scan QR Code",
                      description: "Use your phone's camera to scan the temple-specific QR code",
                      icon: Eye
                    },
                    {
                      step: "3",
                      title: "Explore in AR",
                      description: "Experience the temple in immersive augmented reality",
                      icon: Sparkles
                    }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Card key={index} className="glass border-l-4 border-l-primary">
                        <CardContent className="flex items-start space-x-4 p-6">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                              <span className="text-primary font-semibold">{item.step}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <IconComponent className="h-4 w-4 text-primary" />
                              <h4>{item.title}</h4>
                            </div>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Temple Selection */}
            <div className="order-2 lg:order-2 space-y-6">
              <h3 className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-accent" />
                <span>Select Temple for AR</span>
              </h3>
              
              <div className="space-y-4">
                {temples.map((temple, index) => (
                  <Card key={index} className="glass hover:border-primary/40 transition-all duration-300 cursor-pointer group" onClick={() => setSelectedTemple(index)}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium group-hover:text-primary transition-colors">{temple.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{temple.location}</p>
                          <p className="text-xs text-muted-foreground mb-3">{temple.description}</p>
                          <div className="flex space-x-2">
                            {temple.elevation && (
                              <Badge variant="outline" className="text-xs">
                                {temple.elevation}
                              </Badge>
                            )}
                            {temple.built && (
                              <Badge variant="outline" className="text-xs">
                                Built: {temple.built}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Badge variant="secondary" className="bg-accent/20 text-accent">
                            AR Ready
                          </Badge>
                          <Button size="sm" className="group-hover:scale-105 transition-transform">
                            <QrCode className="h-4 w-4 mr-2" />
                            Get QR Code
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Technical Requirements */}
        <div className="mt-16 p-6 bg-muted/10 rounded-lg border border-border">
          <h4 className="mb-4 text-center">System Requirements</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="text-center">
              <Smartphone className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="font-medium">Mobile Device</p>
              <p>iOS 12+ or Android 8+</p>
            </div>
            <div className="text-center">
              <Eye className="h-8 w-8 mx-auto mb-2 text-secondary" />
              <p className="font-medium">Camera Access</p>
              <p>Rear camera required</p>
            </div>
            <div className="text-center">
              <Zap className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="font-medium">Internet</p>
              <p>Stable connection needed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}