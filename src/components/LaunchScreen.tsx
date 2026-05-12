import { useEffect, useState } from "react";
import Logo1 from "../assets/Logo1.png";
import Logo2 from "../assets/Logo2.png";

function LaunchScreen() {
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(10);

  const strokeDasharray = 753.98;

  useEffect(() => {
    if (started && count > 0) {
      const timer = setTimeout(() => {
        setCount((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (started && count === 0) {
      setTimeout(() => {
        window.location.href = "https://nohazz.com";
      }, 1000);
    }
  }, [started, count]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[radial-gradient(circle,#ffffff_0%,#c7e9c0_100%)]">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[120px]"></div>

      {!started ? (
        <div className="relative w-full max-w-5xl flex flex-col items-center animate-in fade-in zoom-in duration-700">
          <div className="w-full px-6 py-10 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
            <img src={Logo1} alt="Logo 1" className="w-32 sm:w-40 md:w-56 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
            <div className="hidden lg:block w-px h-28 bg-white/20"></div>
            <img src={Logo2} alt="Logo 2" className="w-48 sm:w-64 md:w-96 object-contain drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]" />
          </div>

          <button
            onClick={() => setStarted(true)}
            className="mt-12 px-12 py-4 rounded-full bg-linear-to-r from-green-600 to-emerald-500 text-white text-xl md:text-2xl font-bold tracking-widest shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:scale-110 hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] transition-all duration-500 active:scale-95"
          >
            LAUNCH
          </button>
        </div>
      ) : (
        /* --- IMPROVED COUNTDOWN SCREEN --- */
        <div className="relative flex items-center justify-center scale-110 md:scale-125">
          
          {/* Animated Outer Pulse */}
          <div className="absolute w-80 h-80 rounded-full bg-green-500/10 blur-3xl animate-pulse"></div>

          {/* SVG RING */}
          <svg className="absolute w-72 h-72 md:w-80 md:h-80 -rotate-90" viewBox="0 0 300 300">
            {/* Background Circle (Ghost Ring) */}
            <circle
              cx="150" cy="150" r="120"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="10"
              fill="transparent"
            />
            {/* The Progress Circle */}
            <circle
              cx="150" cy="150" r="120"
              stroke="#22c55e"
              strokeWidth="10"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              style={{
                strokeDashoffset: strokeDasharray - (count / 10) * strokeDasharray,
                transition: "stroke-dashoffset 1s linear, stroke 0.3s ease"
              }}
              className="drop-shadow-[0_0_15px_rgba(34,197,94,1)]"
            />
          </svg>

          {/* INNER GLASS BOX */}
          <div className="relative w-56 h-56 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden">
             {/* Subtle internal glow */}
             <div className="absolute inset-0 bg-linear-to-br from-green-500/10 to-transparent"></div>
             
             {/* Countdown Number */}
             <h1
               key={count}
               className="text-8xl md:text-9xl font-black text-green-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] animate-count-pop"
             >
               {count}
             </h1>
          </div>
        </div>
      )}

      {/* Adding custom keyframes via style tag for simplicity */}
      <style>{`
        @keyframes count-pop {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-count-pop {
          animation: count-pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </div>
  );
}

export default LaunchScreen;