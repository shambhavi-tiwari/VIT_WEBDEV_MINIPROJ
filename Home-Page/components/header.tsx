"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  const categories = [
    { name: "Self-Development", href: "/self-development" },
    { name: "Philosophy", href: "/philosophy" },
    { name: "Novels", href: "/novels" },
    { name: "Newest Books", href: "/newest" },
    { name: "Best Of BookTown", href: "/best" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#3d251e] font-['Alegreya']">BookTown</span>
            </Link>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex flex-1 max-w-md mx-8"
          >
            <div className="relative w-full">
              <motion.div
                animate={{
                  scale: searchFocused ? 1.03 : 1,
                  boxShadow: searchFocused ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
                }}
                className="flex items-center w-full"
              >
                <input
                  type="text"
                  placeholder="Search for books..."
                  className="w-full py-2 px-4 border border-[#3d251e] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#5a3a2e]"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <button className="bg-[#3d251e] text-white p-2 rounded-r-md hover:bg-[#5a3a2e] transition-colors duration-300">
                  <Search size={20} />
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <button className="hidden md:flex items-center space-x-1 text-[#3d251e] hover:text-[#5a3a2e] transition-colors duration-300">
              <ShoppingBag size={20} />
              <span>Cart</span>
            </button>
            <button className="hidden md:flex items-center space-x-1 text-[#3d251e] hover:text-[#5a3a2e] transition-colors duration-300">
              <User size={20} />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#3d251e] hover:text-[#5a3a2e] transition-colors duration-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <motion.nav variants={navVariants} initial="hidden" animate="visible" className="hidden md:block py-2">
          <ul className="flex justify-between">
            {categories.map((category, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-center"
              >
                <Link
                  href={category.href}
                  className="block py-2 px-4 bg-[#3d251e] text-white rounded hover:bg-[#5a3a2e] transition-colors duration-300 font-['Alegreya']"
                >
                  {category.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#3d251e]"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for books..."
                    className="w-full py-2 px-4 border border-[#5a3a2e] rounded-md focus:outline-none"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#3d251e]">
                    <Search size={20} />
                  </button>
                </div>
              </div>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <Link
                      href={category.href}
                      className="block py-2 px-4 bg-[#5a3a2e] text-white rounded hover:bg-[#6b4a3e] transition-colors duration-300 font-['Alegreya']"
                    >
                      {category.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: categories.length * 0.1 }}
                  className="flex justify-between pt-4"
                >
                  <Link
                    href="/cart"
                    className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-300"
                  >
                    <ShoppingBag size={20} />
                    <span>Cart</span>
                  </Link>
                  <Link
                    href="/profile"
                    className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-300"
                  >
                    <User size={20} />
                    <span>Profile</span>
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

