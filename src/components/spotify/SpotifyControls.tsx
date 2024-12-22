import { X } from 'lucide-react';

interface SpotifyControlsProps {
  isExpanded: boolean;
  onClose: () => void;
  onToggleExpand: () => void;
}

export function SpotifyControls({ isExpanded, onClose, onToggleExpand }: SpotifyControlsProps) {
  return (
    <>
      <button
        onClick={onClose}
        className="p-2 bg-black/30 hover:bg-black/40 text-white rounded-full self-end transition-all"
      >
        <X size={16} />
      </button>
      <button
        onClick={onToggleExpand}
        className="text-xs bg-black/30 hover:bg-black/40 text-white px-3 py-1 rounded-full transition-all"
      >
        {isExpanded ? 'Minimize' : 'Expand'}
      </button>
    </>
  );
}