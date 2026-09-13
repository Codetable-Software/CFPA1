import { motion } from 'framer-motion';
import { SceneShell, Rule, SpecChip } from './shared';

export function Scene7() {
  return (
    <SceneShell eyebrow="06 / Codetable Neural Engine">
      <motion.div
        className="absolute right-[12vmin] top-[10vmin] h-[50vmin] w-[50vmin] rounded-full border border-[rgba(184,211,141,.22)]"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <span className="mono-face absolute left-1/2 top-[-1vmin] -translate-x-1/2 bg-[var(--color-bg-dark)] px-[1vmin] text-[1.15vmin] text-[var(--color-accent-2)]">ON-DEVICE</span>
        <motion.div className="absolute left-1/2 top-1/2 h-[9vmin] w-[9vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(184,211,141,.13)]" animate={{ scale: [0.8, 1.25, 0.8] }} transition={{ duration: 2, repeat: Infinity }} />
      </motion.div>
      <motion.h2
        className="display-face max-w-[54vmin] text-[7.1vmin] font-semibold leading-[0.9] text-[var(--color-text-primary)]"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.7 }}
      >
        Pintar,
        <span className="block text-[var(--color-accent-2)]">tanpa mengirim.</span>
      </motion.h2>
      <Rule width="15vmin" />
      <motion.p
        className="mt-[2.1vmin] max-w-[39vmin] text-[1.95vmin] leading-[1.35] text-[var(--color-text-secondary)]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.56, duration: 0.55 }}
      >
        Neural Engine di perangkat untuk image/video processing, upscaling, terjemahan, dan voice processing.
      </motion.p>
      <div className="mt-[3.5vmin] flex gap-[4vmin]">
        <SpecChip label="Privasi" value="Hardware encryption" delay={0.74} />
        <SpecChip label="Unlock" value="Face + ultrasonic" delay={0.86} />
        <SpecChip label="Update" value="7 OS · 8 security" delay={0.98} />
      </div>
    </SceneShell>
  );
}