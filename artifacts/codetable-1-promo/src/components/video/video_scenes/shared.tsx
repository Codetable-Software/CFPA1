import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';
import heroAsset from '@assets/file_00000000779c8230a5aba3557db1abb0_1789307245651.png';
import specAsset from '@assets/file_0000000060108211a0844a9bb9f5f091_1789307245674.png';
import boxAsset from '@assets/file_00000000c6ec82089a8696a26f1a7ef5_1789307245686.png';

export const heroImage = heroAsset;
export const specImage = specAsset;
export const boxImage = boxAsset;

export function SceneShell({
  eyebrow,
  children,
  align = 'left',
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: 'left' | 'right' | 'center';
}) {
  return (
    <motion.div
      className="absolute inset-0 z-10"
      initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
      animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
      exit={{ opacity: 0, clipPath: 'inset(0 0 0% 100%)' }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`absolute inset-[6.5vmin] flex flex-col justify-center ${
          align === 'center'
            ? 'items-center text-center'
            : align === 'right'
              ? 'items-end text-right'
              : 'items-start text-left'
        }`}
      >
        {eyebrow ? (
          <motion.div
            className="mono-face mb-[1.5vmin] text-[1.35vmin] uppercase tracking-[0.24em] text-[var(--color-accent)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.45 }}
          >
            {eyebrow}
          </motion.div>
        ) : null}
        {children}
      </div>
    </motion.div>
  );
}

export function Rule({ width = '10vmin' }: { width?: string }) {
  return (
    <motion.div
      className="h-[1px] bg-[var(--color-accent)]"
      style={{ width }}
      initial={{ scaleX: 0, transformOrigin: 'left' }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.34, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

export function SpecChip({
  label,
  value,
  delay = 0.4,
}: {
  label: string;
  value: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="border-l border-[rgba(201,161,109,.7)] pl-[1.2vmin]"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mono-face text-[1.15vmin] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
        {label}
      </div>
      <div className="mt-[0.3vmin] text-[1.65vmin] font-medium text-[var(--color-text-primary)]">
        {value}
      </div>
    </motion.div>
  );
}

export function ProductImage({
  src,
  className = '',
  style,
  alt = 'Codetable 1',
}: {
  src: string;
  className?: string;
  style?: CSSProperties;
  alt?: string;
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`pointer-events-none select-none object-contain ${className}`}
      style={style}
      initial={{ opacity: 0, scale: 0.94, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.22, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}