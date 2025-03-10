"use client";

import { useEffect } from "react";
import {
  MapPin,
  Phone,
  Youtube,
  Camera,
  Shield,
  FileSpreadsheet,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#242581]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#242581] overflow-hidden"
      >
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 2px, transparent 0)',
            backgroundSize: '40px 40px'
          }}>
          </div>
        </div> */}

        <div className="container mx-auto px-12 py-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="/logo-kor.png"
              alt="Polantas Menyapa Logo"
              className="mx-auto h-32 mb-8"
            />
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-md md:text-6xl font-bold text-white mb-6"
            >
              Selamat Datang di Polantas Menyapa
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-md text-blue-100 max-w-3xl mx-auto mb-2"
            >
              Mudik 2025 semakin dekat! Pastikan perjalanan Anda lebih aman,
              nyaman, dan lancar dengan informasi terkini.
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-md text-blue-100 max-w-3xl mx-auto"
            >
              Pilih Kanal informasi mudik yang anda butuhkan.
            </motion.p>
          </div>
        </div>

        {/* Wave Shape Divider */}
      </motion.section>

      {/* Grid Section */}
      <section className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Polantas Menyapa By Travoy",
              // icon: <MapPin className="h-8 w-8" />,
              // description: "Menggunakan Aplikasi Travoy sebagai sumber informasi seputer mudik dan kondisi jalu lintas terkini.",
              delay: 0.2,
            },
            {
              title: "Pantauan CCTV Live",
              // icon: <Camera className="h-8 w-8" />,
              // description: "Sumber CCTV: Link cctv smart city dikomsel. Shortlink CCTV toll Travoy",
              delay: 0.4,
            },
            {
              title: "Rekayasa dan Jalur Alternatif",
              // icon: <FileSpreadsheet className="h-8 w-8" />,
              // description: "Peta rekayasa lalu lintas mudik dan jalur alternatif",
              delay: 0.6,
            },
            {
              title: "Rekayasa dan Jalur Alternatif",
              // icon: <FileSpreadsheet className="h-8 w-8" />,
              // description: "Peta rekayasa lalu lintas mudik dan jalur alternatif",
              delay: 0.8,
            },
            {
              title: "Rest Area, SPBU dan Bengkel terdekat",
              // icon: <FileSpreadsheet className="h-8 w-8" />,
              // description: "Peta rekayasa lalu lintas mudik dan jalur alternatif",
              delay: 0.6,
            },
            {
              title: "Daftar Pos PAM dan Pos YAN",
              // icon: <FileSpreadsheet className="h-8 w-8" />,
              // description: "Peta rekayasa lalu lintas mudik dan jalur alternatif",
              delay: 0.6,
            },
            {
              title: "Kontak Darurat 110",
              // icon: <FileSpreadsheet className="h-8 w-8" />,
              // description: "Peta rekayasa lalu lintas mudik dan jalur alternatif",
              delay: 0.6,
            },
            {
              title: "Live Streaming Info Lalin",
              // icon: <FileSpreadsheet className="h-8 w-8" />,
              // description: "Peta rekayasa lalu lintas mudik dan jalur alternatif",
              delay: 0.6,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className="border border-white bg-none rounded-xl p-4 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
                <div className="text-blue-600 mb-4 flex gap-2 items-center justify-center text-center">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Row */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <motion.div
          // key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            // delay: item.delay,
            duration: 0.5,
          }}
          className="border border-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
        >
          <div className="text-blue-600 mb-4 flex gap-2 items-center justify-center">
            <h3 className="text-xl font-semibold text-white text-center">
              Info Mudik via Whatsapp
            </h3>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
