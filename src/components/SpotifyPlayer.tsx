import { useState } from 'react';
import { Music, X } from 'lucide-react';

export function SpotifyPlayer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 p-3 bg-black/30 hover:bg-black/40 text-white rounded-full transition-all"
      >
        <Music size={20} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2">
      <button
        onClick={() => setIsVisible(false)}
        className="p-2 bg-black/30 hover:bg-black/40 text-white rounded-full self-end transition-all"
      >
        <X size={16} />
      </button>
      <div className={`transition-all duration-300 ${isExpanded ? 'w-[350px] h-[352px]' : 'w-[250px] h-[80px]'}`}>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/artist/2XqXXH9xPa1zucIOtZ3u3A?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-xs bg-black/30 hover:bg-black/40 text-white px-3 py-1 rounded-full transition-all"
      >
        {isExpanded ? 'Minimize' : 'Expand'}
      </button>
    </div>
  );
}