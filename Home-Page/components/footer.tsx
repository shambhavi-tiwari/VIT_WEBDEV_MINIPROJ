"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#ecdfd1] pt-16 pb-8 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-[#3d251e] mb-4 font-['Alegreya']">BookTown</h3>
            <p className="text-[#5a3a2e] mb-4">
              Your destination for the best books across all genres. Discover, read, and share your favorites.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#3d251e] hover:text-[#5a3a2e] transition-colors duration-300"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#3d251e] hover:text-[#5a3a2e] transition-colors duration-300"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#3d251e] hover:text-[#5a3a2e] transition-colors duration-300"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#3d251e] hover:text-[#5a3a2e] transition-colors duration-300"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-xl font-bold text-[#3d251e] mb-4 font-['Alegreya']">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/self-development"
                  className="text-[#5a3a2e] hover:text-[#3d251e] transition-colors duration-300"
                >
                  Self-Development
                </Link>
              </li>
              <li>
                <Link href="/philosophy" className="text-[#5a3a2e] hover:text-[#3d251e] transition-colors duration-300">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="/novels" className="text-[#5a3a2e] hover:text-[#3d251e] transition-colors duration-300">
                  Novels
                </Link>
              </li>
              <li>
                <Link href="/newest" className="text-[#5a3a2e] hover:text-[#3d251e] transition-colors duration-300">
                  Newest Books
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-xl font-bold text-[#3d251e] mb-4 font-['Alegreya']">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#5a3a2e] hover:text-[#3d251e] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#5a3a2e] hover:text-[#3d251e] transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#5a3a2e] hover:text-[#3d251e] transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#5a3a2e] hover:text-[#3d251e] transition-colors duration-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-xl font-bold text-[#3d251e] mb-4 font-['Alegreya']">Newsletter</h3>
            <p className="text-[#5a3a2e] mb-4">Subscribe to our newsletter for the latest updates and promotions.</p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-[#3d251e] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a3a2e]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-[#3d251e] text-white rounded-md hover:bg-[#5a3a2e] transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="border-t border-[#5a3a2e] mt-12 pt-8 text-center text-[#3d251e]">
          <p>© {new Date().getFullYear()} BookTown. All rights reserved.</p>
        </motion.div>
      </div>

      {/* Animated elements in footer background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: "100vw" }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "linear",
          }}
          className="absolute bottom-10 left-0"
        >
          <div className="w-20 h-10 bg-[#3d251e] opacity-10 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ x: -50 }}
          animate={{ x: "100vw" }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "linear",
            delay: 2,
          }}
          className="absolute bottom-20 left-0"
        >
          <div className="w-12 h-6 bg-[#5a3a2e] opacity-10 rounded-full"></div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

