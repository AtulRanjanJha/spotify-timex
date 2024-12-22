import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(timeInSeconds: number): string {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function getDefaultWallpapers() {
  return [
    {
      id: 'city-sunset',
      name: 'City Sunset',
      url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785',
    },
    {
      id: 'mountain-lake',
      name: 'Mountain Lake',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    },
    {
      id: 'forest',
      name: 'Forest',
      url: 'https://images.unsplash.com/photo-1511497584788-876760111969',
    },
    {
      id: 'ocean',
      name: 'Ocean',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    },
  ];
}