"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { WorkSliderBtns } from "./components/WorkSliderBtns";
import type { Swiper as SwiperType } from "swiper/types";

const projects = [
  {
    num: "01",
    category: "Web Platform",
    title: "BackendIM",
    description:
      "Generate backend code using AI. Deploy and test your code with ease without switching tools.",
    stack: [{ name: "Nextjs" }, { name: "Tailwind" }, { name: "Typescript" }, { name: "Vercel" }],
    image: "/backendim.png",
    live: "https://backend.im/",
    github: "/",
  },
  {
    num: "02",
    category: "Startup Platform",
    title: "Pitch Your Startup",
    description:
      "A platform where users can pitch startup ideas, vote on projects, and with entrepreneurs in virtual competitions.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind" }, 
      { name: "Typescript" }, 
      { name: "Vercel" }
    ],

    image: "/pitchify.png",
    live: "https://pitch-startup-eight.vercel.app/",
    github: "https://github.com/Kuzan-Senpai/pitch-startup",
  },
  {
    num: "03",
    category: "Event Ticketing",
    title: "Techember Fest Ticket Generator",
    description:
      "A sleek, multi-step ticketing platform for Techember Fest ’25, allowing users to select ticket types, register, and view their personalized event tickets.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Typescript" },
      { name: "Vercel" },
    ],
    image: "/ticketgen.png",
    live: "https://ticket-generator-tawny.vercel.app/",
    github: "https://github.com/Kuzan-Senpai/ticket-generator",
  },
  {
    num: "04",
    category: "AI Text Tool",
    title: "AI Text Processor",
    description:
      "An AI-powered tool that enhances and transforms your text—perfect for writers, marketers, and developers seeking smarter content workflows.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "TypeScript" },
      { name: "Vercel" }
    ],
    image: "/AI.png",
    live: "https://ai-text-processor-nine.vercel.app/",
    github: "https://github.com/Kuzan-Senpai/AI-text-processor",
  },
  {
    num: "05",
    category: "UI/UX Design",
    title: "Kuzan Kanban Board",
    description:
      "A clean, responsive Kanban board UI for task management, featuring drag-and-drop cards, empty states, hover effects, and a consistent 5-color palette.",
    stack: [{ name: "Figma" }],
    image: "/figma.png",
    live: "https://www.figma.com/design/5XQ984xRISyn2WrEvCy6e4/Kuzan-Kanban-board?node-id=3-9&t=dz8XwAR3rgExzxyn-0",
    github: "/",
  }
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.realIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh]  flex items-center justify-center py-12 px-4 lg:px-42 lg:py-0  "
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 ">
                {project.stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent">
                    {stack.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] hover:rotate-45 transition-all duration-500 h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}

                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5   flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              className="lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-8 bottom00 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        quality={100}
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                btnStyles="bg-accent  hover:bg-accent-hover text-black text-primary text-[22px] p-1.5 rounded-full flex justify-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
