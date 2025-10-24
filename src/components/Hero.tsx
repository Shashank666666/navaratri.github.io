import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Navaratri 2025 starts on September 22, 2025
    const targetDate = new Date('2025-09-22T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 dark:from-orange-950 dark:via-pink-950 dark:to-yellow-950">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-pulse">✨</div>
        <div className="absolute top-20 right-20 animate-pulse" style={{ animationDelay: '1s' }}>🪔</div>
        <div className="absolute bottom-20 left-20 animate-pulse" style={{ animationDelay: '2s' }}>🌸</div>
        <div className="absolute bottom-10 right-10 animate-pulse" style={{ animationDelay: '1.5s' }}>✨</div>
        <div className="absolute top-1/2 left-1/4 animate-pulse" style={{ animationDelay: '0.5s' }}>🪔</div>
        <div className="absolute top-1/3 right-1/3 animate-pulse" style={{ animationDelay: '2.5s' }}>🌸</div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span>Celebrating Divine Power</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-red-600">
              Navaratri<br />Festival 2025
            </h1>
            
            <p className="text-xl opacity-80 max-w-xl">
              Join us in celebrating the triumph of good over evil. Nine nights of devotion, dance, and divine blessings. 🙏
            </p>

            {/* Countdown Timer */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-xl">
              <p className="mb-4 text-orange-600 dark:text-orange-400">Festival Begins In:</p>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-xl p-4 mb-2">
                      <span className="text-3xl">{item.value.toString().padStart(2, '0')}</span>
                    </div>
                    <span className="text-sm opacity-70">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-8">
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950">
                View Events
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760344654214-97e2ceda7c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2RkZXNzJTIwZHVyZ2ElMjBzdGF0dWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjEyODA0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Goddess Durga"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-6 -right-6 text-6xl animate-bounce">🪔</div>
            <div className="absolute -bottom-6 -left-6 text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌸</div>
          </div>
        </div>
      </div>
    </section>
  );
}
