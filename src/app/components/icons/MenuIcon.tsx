'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface MenuIconProps {
  open: boolean;
}

const MenuIcon: React.FC<MenuIconProps> = ({ open }) => (
  <motion.div animate={open ? 'open' : 'closed'} className="w-6 h-6">
    <motion.span
      className="block h-0.5 bg-gray-800 mb-1.5"
      variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 6 } }}
    />
    <motion.span
      className="block h-0.5 bg-gray-800"
      variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
    />
    <motion.span
      className="block h-0.5 bg-gray-800 mt-1.5"
      variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -6 } }}
    />
  </motion.div>
);

export default MenuIcon;