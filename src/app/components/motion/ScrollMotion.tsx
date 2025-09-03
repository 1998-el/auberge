'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollMotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollMotion({ children, className, delay = 0 }: ScrollMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}