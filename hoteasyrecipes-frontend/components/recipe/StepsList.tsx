import Image from 'next/image';
import { Timer } from 'lucide-react';
import { Step } from '@/lib/types';
import { useState } from 'react';

interface StepsListProps {
  steps: Step[];
}

export default function StepsList({ steps }: StepsListProps) {
  const [activeTimer, setActiveTimer] = useState<number | null>(null);
  const [timerValue, setTimerValue] = useState<Record<number, number>>({});

  const startTimer = (stepIndex: number, seconds: number) => {
    setActiveTimer(stepIndex);
    setTimerValue(prev => ({ ...prev, [stepIndex]: seconds }));
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Instructions</h2>

      <ol className="space-y-6">
        {steps.map((step, index) => (
          <li key={index} className="relative">
            {/* Step Number */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>

              <div className="flex-1">
                {/* Step Content */}
                <p className="text-stone-800 leading-relaxed mb-3">
                  {step.step}
                </p>

                {/* Step Image */}
                {step.image && (
                  <div className="relative aspect-video w-full max-w-md mb-3 rounded-lg overflow-hidden">
                    <Image
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Timer Button */}
                {step.timer && (
                  <button
                    onClick={() => startTimer(index, step.timer!)}
                    className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeTimer === index
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-stone-100 text-stone-600 hover:bg-orange-100 hover:text-orange-700'
                    }`}
                  >
                    <Timer className="h-4 w-4" />
                    <span>
                      {activeTimer === index && timerValue[index] > 0
                        ? formatTime(timerValue[index])
                        : `${Math.floor(step.timer / 60)} min`}
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="absolute left-5 top-14 bottom-0 w-0.5 bg-stone-200 -translate-x-1/2" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
