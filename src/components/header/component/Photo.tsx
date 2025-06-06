"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Photo() {
  return (
    <div className="w-full h-full relative flex items-center justify-center  ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className=" w-full flex items-center justify-center h-full relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[290px] h-[290px] lg:w-[498px] lg:h-[498px] mix-blend-lighten soft-edge absolute"
        >
          <Image
            src="/profile.JPG"
            alt="photo.JPG"
            fill
            quality={100}
            priority
            className="soft-edge object-contain"
          />
        </motion.div>

        <motion.svg
          className="w-[320px] lg:w-[526px]  h-[320px] lg:h-[526px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
