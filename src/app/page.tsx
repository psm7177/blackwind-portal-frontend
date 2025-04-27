"use client";

import React, { useEffect, useState, useRef } from "react";
import { NextPage } from "next";
import { motion, useScroll, useTransform } from "framer-motion";

const HomePage: NextPage = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  const { scrollY } = useScroll({ container: scrollRef });

  const containerHeight = useTransform(scrollY, [0, 300], [`${viewportHeight}px`, "64px"]);
  const textScale      = useTransform(scrollY, [0, 300], [1, 0.6]);
  const subtextOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const textY          = useTransform(scrollY, [0, 300], ["-50%", "-30%"]);

  return (
    <div className="w-full h-full">
      {/* 고정 헤더 전체에 pointer-events-none 적용 */}
      <motion.div
        style={{ height: containerHeight }}
        className="bg-[#06192F] fixed top-0 left-0 w-full z-40 overflow-hidden pointer-events-none"
      >
        {/* 내부 텍스트에는 pointer-events-auto 제거 */}
        <motion.div
          style={{ scale: textScale, y: textY, x: "-50%", transformOrigin: "center center" }}
          className="absolute top-1/2 left-1/2 text-white text-center flex flex-col items-center"
        >
          <span className="text-[64px] font-semibold leading-none mb-3">BLACKWIND</span>
          <motion.span
            style={{ opacity: subtextOpacity }}
            className="text-[28px] font-semibold leading-tight block"
          >
            DGIST <br /> ONE AND ONLY <br /> COMPUTING CLUB
          </motion.span>
        </motion.div>
      </motion.div>

      {/* 실제 스크롤 컨테이너 */}
      <div
        ref={scrollRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
      >
        <section className="h-screen snap-start bg-white text-black p-10 pt-[64px]">
          <div>paragraph1</div>
        </section>
        <section className="h-screen snap-start bg-gray-100 text-black p-10 pt-[64px]">
          <div>paragraph2</div>
        </section>
        <section className="h-screen snap-start bg-gray-300 text-black p-10 pt-[64px]">
          <div>paragraph3</div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;