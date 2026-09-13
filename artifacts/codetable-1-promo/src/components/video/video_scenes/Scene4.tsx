import { motion } from 'framer-motion';
import { SceneShell, Rule, SpecChip } from './shared';

export function Scene4() {
  return (
    <SceneShell eyebrow="03 / Performance">
      <motion.div
        className="absolute right-[9vmin] top-[13vmin] h-[44vmin] w-[35vmin] rotate-[12deg] border border-[rgba(184,211,141,.3)]"
        initial={{ opacity: 0, rotate: 28, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 12, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-[2vmin] border border-[rgba(184,211,141,.15)]" />
        <motion.div
          className="absolute bottom-[4vmin] left-[4vmin] h-[1px] w-[24vmin] bg-[var(--color-accent-2)]"
          animate={{ scaleX: [0.3, 1, 0.3], transformOrigin: 'left' }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
        <span className="mono-face absolute right-[3vmin] top-[3vmin] text-[1.2vmin] text-[var(--color-accent-2)]">3 NM</span>
      </motion.div>
      <motion.h2
        className="display-face max-w-[52vmin] text-[7.2vmin] font-semibold leading-[0.88] text-[var(--color-text-primary)]"
        initial={{ opacity: 0, x: -22 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.7 }}
      >
        Tenaga yang
        <span className="block text-[var(--color-accent-2)]">tidak menunggu.</span>
      </motion.h2>
      <Rule />
      <motion.p
        className="mt-[2vmin] max-w-[38vmin] text-[1.95vmin] leading-[1.35] text-[var(--color-text-secondary)]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.62, duration: 0.55 }}
      >
        Snapdragon 8 Elite, 24 GB LPDDR5X, hingga 4.32 GHz. Vapor chamber besar menjaga ritme tetap stabil.
      </motion.p>
      <div className="mt-[3.5vmin] flex gap-[4vmin]">
        <SpecChip label="CPU" value="Oryon 8-core" delay={0.8} />
        <SpecChip label="Storage" value="1 TB UFS 4.0" delay={0.9} />
        <SpecChip label="Mode" value="Codetable Performance" delay={1} />
      </div>
    </SceneShell>
  );
}