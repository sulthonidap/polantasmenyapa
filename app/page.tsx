"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Youtube,
  Camera,
  Shield,
  FileSpreadsheet,
  ArrowRight,
  Sun,
  Moon,
} from "lucide-react";
import { motion } from "framer-motion";
import { link } from "node:fs";

export default function Home() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <main className={`min-h-screen ${theme === 'dark' ? 'bg-[#242581]' : 'bg-blue-50'}`}>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`relative ${theme === 'dark' ? 'bg-[#242581]' : 'bg-blue-50'} overflow-hidden`}
      >
        <div className="container mx-auto px-12 py-4">
          {/* Theme Toggle Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6 text-yellow-300" />
              ) : (
                <Moon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={theme === 'dark' ? '/logo-atas2.png' : '/logo-atas.png'}
              alt="Polantas Menyapa Logo"
              className="mx-auto mt-12 mb-8 w-48 md:w-64 lg:w-auto"
            />
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`text-sm md:text-4xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              } mb-6`}
            >
              Selamat Datang di Polantas Menyapa!
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className={`text-md ${
                theme === 'dark' ? 'text-blue-100' : 'text-gray-700'
              } max-w-3xl mx-auto mb-2`}
            >
              Mudik 2025 semakin dekat! Pastikan perjalanan Anda lebih aman,
              nyaman, dan lancar dengan informasi terkini.
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className={`text-md font-bold ${
                theme === 'dark' ? 'text-blue-100' : 'text-gray-700'
              } max-w-3xl mx-auto`}
            >
              Pilih Kanal informasi mudik yang anda butuhkan : 
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Grid Section */}
      <section className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Polantas Menyapa By Travoy",
              delay: 0.2,
              img: "/image1.png",
              link: 'https://play.google.com/store/apps/details?id=com.jm.travoy&pcampaignid=web_share'
            },
            {
              title: "Pantauan CCTV Live",
              delay: 0.4,
              img: "/image2.png",
              link: ''
            },
            {
              title: "Rekayasa dan Jalur Alternatif",
              delay: 0.6,
              img: "/image3.png",
              link: ''
            },
            {
              title: "Rekayasa dan Jalur Alternatif",
              delay: 0.8,
              img: "/image4.png",
              link: 'https://www.youtube.com/results?search_query=mudik+2025'
            },
            {
              title: "Rest Area, SPBU dan Bengkel terdekat",
              delay: 0.6,
              img: "/image5.png",
              link: 'https://binamarga.pu.go.id/contents/cctv_mudik#cctv'
            },
            {
              title: "Daftar Pos PAM dan Pos YAN",
              delay: 0.6,
              img: "/image6.png",
              link: 'https://www.google.com/maps/search/rest+area+terdekat/@-6.2490606,106.8576529,7504m/data=!3m1!1e3!4m3!2m2!5m1!10e2?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D'
            },
            {
              title: "Kontak Darurat 110",
              delay: 0.6,
              img: "/image7.png",
              link: ''
            },
            {
              title: "Live Streaming Info Lalin",
              delay: 0.6,
              img: "/image8.png",
              link: 'https://twitter.com/intent/tweet?text=Lapor%20mudik%202025%20@NTMCLantasPolri%20@DivHumas_Polri'
            },
            
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className={`${
                theme === 'dark' ? 'bg-none' : 'bg-white'
              } rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col items-center justify-center`}
            >
              <div className="flex gap-2 items-center justify-center text-center">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    src={item.img} 
                    alt="Logo" 
                    className="transform transition-transform duration-300 hover:scale-110" 
                  />
                </a>
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
        className="container mx-auto px-4 py-2"
      >
        <div className="grid grid-cols-1 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={`rounded-xl  transition-all duration-300 cursor-pointer hover:-translate-y-1`}
          >
            <div className="flex gap-2 items-center justify-center text-center">
              <img 
                src={"/image9.png"} 
                alt="Logo" 
                className="transform transition-transform duration-300 hover:scale-110 w-1/2 " 
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
