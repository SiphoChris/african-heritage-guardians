import { useEffect, useRef } from 'react';
import { PlayIcon, StopIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';

interface AudioPlayerProps {
  audioUrl: string;
}

export const AudioPlayer = ({ audioUrl }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <audio ref={audioRef} src={audioUrl} />
      <Button variant="soft" size="1" onClick={handlePlay}>
        <PlayIcon width="14" height="14" />
      </Button>
      <Button variant="soft" size="1" onClick={handleStop}>
        <StopIcon width="14" height="14" />
      </Button>
    </div>
  );
};