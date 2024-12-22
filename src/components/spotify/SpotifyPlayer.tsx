import { SpotifyControls } from './SpotifyControls';
import { SpotifyEmbed } from './SpotifyEmbed';
import { useSpotifyPlayer } from './useSpotifyPlayer';
import { Music } from 'lucide-react';

export function SpotifyPlayer() {
  const { isExpanded, isVisible, toggleExpanded, toggleVisibility } = useSpotifyPlayer();

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 p-3 bg-black/30 hover:bg-black/40 text-white rounded-full transition-all"
      >
        <Music size={20} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2">
      <SpotifyControls 
        isExpanded={isExpanded}
        onClose={() => toggleVisibility()}
        onToggleExpand={toggleExpanded}
      />
      <SpotifyEmbed isExpanded={isExpanded} />
    </div>
  );
}