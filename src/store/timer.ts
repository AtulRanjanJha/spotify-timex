import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TimerState {
  mode: 'pomodoro' | 'shortBreak' | 'longBreak';
  timeLeft: number;
  isRunning: boolean;
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  soundEnabled: boolean;
  soundVolume: number;
  theme: string;
  wallpaper: string;
  darkMode: boolean;
  setMode: (mode: 'pomodoro' | 'shortBreak' | 'longBreak') => void;
  setTimeLeft: (time: number) => void;
  setIsRunning: (isRunning: boolean) => void;
  setPomodoroTime: (time: number) => void;
  setShortBreakTime: (time: number) => void;
  setLongBreakTime: (time: number) => void;
  setSoundEnabled: (enabled: boolean) => void;
  setSoundVolume: (volume: number) => void;
  setTheme: (theme: string) => void;
  setWallpaper: (wallpaper: string) => void;
  setDarkMode: (darkMode: boolean) => void;
  reset: () => void;
}

export const useTimerStore = create<TimerState>()(
  persist(
    (set) => ({
      mode: 'pomodoro',
      timeLeft: 25 * 60,
      isRunning: false,
      pomodoroTime: 25 * 60,
      shortBreakTime: 5 * 60,
      longBreakTime: 10 * 60,
      soundEnabled: true,
      soundVolume: 0.5,
      theme: 'default',
      wallpaper: 'https://images.unsplash.com/photo-1514565131-fce0801e5785',
      darkMode: false,
      setMode: (mode) => set({ mode }),
      setTimeLeft: (timeLeft) => set({ timeLeft }),
      setIsRunning: (isRunning) => set({ isRunning }),
      setPomodoroTime: (time) => set({ pomodoroTime: time * 60 }),
      setShortBreakTime: (time) => set({ shortBreakTime: time * 60 }),
      setLongBreakTime: (time) => set({ longBreakTime: time * 60 }),
      setSoundEnabled: (enabled) => set({ soundEnabled: enabled }),
      setSoundVolume: (volume) => set({ soundVolume: volume }),
      setTheme: (theme) => set({ theme }),
      setWallpaper: (wallpaper) => set({ wallpaper }),
      setDarkMode: (darkMode) => set({ darkMode }),
      reset: () =>
        set({
          timeLeft: 25 * 60,
          isRunning: false,
          mode: 'pomodoro',
        }),
    }),
    {
      name: 'timer-storage',
    }
  )
);