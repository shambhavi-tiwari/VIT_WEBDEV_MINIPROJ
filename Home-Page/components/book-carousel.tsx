"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, ShoppingBag } from "lucide-react"
import type { BookType } from "@/lib/types"
import { cn } from "@/lib/utils"

interface BookCarouselProps {
  books: BookType[]
}

export default function BookCarousel({ books }: BookCarouselProps) {
  const [favorites, setFavorites] = useState<number[]>([])
  const [activeBook, setActiveBook] = useState<number | null>(null)

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((bookId) => bookId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const addToCart = (title: string) => {
    // In a real app, this would add to cart state or call an API
    alert(`${title} added to cart!`)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-6 mb-16"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-3xl font-bold text-center text-[#3d251e] mb-8 font-['Alegreya']"
      >
        Bestsellers @ Books and Pages
      </motion.h2>

      <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setActiveBook(book.id)}
            onMouseLeave={() => setActiveBook(null)}
            className="flex flex-col sm:flex-row gap-6 p-4 border-b border-gray-200 last:border-b-0"
          >
            <motion.div
              className="relative flex-shrink-0 w-full sm:w-48 h-64 sm:h-72 overflow-hidden rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={book.imageSrc || `/placeholder.svg?height=300&width=200`}
                alt={book.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{
                  scale: activeBook === book.id ? 1.05 : 1,
                  filter: activeBook === book.id ? "brightness(1.05)" : "brightness(1)",
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <motion.h3
                  className="text-xl font-bold text-[#3d251e] mb-2 font-['Alegreya']"
                  whileHover={{ scale: 1.02 }}
                >
                  {book.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0.8 }}
                  animate={{
                    opacity: activeBook === book.id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {book.description}
                </motion.p>
                <div className="mb-4">
                  <p className="text-gray-500 line-through text-sm">${book.oldPrice.toFixed(2)}</p>
                  <motion.p
                    className="text-[#556B2F] font-bold text-xl"
                    animate={{
                      scale: [1, 1.05, 1],
                      transition: {
                        repeat: activeBook === book.id ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "reverse",
                        duration: 1.5,
                      },
                    }}
                  >
                    ${book.newPrice.toFixed(2)}
                  </motion.p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleFavorite(book.id)}
                  className={cn(
                    "flex items-center justify-center gap-2 px-4 py-2 rounded-md border transition-colors duration-300",
                    favorites.includes(book.id)
                      ? "bg-red-50 text-red-500 border-red-200"
                      : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-red-50 hover:text-red-500 hover:border-red-200",
                  )}
                >
                  <Heart
                    size={18}
                    className={cn("transition-all duration-300", favorites.includes(book.id) ? "fill-red-500" : "")}
                  />
                  <span>{favorites.includes(book.id) ? "Added to Favorites" : "Add to Favorites"}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(book.title)}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#556B2F] text-white hover:bg-[#4c6128] transition-colors duration-300"
                >
                  <ShoppingBag size={18} />
                  <span>Buy Now</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

