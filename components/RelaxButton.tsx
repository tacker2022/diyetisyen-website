"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX, Pause } from "lucide-react";

export default function RelaxButton() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Using a direct, reliable MP3 link from Pixabay (Forest sounds with birds)
    const AUDIO_URL = "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3";

    useEffect(() => {
        audioRef.current = new Audio(AUDIO_URL);
        audioRef.current.loop = true;
        audioRef.current.volume = 1.0;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
            <button
                onClick={togglePlay}
                className={`
                    group relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-500
                    ${isPlaying ? "bg-sage rotate-180" : "bg-white hover:bg-sage"}
                `}
                aria-label="Rahatlatıcı Müziği Aç/Kapat"
            >
                {/* Ping animation when playing */}
                {isPlaying && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-sage opacity-75 animate-ping"></span>
                )}

                {/* Icon */}
                <div className={`relative z-10 transition-colors duration-300 ${isPlaying ? "text-white" : "text-sage group-hover:text-white"}`}>
                    {isPlaying ? <Pause size={24} /> : <Music size={24} />}
                </div>
            </button>

            {/* Label - visible on hover or when playing */}
            <div className={`
                bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-sage/10
                transition-all duration-500 overflow-hidden whitespace-nowrap
                ${isPlaying ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100"}
            `}>
                <span className="text-sage font-medium text-sm flex items-center gap-2">
                    {isPlaying ? (
                        <>
                            <span className="animate-pulse">Çalıyor...</span>
                            <span className="text-xs text-charcoal/50">Forest Lullaby</span>
                        </>
                    ) : (
                        "Rahatla"
                    )}
                </span>
            </div>
        </div>
    );
}
