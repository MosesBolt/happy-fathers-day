"use client";
import { useRef } from "react";
import confetti from "canvas-confetti";

export default function Page() {
  const audioRef = useRef(null);

  const shootConfettiAndPlay = () => {
    confetti({
      particleCount: 300,
      spread: 120,
      origin: { y: 0.5 },
    });

    if (audioRef.current) {
      audioRef.current.play().catch((e) => {
        console.error("Audio failed to play:", e);
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-8 font-sans space-y-8 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold text-yellow-400 drop-shadow">
        🎉 Happy Father's Day Dad! 🎉
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 max-w-md">
        I built this just for you.A digital letter. Because you’re epic. And we love you.
      </p>

      <button
        onClick={shootConfettiAndPlay}
        className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white text-lg font-bold shadow-lg transition duration-300"
      >
        ❤️ Love, MosesUgo and the starboys
      </button>

      <audio ref={audioRef} src="/birthday.mp3" preload="auto" />
    </div>
  );
}
