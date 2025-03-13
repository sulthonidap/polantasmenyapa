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
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { link } from "node:fs";

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const [showModal, setShowModal] = useState(true);

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
      {/* Welcome Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`${theme === 'dark' ? 'bg-[#242581]' : 'bg-white'} rounded-xl p-6 max-w-md w-full relative`}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Halo Sobat Mudik!
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}`}>
              Pastikan perjalanan Anda aman dan nyaman dengan beberapa persiapan penting berikut:
            </p>
            <ul className={`list-none space-y-2 mb-4 ${theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}`}>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                SIM & STNK yang masih berlaku
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                Siapkan saldo e-Toll yang cukup
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                Cek kondisi kendaraan
              </li>
            </ul>
            <div className={`mb-4 ${theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}`}>
              <p className="font-bold text-center">Untuk keadaan darurat hubungi:</p>
              <p className="text-center">Contact Center 110 atau</p>
              <p className="text-center">Posko Mudik terdekat</p>
            </div>
            <p className={`text-center ${theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}`}>
              Semoga perjalanan lancar dan selamat sampai tujuan! #MudikAmanNyaman
            </p>
          </motion.div>
        </div>
      )}
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
              className="mx-auto mt-12 mb-8 w-48 md:w-48 lg:w-48"
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
              className={`text-sm ${
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
        <div className="grid grid-cols-2 
        md:grid-cols-3 lg:grid-cols-3 gap-2 
        md:gap-3 justify-items-center place-items-center max-w-2xl 
        md:w-[980px] 
        mx-auto">
          {[
            {
              title: "Polantas Menyapa By Travoy",
              delay: 0.2,
              img: "/big-1.png",
              link: 'https://play.google.com/store/apps/details?id=com.jm.travoy&pcampaignid=web_share'
            },
            {
              title: "Pantauan CCTV Live",
              delay: 0.4,
              img: "/big-2.png",
              link: ''
            },
            {
              title: "Rekayasa dan Jalur Alternatif",
              delay: 0.6,
              img: "/big-3.png",
              link: ''
            },
            {
              title: "Rekayasa dan Jalur Alternatif",
              delay: 0.8,
              img: "/big-4.png",
              link: 'https://www.youtube.com/results?search_query=mudik+2025'
            },
            {
              title: "Rest Area, SPBU dan Bengkel terdekat",
              delay: 0.6,
              img: "/big-5.png",
              link: 'https://binamarga.pu.go.id/contents/cctv_mudik#cctv'
            },
            {
              title: "Daftar Pos PAM dan Pos YAN",
              delay: 0.6,
              img: "/big-6.png",
              link: 'https://www.google.com/maps/search/rest+area+terdekat/@-6.2490606,106.8576529,7504m/data=!3m1!1e3!4m3!2m2!5m1!10e2?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D'
            },
            {
              title: "Kontak Darurat 110",
              delay: 0.6,
              img: "/big-7.png",
              link: 'tel:110'
            },
            {
              title: "Live Streaming Info Lalin",
              delay: 0.6,
              img: "/big-8.png",
              link: 'https://twitter.com/intent/tweet?text=Lapor%20mudik%202025%20@NTMCLantasPolri%20@DivHumas_Polri'
            },
            {
              title: "Live Streaming Info Lalin",
              delay: 0.6,
              img: "/big-9.png",
              link: ''
            },
            
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className={`${
                theme === 'dark' ? 'bg-none' : 'bg-white'
              } rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col items-center justify-center w-full max-w-[250px]`}
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
    </main>
  );
}
