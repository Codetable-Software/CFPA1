import { motion } from 'framer-motion';
import { SceneShell, ProductImage, SpecChip, heroImage } from './shared';

export function Scene5() {
  return (
    <SceneShell eyebrow="04 / The display" align="left">
      <motion.div
        className="absolute right-[2vmin] top-[7vmin] h-[72vmin] w-[44vmin]"
        initial={{ opacity: 0, rotateY: 28, x: 35 }}
        animate={{ opacity: 1, rotateY: 0, x: 0 }}
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: 900 }}
      >
        <ProductImage src={heroImage} className="h-full w-full" alt="Codetable 1 LTPO AMOLED display" />
        <motion.div
          className="absolute left-[12%] right-[12%] top-[12%] h-[1px] bg-[var(--color-accent)]"
          animate={{ opacity: [0.2, 0.9, 0.2], scaleX: [0.5, 1, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
      </motion.div>
      <motion.h2
        className="display-face max-w-[42vmin] text-[7.1vmin] font-semibold leading-[0.9] text-[var(--color-text-primary)]"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.24, duration: 0.7 }}
      >
        Selalu
        <span className="block text-[var(--color-accent)]">mengikuti.</span>
      </motion.h2>
      <motion.p
        className="mt-[2.1vmin] max-w-[36vmin] text-[1.95vmin] leading-[1.35] text-[var(--color-text-secondary)]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.58, duration: 0.55 }}
      >
        LTPO AMOLED 6.9″ dengan refresh rate adaptif 1–240 Hz. Terang hingga 4.500 nits.
      </motion.p>
      <div className="mt-[3.5vmin] flex gap-[3.2vmin]">
        <SpecChip label="Resolusi" value="3200 × 1440" delay={0.76} />
        <SpecChip label="Touch" value="720 Hz" delay={0.88} />
        <SpecChip label="Proteksi" value="Victus 2" delay={1} />
      </div>
    </SceneShell>
  );
}