import { motion } from 'framer-motion';
import { SceneShell, ProductImage, SpecChip, specImage } from './shared';

export function Scene8() {
  return (
    <SceneShell eyebrow="07 / One device, more ways" align="right">
      <motion.div
        className="absolute left-[-5vmin] top-[3vmin] h-[78vmin] w-[65vmin]"
        initial={{ opacity: 0, x: -25, rotate: -4 }}
        animate={{ opacity: 0.78, x: 0, rotate: 0 }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
      >
        <ProductImage src={specImage} className="h-full w-full object-cover" alt="Codetable 1 full specification sheet" />
      </motion.div>
      <motion.h2
        className="display-face max-w-[46vmin] text-[6.8vmin] font-semibold leading-[0.9] text-[var(--color-text-primary)]"
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.22, duration: 0.7 }}
      >
        Bekerja
        <span className="block text-[var(--color-accent)]">seperti desktop.</span>
      </motion.h2>
      <motion.p
        className="mt-[2vmin] max-w-[34vmin] text-[1.9vmin] leading-[1.35] text-[var(--color-text-secondary)]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.56, duration: 0.55 }}
      >
        Desktop mode, multi-window, floating window, app cloning, terminal, file manager — semua di tangan.
      </motion.p>
      <div className="mt-[3.5vmin] flex gap-[3.2vmin]">
        <SpecChip label="Konektivitas" value="5G · Wi-Fi 7" delay={0.76} />
        <SpecChip label="Audio" value="Dolby Atmos" delay={0.88} />
        <SpecChip label="Port" value="USB-C 3.2 · DP" delay={1} />
      </div>
    </SceneShell>
  );
}