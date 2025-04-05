"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import BookCarousel from "@/components/book-carousel"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { BookType } from "@/lib/types"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Sample book data
  const books: BookType[] = [
    {
      id: 1,
      title: "The Silent Patient",
      description:
        "A psychological thriller about a woman's act of violence against her husband—and of the therapist obsessed with uncovering her motive.",
      oldPrice: 24.99,
      newPrice: 18.75,
      imageSrc: "/images/books/best1.jpg",
      isFavorite: false,
    },
    {
      id: 2,
      title: "Atomic Habits",
      description:
        "An easy and proven way to build good habits and break bad ones with practical strategies to transform your life.",
      oldPrice: 21.99,
      newPrice: 16.49,
      imageSrc: "/images/books/best2.jpg",
      isFavorite: false,
    },
    {
      id: 3,
      title: "The Psychology of Money",
      description: "Timeless lessons on wealth, greed, and happiness exploring how money works in real life.",
      oldPrice: 19.99,
      newPrice: 14.99,
      imageSrc: "/images/books/best3.jpg",
      isFavorite: false,
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#ecdfd1]">
      <AnimatePresence>
        {isLoaded && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Header />

            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="container mx-auto px-4 py-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                className="text-center my-16"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-[#3d251e] mb-4 font-['Alegreya']">
                  <span className="inline-block hover:scale-105 transition-transform duration-300">
                    Welcome to BookTown
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-[#5a3a2e] font-['Alegreya'] max-w-3xl mx-auto">
                  Discover your next favorite book in our carefully curated collection
                </p>
              </motion.div>

              <BookCarousel books={books} />
            </motion.main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

