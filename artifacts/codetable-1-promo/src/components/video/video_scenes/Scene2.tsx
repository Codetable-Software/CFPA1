import { motion } from 'framer-motion';
import { SceneShell, ProductImage, Rule, heroImage } from './shared';

export function Scene2() {
  return (
    <SceneShell eyebrow="01 / The form" >
      <motion.div className="absolute right-[0vmin] top-[3vmin] h-[76vmin] w-[56vmin]">
        <motion.div
          className="absolute right-[4vmin] top-[4vmin] h-[54vmin] w-[54vmin] rounded-full border border-[rgba(201,161,109,.2)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />
        <ProductImage src={heroImage} className="absolute inset-0 h-full w-full" />
      </motion.div>
      <motion.h2
        className="display-face mt-[1vmin] max-w-[46vmin] text-[7.4vmin] font-semibold leading-[0.9] text-[var(--color-text-primary)]"
        initial={{ opacity: 0, x: -22 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.75 }}
      >
        Dua sisi.
        <span className="block text-[var(--color-accent)]">Satu karakter.</span>
      </motion.h2>
      <Rule />
      <motion.p
        className="mt-[2.2vmin] max-w-[35vmin] text-[2vmin] leading-[1.3] text-[var(--color-text-secondary)]"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.68, duration: 0.6 }}
      >
        Titanium frame. Ceramic back. Sasis diperkuat untuk setiap hari.
      </motion.p>
      <motion.div
        className="mono-face mt-[4vmin] text-[1.25vmin] uppercase tracking-[0.16em] text-[var(--color-text-muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        163.5 × 78.2 × 8.5 mm&nbsp;&nbsp; / &nbsp;&nbsp;225 g&nbsp;&nbsp; / &nbsp;&nbsp;IP68
      </motion.div>
    </SceneShell>
  );
}