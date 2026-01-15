
import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

const LOADING_STEPS = [
  "Initializing core architecture...",
  "Securing server environments...",
  "Compiling technical expertise...",
  "Optimizing performance bridges...",
  "Ready for deployment."
];

const LoadingScreen: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStepIndex((prev) => (prev < LOADING_STEPS.length - 1 ? prev + 1 : prev));
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const increment = Math.max(1, (100 - prev) / 10); // Slower as it approaches 100
        return prev + increment;
      });
    }, 150);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-grid-white opacity-20 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-blue-600/10 blur-[128px] rounded-full animate-pulse-glow"></div>
      
      {/* Central Content */}
      <div className="relative flex flex-col items-center">
        {/* Animated Logo Container */}
        <div className="relative mb-12 animate-float">
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-900 rounded-[2.5rem] border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden group">
            <Code2 className="w-12 h-12 md:w-16 md:h-16 text-blue-500 animate-draw transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
          </div>
        </div>

        {/* Text Area */}
        <div className="h-20 text-center flex flex-col items-center justify-center max-w-xs md:max-w-md w-full">
          <div className="overflow-hidden">
            <p className="text-white text-lg md:text-xl font-bold tracking-tight animate-in slide-in-from-bottom-2 duration-500 flex items-center gap-3">
              <span className="text-blue-500 font-mono text-sm opacity-50">0{stepIndex + 1}</span>
              {LOADING_STEPS[stepIndex]}
            </p>
          </div>
          <p className="text-slate-500 text-xs font-mono mt-4 uppercase tracking-[0.2em] animate-pulse">
            Establishing Secure Connection...
          </p>
        </div>

        {/* Progress Container */}
        <div className="mt-12 w-64 md:w-80 h-1.5 bg-white/5 rounded-full relative overflow-hidden border border-white/5">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 transition-all duration-500 ease-out animate-shimmer"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Subtle Counter */}
        <div className="mt-4 font-mono text-[10px] text-slate-600 tracking-widest uppercase">
          {Math.floor(progress)}% loaded
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 flex items-center gap-2">
        <span className="text-xs font-bold tracking-widest uppercase text-white">BrunoDev</span>
        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
        <span className="text-[10px] font-medium text-slate-500">v2024.1.0-RC</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
