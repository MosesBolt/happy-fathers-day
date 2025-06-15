"use client";
import { useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import * as THREE from "three";
import VANTA from "vanta/dist/vanta.net.min";

export default function Page() {
  const audioRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const effect = VANTA({
      el: bgRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xffffff,
      backgroundColor: 0x000000,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

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
    <div
      ref={bgRef}
      className="flex flex-col items-center justify-center min-h-screen text-white p-8 font-sans space-y-8 text-center"
    >
      <h1 className="text-5xl sm:text-6xl font-bold text-yellow-400 drop-shadow">
        🎉 Happy Father's Day! 🎉
      </h1>
      <p className="text-lg sm:text-xl text-gray-200 max-w-md">
        We love you so much, you're the best dad ever...
        <br />
        And we pray for more of God's love and protection.
      </p>

      <button
        onClick={shootConfettiAndPlay}
        className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white text-lg font-bold shadow-lg transition duration-300"
      >
        ❤️ Love, The StarBoys
      </button>

      <audio ref={audioRef} src="/birthday.mp3" preload="auto" />
    </div>
  );
}
