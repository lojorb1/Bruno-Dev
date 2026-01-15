
import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

const LOADING_STEPS = [
  "Initializing architecture...",
  "Securing environment...",
  "Compiling expertise...",
  "Optimizing performance...",
  "Ready for deployment."
];

const LoadingScreen: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smoother step transition
    const stepInterval = setInterval(() => {
      setStepIndex((prev) => (prev < LOADING_STEPS.length - 1 ? prev + 1 : prev));
    }, 250);

    // Faster progress bar for better UX
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-20 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-blue-600/10 blur-[128px] rounded-full animate-pulse-glow"></div>
      
      <div className="relative flex flex-col items-center max-w-sm w-full">
        <div className="relative mb-10 animate-float">
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
          <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-900 rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden">
            <Code2 className="w-10 h-10 md:w-12 md:h-12 text-blue-500 animate-draw" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
          </div>
        </div>

        <div className="h-16 text-center flex flex-col items-center justify-center w-full">
          <p className="text-white text-base md:text-lg font-bold tracking-tight animate-in slide-in-from-bottom-2 flex items-center gap-3">
            <span className="text-blue-500 font-mono text-xs opacity-50">0{stepIndex + 1}</span>
            {LOADING_STEPS[stepIndex]}
          </p>
          <p className="text-slate-600 text-[10px] font-mono mt-3 uppercase tracking-[0.2em] animate-pulse">
            Establishing Connection...
          </p>
        </div>

        <div className="mt-10 w-full max-w-[240px] h-1 bg-white/5 rounded-full relative overflow-hidden border border-white/5">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out animate-shimmer"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20 flex items-center gap-2">
        <span className="text-[10px] font-bold tracking-widest uppercase text-white">BrunoDev</span>
        <div className="w-0.5 h-0.5 bg-blue-500 rounded-full"></div>
        <span className="text-[9px] font-medium text-slate-500">v2.1.0</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
