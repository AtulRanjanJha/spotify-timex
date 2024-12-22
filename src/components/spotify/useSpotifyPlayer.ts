import { useState } from 'react';

export function useSpotifyPlayer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return {
    isExpanded,
    isVisible,
    toggleExpanded,
    toggleVisibility,
  };
}