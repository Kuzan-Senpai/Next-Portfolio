"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

interface serviceProps {
  num: string;
  title: string;
  description: string;
  href: string;
}

const services: serviceProps[] = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "I build responsive, scalable, and accessible web applications using React, Next.js, TypeScript, and Tailwind CSS.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Implementation",
    description:
      "I transform Figma designs into clean, interactive user interfaces.",
    href: "",
  },
  {
    num: "03",
    title: "Performance Optimization",
    description:
      "I optimize load times, accessibility, and frontend performance using best practices and modern tooling.",
    href: "",
  },
  {
    num: "04",
    title: "Version COntrol & Collaboration",
    description:
      "I use Git and GitHub in collaborative environments to manage codebases, track progress, and streamline development.",
    href: "",
  },
];

// Motion variants for staggered left-to-right effect
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
      delayChildren: 1.5, // 2.4s delay before starting animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
  show: {
    opacity: 1,
    x: 0, // Move to normal position
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Service() {
  return (
    <section className="w-full h-full md:py-20 py-4">
      <div className="w-full flex items-center justify-center px-4 md:px-20 py-5 md:py-10 h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex items-center justify-between group cursor-pointer">
                <div className="text-5xl font-extrabold text-outline text-transparent text-outline-hover transition-all duration-500">
                  <p>{service.num}</p>
                </div>

                <div className="w-fit flex items-center justify-center p-4 bg-white rounded-full hover:-rotate-45 group-hover:bg-accent transition-all duration-500">
                  <Link href={service.href} className="">
                    <BsArrowDownRight
                      color="black"
                      className="text-xl md:text-3xl"
                    />
                  </Link>
                </div>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
