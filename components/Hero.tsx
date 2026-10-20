"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center max-w-4xl z-10"
      >
        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur text-sm text-muted">
          ✨ طراحی سریع، تمیز و مقرون‌به‌صرفه
        </div>

        <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
          هر سایتی که کسب‌وکارت
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
            لازم داره
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
          وب گرفت: از یه صفحه ساده تا یه فروشگاه کامل. بدون واسطه، با قیمت شفاف.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="px-8 py-4 rounded-xl bg-primary hover:bg-accent transition font-bold text-lg shadow-lg shadow-primary/30">
            🚀 مشاوره رایگان بگیر
          </a>
          <a href="#portfolio" className="px-8 py-4 rounded-xl border border-border bg-card/50 backdrop-blur hover:bg-card transition font-bold text-lg">
            نمونه‌کارها
          </a>
        </div>
      </motion.div>
    </section>
  );
}
