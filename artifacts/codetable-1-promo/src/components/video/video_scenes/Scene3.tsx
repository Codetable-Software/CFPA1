import { motion } from 'framer-motion';
import { SceneShell, ProductImage, SpecChip, specImage } from './shared';

export function Scene3() {
  return (
    <SceneShell eyebrow="02 / Camera system" align="right">
      <motion.div
        className="absolute left-[-11vmin] top-[5vmin] h-[67vmin] w-[92vmin] opacity-80"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.82, x: 0 }}
        transition={{ duration: 1 }}
      >
        <ProductImage src={specImage} className="h-full w-full object-cover" alt="Codetable 1 camera and specification view" />
      </motion.div>
      <motion.div
        className="absolute left-[-7vmin] top-[22vmin] h-[26vmin] w-[26vmin] rounded-full border border-[rgba(201,161,109,.55)]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
      <motion.h2
        className="display-face max-w-[43vmin] text-[7vmin] font-semibold leading-[0.9] text-[var(--color-text-primary)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.24, duration: 0.7 }}
      >
        Lihat lebih
        <span className="block text-[var(--color-accent)]">jauh.</span>
      </motion.h2>
      <motion.p
        className="mt-[2vmin] max-w-[35vmin] text-[1.9vmin] leading-[1.35] text-[var(--color-text-secondary)]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.56, duration: 0.55 }}
      >
        Sistem tiga kamera dengan detail yang tetap tajam dari dekat hingga 12× hybrid zoom.
      </motion.p>
      <div className="mt-[3.5vmin] flex gap-[3.2vmin]">
        <SpecChip label="Main" value="200 MP · 1″-class · OIS" delay={0.72} />
        <SpecChip label="Telephoto" value="200 MP · 3× OIS" delay={0.84} />
        <SpecChip label="Ultrawide" value="50 MP · 122° AF" delay={0.96} />
      </div>
      <motion.div
        className="mono-face mt-[2.2vmin] text-[1.15vmin] uppercase tracking-[0.14em] text-[var(--color-text-muted)]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.12, duration: 0.45 }}
      >
        8K 30 fps&nbsp; / &nbsp;4K 120 fps&nbsp; / &nbsp;Pro · LOG · HDR video
      </motion.div>
    </SceneShell>
  );
}