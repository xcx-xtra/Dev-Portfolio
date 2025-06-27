"use client";

import React from "react";
import { motion } from "framer-motion";
import Canvas3D from "./Canvas3D";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen text-center overflow-hidden"
    >
      <Canvas3D />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-2xl text-gray-300">
          Frontend Developer | 3D Enthusiast
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
