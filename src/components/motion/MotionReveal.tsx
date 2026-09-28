import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

interface FadeInViewProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  viewportMargin?: string;
}

export const easeEditorial: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function FadeInView({
  children,
  delay = 0,
  duration = 0.65,
  yOffset = 24,
  className = '',
  viewportMargin = '-40px',
  ...props
}: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: easeEditorial,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeEditorial,
    },
  },
};

export function StaggerContainer({
  children,
  className = '',
  viewportMargin = '-50px',
  ...props
}: HTMLMotionProps<'div'> & { children: ReactNode; viewportMargin?: string }) {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  ...props
}: HTMLMotionProps<'div'> & { children: ReactNode }) {
  return (
    <motion.div variants={staggerItemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}
