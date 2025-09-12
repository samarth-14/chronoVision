import { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Eye, Camera, RotateCcw, Maximize, Info, Sparkles } from 'lucide-react';

export function MobileARExperience() {
  const [isARSupported, setIsARSupported] = useState(false);
  const [currentTemple, setCurrentTemple] = useState(0);
  const [isARActive, setIsARActive] = useState(false);

  const temples = [
    {
      name: "Kedarnath Temple",
      location: "Uttarakhand, India",
      elevation: "3,583 m",
      description: "One of the twelve Jyotirlingas, nestled in the Himalayas"
    },
    {
      name: "Jagannath Temple", 
      location: "Puri, Odisha",
      built: "12th Century",
      description: "Famous for the annual Rath Yatra festival"
    },
    {
      name: "Konark Sun Temple",
      location: "Odisha, India", 
      built: "13th Century",
      description: "UNESCO World Heritage Site shaped like a chariot"
    }
  ];

  useEffect(() => {
    // Check if device supports AR
    if ('xr' in navigator) {
      // @ts-ignore
      navigator.xr?.isSessionSupported?.('immersive-ar').then((supported: boolean) => {
        setIsARSupported(supported);
      });
    }
  }, []);

  const startARExperience = () => {
    setIsARActive(true);
    // In a real implementation, this would initialize WebXR AR session
    console.log('Starting AR experience...');
  };

  const stopARExperience = () => {
    setIsARActive(false);
  };

  if (isARActive) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col">
        {/* AR Camera View Simulation */}
        <div className="flex-1 relative bg-gradient-to-b from-blue-900/50 to-green-900/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4">
              <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center border-4 border-accent animate-pulse">
                <Sparkles className="h-16 w-16 text-accent" />
              </div>
              <h3 className="text-xl">{temples[currentTemple].name}</h3>
              <p className="text-sm opacity-80">{temples[currentTemple].description}</p>
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                AR Model Active
              </Badge>
            </div>
          </div>

          {/* AR Controls Overlay */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <Button
              onClick={stopARExperience}
              variant="ghost"
              size="sm"
              className="bg-black/50 text-white hover:bg-black/70"
            >
              Exit AR
            </Button>
            <div className="flex space-x-2">
              <Button
                variant="ghost" 
                size="sm"
                className="bg-black/50 text-white hover:bg-black/70"
              >
                <Info className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm" 
                className="bg-black/50 text-white hover:bg-black/70"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Temple Selector */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex space-x-2 justify-center">
              {temples.map((temple, index) => (
                <Button
                  key={index}
                  onClick={() => setCurrentTemple(index)}
                  variant={currentTemple === index ? "default" : "ghost"}
                  size="sm"
                  className={`${
                    currentTemple === index 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-black/50 text-white hover:bg-black/70"
                  } text-xs`}
                >
                  {temple.name.split(' ')[0]}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-4">
      <div className="max-w-md mx-auto space-y-6 pt-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <Eye className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="text-2xl font-bold gradient-text">Temple AR</h1>
          </div>
          <p className="text-muted-foreground">
            Experience sacred Indian temples in Augmented Reality
          </p>
        </div>

        {/* AR Status */}
        <Card className="glass">
          <CardContent className="p-6 text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Camera className="h-6 w-6 text-secondary" />
              <span className="font-medium">
                {isARSupported ? "AR Ready" : "AR Not Supported"}
              </span>
            </div>
            
            {isARSupported ? (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Your device supports WebXR AR. Tap below to start the experience.
                </p>
                <Button 
                  onClick={startARExperience}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Start AR Experience
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  AR experience requires a compatible device and browser. 
                  View temple gallery instead.
                </p>
                <Button 
                  onClick={() => setIsARActive(true)}
                  variant="outline"
                  className="w-full"
                >
                  <Maximize className="h-4 w-4 mr-2" />
                  View 3D Gallery
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Temple Preview Cards */}
        {/* <div className="space-y-3">
          <h3 className="font-medium">Available Temples</h3>
          {temples.map((temple, index) => (
            <Card key={index} className="glass hover:border-primary/40 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{temple.name}</h4>
                    <p className="text-sm text-muted-foreground">{temple.location}</p>
                    {temple.elevation && (
                      <Badge variant="outline" className="text-xs mt-1">
                        {temple.elevation}
                      </Badge>
                    )}
                    {temple.built && (
                      <Badge variant="outline" className="text-xs mt-1">
                        Built: {temple.built}
                      </Badge>
                    )}
                  </div>
                  <Badge variant="secondary" className="bg-accent/20 text-accent">
                    3D Ready
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Instructions */}
        <Card className="glass border-primary/20">
          <CardContent className="p-4">
            <h4 className="font-medium mb-2 flex items-center">
              <Info className="h-4 w-4 mr-2" />
              How to Use
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Allow camera access when prompted</li>
              <li>• Point camera at a flat surface</li>
              <li>• Tap to place temple models</li>
              <li>• Use gestures to rotate and scale</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}