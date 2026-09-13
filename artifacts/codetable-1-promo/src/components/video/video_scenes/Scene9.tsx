import { motion } from 'framer-motion';
import { SceneShell, ProductImage, Rule, heroImage } from './shared';

const tiers = [
  ['12 / 256', 'Rp 16.999.000'],
  ['16 / 512', 'Rp 19.999.000'],
  ['16 / 1 TB', 'Rp 23.999.000'],
  ['24 / 1 TB', 'Rp 27.999.000'],
];

export function Scene9() {
  return (
    <SceneShell align="left">
      <motion.div
        className="absolute right-[-7vmin] top-[-3vmin] h-[82vmin] w-[59vmin]"
        initial={{ opacity: 0, scale: 0.92, x: 25 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
      >
        <ProductImage src={heroImage} className="h-full w-full" alt="Codetable 1 black finish" />
      </motion.div>
      <motion.div
        className="mono-face mb-[1.8vmin] text-[1.25vmin] uppercase tracking-[0.22em] text-[var(--color-accent)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Tersedia mulai 2026
      </motion.div>
      <motion.h2
        className="display-face max-w-[48vmin] text-[7.6vmin] font-semibold leading-[0.84] text-[var(--color-text-primary)]"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.24, duration: 0.7 }}
      >
        Pilih
        <span className="block text-[var(--color-accent)]">ruangmu.</span>
      </motion.h2>
      <Rule />
      <div className="mt-[2.5vmin] grid w-[43vmin] grid-cols-2 gap-x-[4vmin] gap-y-[1.25vmin]">
        {tiers.map(([memory, price], index) => (
          <motion.div
            key={memory}
            className="flex items-baseline justify-between border-b border-[rgba(174,184,173,.18)] pb-[0.7vmin]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52 + index * 0.1, duration: 0.45 }}
          >
            <span className="mono-face text-[1.25vmin] text-[var(--color-text-secondary)]">{memory}</span>
            <span className="text-[1.35vmin] font-medium text-[var(--color-text-primary)]">{price}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-[2.7vmin] flex items-center gap-[1.2vmin] text-[1.55vmin] font-medium text-[var(--color-accent-2)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="h-[0.8vmin] w-[0.8vmin] rounded-full bg-[var(--color-accent-2)]" />
        Codetable 1 Ultra 24 / 1 TB · Rp 29.999.000
      </motion.div>
    </SceneShell>
  );
}