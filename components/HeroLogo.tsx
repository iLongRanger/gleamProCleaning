"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 5,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
      }}
      className="flex justify-center mb-6"
    >
      <Image
        src="/logo-gpc.png"
        alt="Gleam Pro Cleaning logo"
        width={420} 
        height={420}
        priority
      />
    </motion.div>
  );
}
