import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import * as Select from '@radix-ui/react-select';
import * as Switch from '@radix-ui/react-switch';
import * as Slider from '@radix-ui/react-slider';
import { X } from 'lucide-react';
import { useTimerStore } from '../store/timer';
import { getDefaultWallpapers } from '../lib/utils';

export function Settings({ children }: { children: React.ReactNode }) {
  const {
    pomodoroTime,
    shortBreakTime,
    longBreakTime,
    soundEnabled,
    soundVolume,
    wallpaper,
    darkMode,
    setPomodoroTime,
    setShortBreakTime,
    setLongBreakTime,
    setSoundEnabled,
    setSoundVolume,
    setWallpaper,
    setDarkMode,
  } = useTimerStore();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 p-6 rounded-lg w-[500px] max-h-[85vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-2xl font-bold">Settings</Dialog.Title>
            <Dialog.Close className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </Dialog.Close>
          </div>

          <Tabs.Root defaultValue="timer">
            <Tabs.List className="flex border-b mb-4">
              <Tabs.Trigger
                value="timer"
                className="px-4 py-2 -mb-px border-b-2 border-transparent data-[state=active]:border-blue-500"
              >
                Timer
              </Tabs.Trigger>
              <Tabs.Trigger
                value="theme"
                className="px-4 py-2 -mb-px border-b-2 border-transparent data-[state=active]:border-blue-500"
              >
                Theme
              </Tabs.Trigger>
              <Tabs.Trigger
                value="sound"
                className="px-4 py-2 -mb-px border-b-2 border-transparent data-[state=active]:border-blue-500"
              >
                Sound
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="timer" className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Pomodoro
                  </label>
                  <input
                    type="number"
                    value={pomodoroTime / 60}
                    onChange={(e) => setPomodoroTime(parseInt(e.target.value))}
                    className="w-full px-3 py-2 border rounded"
                    min="1"
                    max="60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Short Break
                  </label>
                  <input
                    type="number"
                    value={shortBreakTime / 60}
                    onChange={(e) => setShortBreakTime(parseInt(e.target.value))}
                    className="w-full px-3 py-2 border rounded"
                    min="1"
                    max="60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Long Break
                  </label>
                  <input
                    type="number"
                    value={longBreakTime / 60}
                    onChange={(e) => setLongBreakTime(parseInt(e.target.value))}
                    className="w-full px-3 py-2 border rounded"
                    min="1"
                    max="60"
                  />
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content value="theme" className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Background
                </label>
                <Select.Root value={wallpaper} onValueChange={setWallpaper}>
                  <Select.Trigger className="w-full px-3 py-2 border rounded">
                    <Select.Value />
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content className="bg-white border rounded-lg shadow-lg">
                      <Select.Viewport>
                        {getDefaultWallpapers().map((wp) => (
                          <Select.Item
                            key={wp.id}
                            value={wp.url}
                            className="px-3 py-2 outline-none cursor-pointer hover:bg-gray-100"
                          >
                            {wp.name}
                          </Select.Item>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Dark Mode</span>
                <Switch.Root
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                  className="w-11 h-6 bg-gray-200 rounded-full relative data-[state=checked]:bg-blue-500"
                >
                  <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
                </Switch.Root>
              </div>
            </Tabs.Content>

            <Tabs.Content value="sound" className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Sound Enabled</span>
                <Switch.Root
                  checked={soundEnabled}
                  onCheckedChange={setSoundEnabled}
                  className="w-11 h-6 bg-gray-200 rounded-full relative data-[state=checked]:bg-blue-500"
                >
                  <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
                </Switch.Root>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Volume</label>
                <Slider.Root
                  value={[soundVolume]}
                  onValueChange={([value]) => setSoundVolume(value)}
                  max={1}
                  step={0.1}
                  className="relative flex items-center select-none touch-none w-full h-5"
                >
                  <Slider.Track className="bg-gray-200 relative grow rounded-full h-1">
                    <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
                  </Slider.Track>
                  <Slider.Thumb className="block w-5 h-5 bg-white shadow-lg rounded-full hover:bg-gray-50 focus:outline-none" />
                </Slider.Root>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}