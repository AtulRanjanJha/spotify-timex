import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import * as Select from '@radix-ui/react-select';
import { Clock } from 'lucide-react';

const timeZones = [
  { name: 'Local Time', value: Intl.DateTimeFormat().resolvedOptions().timeZone },
  { name: 'New York (EST)', value: 'America/New_York' },
  { name: 'London (GMT)', value: 'Europe/London' },
  { name: 'Tokyo (JST)', value: 'Asia/Tokyo' },
  { name: 'Sydney (AEST)', value: 'Australia/Sydney' },
];

export function WorldClock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTimeZone, setSelectedTimeZone] = useState(timeZones[0].value);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = formatInTimeZone(
    currentTime,
    selectedTimeZone,
    'HH:mm:ss'
  );

  return (
    <div className="fixed top-4 right-4 flex items-center space-x-2 bg-black/20 text-white rounded-full px-4 py-2">
      <Clock size={20} />
      <Select.Root value={selectedTimeZone} onValueChange={setSelectedTimeZone}>
        <Select.Trigger className="bg-transparent">
          <Select.Value />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="bg-white text-black border rounded-lg shadow-lg">
            <Select.Viewport>
              {timeZones.map((tz) => (
                <Select.Item
                  key={tz.value}
                  value={tz.value}
                  className="px-3 py-2 outline-none cursor-pointer hover:bg-gray-100"
                >
                  {tz.name}
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      <span className="font-mono">{formattedTime}</span>
    </div>
  );
}