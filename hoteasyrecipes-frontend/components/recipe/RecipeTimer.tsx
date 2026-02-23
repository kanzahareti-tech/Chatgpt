'use client';

import { useState, useEffect } from 'react';
import { Timer, Play, Pause, RotateCcw, X } from 'lucide-react';

interface RecipeTimerProps {
  duration: number; // in seconds
  label?: string;
}

export default function RecipeTimer({ duration, label = 'Timer' }: RecipeTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      // Play notification sound or show alert
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Timer Complete!', {
          body: `${label} is done!`,
        });
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, label]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsRunning(true);
    setIsVisible(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(duration);
  };

  const progress = ((duration - timeLeft) / duration) * 100;

  return (
    <>
      {/* Timer Button */}
      <button
        onClick={handleStart}
        className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
      >
        <Timer className="h-4 w-4" />
        <span>{Math.floor(duration / 60)} min</span>
      </button>

      {/* Floating Timer Modal */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-72 border border-stone-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-stone-900">{label}</h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-stone-400 hover:text-stone-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Timer Display */}
            <div className="relative mb-6">
              <div className="w-40 h-40 mx-auto relative">
                {/* Progress Ring */}
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#ea580c"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 70}`}
                    strokeDashoffset={`${2 * Math.PI * 70 * (1 - progress / 100)}`}
                    className="transition-all duration-1000"
                  />
                </svg>
                {/* Time Display */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-stone-900">
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center space-x-3">
              <button
                onClick={handleReset}
                className="p-3 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors"
                aria-label="Reset timer"
              >
                <RotateCcw className="h-5 w-5 text-stone-600" />
              </button>
              <button
                onClick={isRunning ? handlePause : handleStart}
                className="p-3 bg-orange-600 rounded-full hover:bg-orange-700 transition-colors"
                aria-label={isRunning ? 'Pause timer' : 'Start timer'}
              >
                {isRunning ? (
                  <Pause className="h-5 w-5 text-white" />
                ) : (
                  <Play className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
