'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Music,
  SkipForward,
  SkipBack,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface Track {
  id: number;
  title: string;
  artist: string;
  src: string;
  duration: number;
}

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState([0.7]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [autoPlayAttempted, setAutoPlayAttempted] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  // Sample playlist - in a real app, these would be actual audio files
  const playlist: Track[] = [
    {
      id: 1,
      title: 'Kungfu Fighting',
      artist: 'Jack Black',
      src: '/musics/kungfu-fighting.mp3', // This would be a real audio file
      duration: 180,
    },
    {
      id: 2,
      title: 'Welcome to the Jungle',
      artist: 'Motivational Sounds',
      src: '/musics/welcome-to-the-jungle.mp3', // This would be a real audio file
      duration: 270,
    },
  ];

  const currentTrack = playlist[currentTrackIndex];

  // Auto-play functionality
  useEffect(() => {
    const attemptAutoPlay = async () => {
      if (!autoPlayAttempted && audioRef.current) {
        setAutoPlayAttempted(true);
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setHasUserInteracted(true);
        } catch {
          console.log(
            'Auto-play blocked by browser, waiting for user interaction'
          );
          // Auto-play was blocked, we'll wait for user interaction
        }
      }
    };

    // Attempt auto-play after a short delay to ensure audio is loaded
    const timer = setTimeout(attemptAutoPlay, 1000);
    return () => clearTimeout(timer);
  }, [autoPlayAttempted]);

  // Handle user interaction to enable auto-play
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasUserInteracted) {
        setHasUserInteracted(true);
        // Try to start playing if we haven't started yet
        if (!isPlaying && audioRef.current) {
          audioRef.current
            .play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // Still blocked, user needs to manually start
            });
        }
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [hasUserInteracted, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      // Auto-play next track for infinite playback
      nextTrack();
    };
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleError = () => {
      setIsLoading(false);
      console.error('Audio loading error');
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = isMuted ? 0 : volume[0];
  }, [volume, isMuted]);

  const togglePlay = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the parent button
    const audio = audioRef.current;
    if (!audio) return;

    setHasUserInteracted(true);

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    if (isMuted && newVolume[0] > 0) {
      setIsMuted(false);
    }
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);
    setCurrentTime(0);

    // Continue playing the next track for infinite playback
    if (isPlaying || hasUserInteracted) {
      setTimeout(() => {
        audioRef.current
          ?.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(console.error);
      }, 100);
    }
  };

  const previousTrack = () => {
    const prevIndex =
      currentTrackIndex === 0 ? playlist.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prevIndex);
    setCurrentTime(0);

    // Continue playing the previous track
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current
          ?.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(console.error);
      }, 100);
    }
  };

  const handleSeek = (newTime: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = newTime[0];
    setCurrentTime(newTime[0]);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="metadata"
        loop={false} // We handle looping manually for infinite playback
      />

      {/* Floating Music Player */}
      <motion.div
        className="fixed bottom-30 left-0 right-0 z-50 sm:bottom-6 sm:right-6 flex flex-col items-end px-2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="mb-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-100 p-3 sm:p-4 w-full max-w-80 sm:w-80"
            >
              {/* Track Info - Responsive */}
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#6A00FF] to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Music className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 truncate text-sm sm:text-base">
                    {currentTrack.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">
                    {currentTrack.artist}
                  </p>
                </div>
                {/* Track indicator */}
                <div className="text-xs text-gray-500 flex-shrink-0">
                  {currentTrackIndex + 1}/{playlist.length}
                </div>
              </div>

              {/* Progress Bar - Responsive */}
              <div className="mb-3 sm:mb-4">
                <Slider
                  value={[currentTime]}
                  max={duration || 100}
                  step={1}
                  onValueChange={handleSeek}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls - Responsive */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={previousTrack}
                    className="h-7 w-7 sm:h-8 sm:w-8 p-0 hover:bg-purple-100"
                  >
                    <SkipBack className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={togglePlay}
                    disabled={isLoading}
                    className="h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-purple-100"
                  >
                    {isLoading ? (
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[#6A00FF] border-t-transparent rounded-full animate-spin" />
                    ) : isPlaying ? (
                      <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextTrack}
                    className="h-7 w-7 sm:h-8 sm:w-8 p-0 hover:bg-purple-100"
                  >
                    <SkipForward className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>

                {/* Volume Control - Responsive */}
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMute}
                    className="h-7 w-7 sm:h-8 sm:w-8 p-0 hover:bg-purple-100"
                  >
                    {isMuted ? (
                      <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                      <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                  </Button>
                  <div className="w-12 sm:w-16">
                    <Slider
                      value={volume}
                      max={1}
                      step={0.1}
                      onValueChange={handleVolumeChange}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Playlist indicator - Responsive */}
              <div className="flex justify-center mt-2 sm:mt-3 space-x-1">
                {playlist.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTrackIndex(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                      index === currentTrackIndex
                        ? 'bg-[#6A00FF]'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play indicator */}
              {!hasUserInteracted && (
                <div className="mt-2 text-center">
                  <p className="text-xs text-gray-500">
                    🎵 Musik akan dimulai otomatis
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Button - Responsive */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative size-14 sm:size-16 bg-gradient-to-br from-[#6A00FF] to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mr-4 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated background pulse when playing */}
          {isPlaying && (
            <motion.div
              className="absolute inset-0 bg-[#6A00FF] rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ opacity: 0.3 }}
            />
          )}

          {/* Music icon with play/pause overlay */}
          <div className="relative">
            <Music className="size-6 sm:size-8 text-white" />
            {isPlaying && (
              <motion.div
                className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </div>

          {/* Tooltip - Hidden on mobile */}
          <div className="hidden sm:block absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {isExpanded ? 'Tutup Player' : 'Putar Musik'}
            <div className="absolute top-1/2 left-full w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-1/2" />
          </div>

          {/* Quick play/pause button when collapsed - Responsive */}
          {!isExpanded && (
            <motion.div
              onClick={togglePlay}
              className="absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 size-8 sm:size-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              {isLoading ? (
                <div className="size-3 sm:size-4 border-2 border-[#6A00FF] border-t-transparent rounded-full animate-spin" />
              ) : isPlaying ? (
                <Pause className="size-3 sm:size-4 text-[#6A00FF]" />
              ) : (
                <Play className="size-3 sm:size-4 text-[#6A00FF] ml-0.5" />
              )}
            </motion.div>
          )}

          {/* Infinite playback indicator */}
          {isPlaying && (
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-white bg-[#6A00FF] px-2 py-0.5 rounded-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              ∞
            </motion.div>
          )}
        </motion.button>
      </motion.div>
    </>
  );
}
