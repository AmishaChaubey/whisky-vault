import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Top Whisky Trends of 2025",
    author: "Aarav Mehta",
    image: "/home-blog/b1.jpg",
    profilePic: "/profile-img/a.jpeg",
    text: "From small-batch distilleries to bold barrel finishes — explore the whisky trends shaping 2025 and redefining the drinking experience.",
  },
  {
    title: "How to Pair Whisky with Food Like a Pro",
    author: "Simran Khanna",
    image: "/home-blog/b2.jpg",
    profilePic: "/profile-img/s.jpeg",
    text: "Discover the art of pairing whisky with the perfect meal — from smoky single malts with steak to fruity blends with desserts.",
  },
  {
    title: "Whisky Tasting 101: Master the Basics",
    author: "Rohit Kapoor",
    image: "/home-blog/b3.jpg",
    profilePic: "/profile-img/r1.jpeg",
    text: "Learn how to swirl, sniff, and sip whisky like an expert. This beginner's guide walks you through tasting notes, aroma, and flavor profiles.",
  },
  {
    title: "Inside the World of Craft Distilleries",
    author: "Rekha Sinha",
    image: "/home-blog/b4.jpg",
    profilePic: "/profile-img/r2.jpeg",
    text: "Craft distilleries are changing the whisky landscape. Explore how artisanal makers are creating bold and authentic flavors worldwide.",
  },
  {
    title: "The Rise of Indian Single Malts",
    author: "Gaurav Singh",
    image: "/home-blog/b5.jpg",
    profilePic: "/profile-img/g.jpeg",
    text: "India is making waves in the global whisky scene. Discover how Indian single malts are earning international recognition and awards.",
  },
];

const WhiskyBlog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardHeight = 96;

  // Create a much larger array for seamless infinite loop
  const loopBlogs = Array(20).fill(blogs).flat();

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // When we reach near the end, silently reset to the beginning
        if (prev >= loopBlogs.length - blogs.length) {
          return prev + 1 - blogs.length;
        }
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  return (
    <section
      className="py-16 px-6 overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto text-center xl:mt-20">
        {/* Header */}
        <h2
          className="text-4xl md:text-5xl font-bold font-serif mb-4 "
          style={{ color: "#040472" }}
        >
          Whisky Insights & Stories
        </h2>
        <p className="text-lg mb-10" style={{ color: "#404072" }}>
          Explore whisky trends, tasting tips, and distillery tales from around
          the world
        </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[0.50fr_1fr] gap-15 items-start">
          {/* Left: Scrollable Blog List */}
          <div
            className="flex flex-col gap-4 overflow-hidden order-2 px-4 md:order-1 w-full"
            style={{ height: "300px" }}
          >
            <motion.div
              animate={{ y: -currentIndex * cardHeight }}
              transition={{ type: "tween", duration: 0.6 }}
              className="flex flex-col gap-3 w-full"
            >
              {loopBlogs.map((b, i) => {
                const active = i % blogs.length === currentIndex % blogs.length;
                return (
                  <div
                    key={i}
                    onClick={() => handleClick(i % blogs.length)}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all shadow-md w-full ${
                      active
                        ? "bg-white shadow-lg scale-105"
                        : "bg-white/80 hover:bg-white"
                    }`}
                    style={{
                      height: "88px",
                      minWidth: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <div className="min-w-0 text-left flex-1">
                      <h4
                        className="font-semibold truncate text-base"
                        style={{ color: "#404072" }}
                      >
                        {b.title}
                      </h4>
                      <p
                        className="text-sm truncate"
                        style={{ color: "#40407290" }}
                      >
                        {b.author}
                      </p>
                    </div>

                    <img
                      src={b.profilePic || b.image}
                      className="w-12 h-12 rounded-full object-cover ml-3 flex-shrink-0"
                      alt={b.author}
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Main Blog Card */}
          <div className="relative order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={blogs[currentIndex % blogs.length].title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{
                  type: "tween",
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="bg-white rounded-2xl shadow-2xl p-0 overflow-hidden w-full max-w-[780px] mx-auto"
                style={{ height: "300px" }}
              >
                <div className="grid grid-cols-2 h-full">
                  <img
                    src={blogs[currentIndex % blogs.length].image}
                    className="w-full h-full object-cover"
                    alt="blog"
                  />
                  <div className="p-5 flex flex-col justify-center">
                    <div>
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: "#404072" }}
                      >
                        {blogs[currentIndex % blogs.length].title}
                      </h3>

                      <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                        {blogs[currentIndex % blogs.length].text}
                      </p>
                    </div>
                    <Link to='/blog'>

                    <button
                      className="mt-3 px-4 py-2 rounded-lg text-white text-sm shadow hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#404072" }}
                    >
                      Read More →
                    </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {blogs.map((_, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex % blogs.length === i ? "w-6" : "hover:bg-gray-300"
              }`}
              style={{
                backgroundColor:
                  currentIndex % blogs.length === i
                    ? "#404072"
                    : "#d1d5db",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiskyBlog;