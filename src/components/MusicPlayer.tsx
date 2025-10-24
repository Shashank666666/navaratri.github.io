import { useState } from 'react';
import { Music, Pause, Volume2 } from 'lucide-react';
import { Button } from './ui/button';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control actual audio playback
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleMusic}
        size="lg"
        className={`rounded-full w-14 h-14 shadow-2xl transition-all duration-300 ${
          isPlaying
            ? 'bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 animate-pulse'
            : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600'
        }`}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-white" />
        ) : (
          <Music className="w-6 h-6 text-white" />
        )}
      </Button>
      
      {isPlaying && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 min-w-[200px] border-2 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-2 mb-2">
            <Volume2 className="w-4 h-4 text-orange-600" />
            <span className="text-sm">Garba Beats Playing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-500 to-pink-500 w-1/3 animate-pulse"></div>
            </div>
          </div>
          <p className="text-xs opacity-60 mt-1">Traditional Festival Music</p>
        </div>
      )}
    </div>
  );
}
