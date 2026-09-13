import { motion } from 'framer-motion';
import { SceneShell, Rule } from './shared';

export function Scene1() {
  return (
    <SceneShell align="center">
      <motion.div
        className="mono-face mb-[2vmin] text-[1.4vmin] uppercase tracking-[0.32em] text-[var(--color-text-secondary)]"
        initial={{ opacity: 0, letterSpacing: '0.5em' }}
        animate={{ opacity: 1, letterSpacing: '0.32em' }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Codetable Software · 2026
      </motion.div>
      <motion.h1
        className="display-face text-[13vmin] font-semibold leading-[0.78] text-[var(--color-text-primary)]"
        initial={{ opacity: 0, scale: 1.2, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
      >
        Codetable
        <span className="block text-[var(--color-accent)]">1</span>
      </motion.h1>
      <Rule width="18vmin" />
      <motion.p
        className="mt-[2.1vmin] text-[2.05vmin] font-medium tracking-[0.08em] text-[var(--color-text-secondary)]"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.72, duration: 0.6 }}
      >
        Beyond Possibilities
      </motion.p>
      <motion.p
        className="mono-face mt-[4.5vmin] text-[1.25vmin] uppercase tracking-[0.2em] text-[var(--color-text-muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.6 }}
      >
        Flagship smartphone · Android 17 · Codetable UI 1
      </motion.p>
    </SceneShell>
  );
}