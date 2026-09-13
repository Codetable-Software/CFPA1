import { motion } from 'framer-motion';
import { SceneShell, ProductImage, SpecChip, boxImage } from './shared';

export function Scene6() {
  return (
    <SceneShell eyebrow="05 / All-day power" align="right">
      <motion.div
        className="absolute left-[-6vmin] top-[-3vmin] h-[82vmin] w-[78vmin]"
        initial={{ opacity: 0, scale: 1.14, rotate: -5 }}
        animate={{ opacity: 0.86, scale: 1, rotate: 0 }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <ProductImage src={boxImage} className="h-full w-full object-cover" alt="Codetable 1 retail box and 120 watt charger" />
      </motion.div>
      <motion.div
        className="absolute left-[27vmin] top-[22vmin] h-[24vmin] w-[24vmin] rounded-full border border-[rgba(201,161,109,.6)]"
        animate={{ scale: [0.92, 1.12, 0.92], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 2.8, repeat: Infinity }}
      />
      <motion.h2
        className="max-w-[45vmin] text-[7.2vmin] font-semibold leading-[0.88] text-[var(--color-text-primary)]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.24, duration: 0.7 }}
      >
        <span className="display-face">Baterai besar.</span>
        <span className="display-face block text-[var(--color-accent)]">Isi cepat.</span>
      </motion.h2>
      <motion.p
        className="mt-[2vmin] max-w-[34vmin] text-[1.95vmin] leading-[1.35] text-[var(--color-text-secondary)]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.58, duration: 0.55 }}
      >
        7.000 mAh silicon-carbon. 120 W wired, 50 W wireless, dan bypass charging.
      </motion.p>
      <div className="mt-[3.5vmin] flex gap-[3.2vmin]">
        <SpecChip label="Kabel" value="120 W" delay={0.76} />
        <SpecChip label="Nirkabel" value="50 W" delay={0.88} />
        <SpecChip label="Reverse" value="15 W" delay={1} />
      </div>
    </SceneShell>
  );
}