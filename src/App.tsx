import { useEffect } from 'react';
import { Timer } from './components/Timer';
import { WorldClock } from './components/WorldClock';
import { SpotifyPlayer } from './components/SpotifyPlayer';
import { useTimerStore } from './store/timer';

function App() {
  const { wallpaper, darkMode } = useTimerStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <WorldClock />
      <Timer />
      <SpotifyPlayer />
    </div>
  );
}

export default App;