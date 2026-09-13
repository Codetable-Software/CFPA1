import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, type ComponentType } from 'react';
import {
  VideoCanvas,
  type VideoAspectRatio,
  VideoPausedContext,
  useVideoPlayer,
} from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { Scene6 } from './video_scenes/Scene6';
import { Scene7 } from './video_scenes/Scene7';
import { Scene8 } from './video_scenes/Scene8';
import { Scene9 } from './video_scenes/Scene9';

export const SCENE_DURATIONS = {
  reveal: 6500,
  form: 7000,
  camera: 7500,
  performance: 6500,
  display: 6500,
  power: 6500,
  neural: 6500,
  desktop: 5500,
  variants: 7500,
};

const VIDEO_ASPECT_RATIO: VideoAspectRatio = '16:9';

const SCENE_COMPONENTS: Record<string, ComponentType> = {
  reveal: Scene1,
  form: Scene2,
  camera: Scene3,
  performance: Scene4,
  display: Scene5,
  power: Scene6,
  neural: Scene7,
  desktop: Scene8,
  variants: Scene9,
};

interface VideoTemplateProps {
  durations?: Record<string, number>;
  loop?: boolean;
  paused?: boolean;
  onSceneChange?: (sceneKey: string) => void;
}

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  paused = false,
  onSceneChange,
}: VideoTemplateProps = {}) {
  const { currentSceneKey } = useVideoPlayer({ durations, loop, paused });
  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '');
  const sceneIndex = Math.max(
    0,
    Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey),
  );
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const palettes = [
    ['#071011', '#11181a', '#c9a16d'],
    ['#0b1113', '#1b2425', '#c9a16d'],
    ['#081316', '#102026', '#b8d38d'],
    ['#0c1513', '#1a2820', '#b8d38d'],
    ['#0b1114', '#151b24', '#c9a16d'],
    ['#11110e', '#242017', '#c9a16d'],
    ['#0b130e', '#142017', '#b8d38d'],
    ['#0a1113', '#172024', '#c9a16d'],
    ['#071011', '#11181a', '#c9a16d'],
  ];
  const [background, midground, accent] = palettes[sceneIndex] ?? palettes[0];

  return (
    <VideoPausedContext.Provider value={paused}>
      <VideoCanvas
        aspectRatio={VIDEO_ASPECT_RATIO}
        className="video-root"
        style={{
          background: `radial-gradient(circle at 68% 42%, ${midground} 0%, ${background} 66%)`,
        }}
      >
      <motion.div
        className="pointer-events-none absolute -right-[18vmin] -top-[26vmin] z-0 h-[74vmin] w-[74vmin] rounded-full border"
        animate={{
          x: sceneIndex % 3 === 0 ? '-5vmin' : sceneIndex % 3 === 1 ? '9vmin' : '-2vmin',
          y: sceneIndex % 2 === 0 ? '3vmin' : '11vmin',
          rotate: sceneIndex * 18,
          borderColor: `${accent}55`,
          opacity: sceneIndex === 0 ? 0.3 : 0.55,
        }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[-21vmin] left-[-12vmin] z-0 h-[62vmin] w-[62vmin] rounded-full border"
        animate={{
          x: sceneIndex % 2 === 0 ? '2vmin' : '-10vmin',
          rotate: -sceneIndex * 25,
          borderColor: `${accent}2e`,
        }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="pointer-events-none absolute left-[6.5vmin] top-[4.2vmin] z-30"
        animate={{ opacity: sceneIndex === 0 ? 0.8 : 0.56 }}
        transition={{ duration: 0.5 }}
      >
        <div className="display-face text-[1.65vmin] font-semibold tracking-[-0.04em] text-[var(--color-text-primary)]">
          CODETABLE<span className="text-[var(--color-accent)]"> / 1</span>
        </div>
        <div className="mono-face mt-[0.4vmin] text-[0.9vmin] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          engineered for more
        </div>
      </motion.div>
      <div className="pointer-events-none absolute bottom-[4.2vmin] left-[6.5vmin] z-30 flex items-center gap-[1.3vmin]">
        <div className="h-[1px] w-[3.5vmin] bg-[var(--color-accent)]" />
        <motion.span
          className="mono-face text-[1.05vmin] text-[var(--color-text-muted)]"
          animate={{ color: accent }}
          transition={{ duration: 0.8 }}
        >
          {String(sceneIndex + 1).padStart(2, '0')} / 09
        </motion.span>
      </div>
      <AnimatePresence mode="sync" initial={false}>
        {SceneComponent ? <SceneComponent key={currentSceneKey} /> : null}
      </AnimatePresence>
      </VideoCanvas>
    </VideoPausedContext.Provider>
  );
}
