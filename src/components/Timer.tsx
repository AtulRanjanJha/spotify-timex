import { useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Settings } from 'lucide-react';
import useSound from 'use-sound';
import { useTimerStore } from '../store/timer';
import { formatTime } from '../lib/utils';
import { Settings as SettingsDialog } from './Settings';

const bellSound = '/sounds/bell.mp3';

export function Timer() {
  const {
    mode,
    timeLeft,
    isRunning,
    setTimeLeft,
    setIsRunning,
    soundEnabled,
    soundVolume,
    reset,
  } = useTimerStore();

  const [playSound] = useSound(bellSound, { volume: soundVolume });

  const handleTimerComplete = useCallback(() => {
    setIsRunning(false);
    if (soundEnabled) {
      playSound();
    }
  }, [setIsRunning, soundEnabled, playSound]);

  useEffect(() => {
    let interval: number;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimerComplete();
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, setTimeLeft, handleTimerComplete]);

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded-full ${
            mode === 'pomodoro'
              ? 'bg-white text-black'
              : 'bg-black/20 text-white hover:bg-black/30'
          }`}
          onClick={() => useTimerStore.getState().setMode('pomodoro')}
        >
          Pomodoro
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            mode === 'shortBreak'
              ? 'bg-white text-black'
              : 'bg-black/20 text-white hover:bg-black/30'
          }`}
          onClick={() => useTimerStore.getState().setMode('shortBreak')}
        >
          Short Break
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            mode === 'longBreak'
              ? 'bg-white text-black'
              : 'bg-black/20 text-white hover:bg-black/30'
          }`}
          onClick={() => useTimerStore.getState().setMode('longBreak')}
        >
          Long Break
        </button>
      </div>

      <div className="text-8xl font-bold text-white">{formatTime(timeLeft)}</div>

      <div className="flex space-x-4">
        <button
          className="p-3 rounded-full bg-white text-black hover:bg-gray-100"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button
          className="p-3 rounded-full bg-black/20 text-white hover:bg-black/30"
          onClick={reset}
        >
          <RotateCcw size={24} />
        </button>
        <SettingsDialog>
          <button className="p-3 rounded-full bg-black/20 text-white hover:bg-black/30">
            <Settings size={24} />
          </button>
        </SettingsDialog>
      </div>
    </div>
  );
}