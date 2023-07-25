"use client";

import { Container } from "@/components/container";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import Image from "next/image";
import { motion } from "framer-motion";
import { Techonologie } from "@/lib/schema";

const ANIMATION_DURATION = 45;

export function TechStack({ technologies }: { technologies: Techonologie[] }) {
  const factor = Math.round(technologies.length / 3);

  const firstRow = technologies.slice(0, factor);
  const secondRow = technologies.slice(factor, factor * 2);
  const thirdRow = technologies.slice(factor * 2);

  return (
    <section className="flex pt-32 pb-16 space-y-5">
      {/* <p className="text-base text-zinc-500">Main Tech Stack</p> */}
      <Container>
        <div className="flex flex-col justify-center items-center gap-4">
          <Title>Tech Stack</Title>
          <Subtitle className="mb-7">
            Some of the technologies I use to build my projects.
          </Subtitle>
          <div className="relative mb-7">
            <div className="flex flex-col space-y-8 max-w-[1000px] mx-auto overflow-hidden">
              <AnimatedRow techs={firstRow} />
              <AnimatedRow techs={secondRow} />
              <AnimatedRow techs={thirdRow} />
            </div>

            <div className="absolute inset-0 bg-tech-stack" />
            {/* <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-transparent to-[#eeeeee]" />
            <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-transparent to-[#eeeeee]" /> */}
          </div>
          <div className="flex justify-center items-center">
            <p className="text-zinc-500">and many others...</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Tech({ tech }: { tech: Techonologie }) {
  return (
    <div className="flex shrink-0 items-center justify-center px-5 py-4 border-[1px] border-neutral-300 rounded-full">
      <div className="mr-5">
        <Image
          src={tech.logo}
          alt={tech.name}
          width={tech.width ?? 30}
          height={tech.height ?? 30}
        />
      </div>
      <div>
        <h3 className="">{tech.name}</h3>
      </div>
    </div>
  );
}

export function AnimatedRow({ techs }: { techs: Techonologie[] }) {
  return (
    <div className="flex" key={techs[0].name}>
      <motion.div
        className="flex flex-shrink-0 gap-x-5 pr-5"
        initial={{
          x: 0,
        }}
        animate={{
          x: "-100%",
        }}
        transition={{
          duration: ANIMATION_DURATION,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {techs.map((tech) => (
          <Tech key={tech.name + "first-row"} tech={tech} />
        ))}
      </motion.div>
      <motion.div
        className="flex flex-shrink-0 gap-x-5 pr-5"
        initial={{
          x: 0,
        }}
        animate={{
          x: "-100%",
        }}
        transition={{
          duration: ANIMATION_DURATION,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {techs.map((tech) => (
          <Tech key={tech.name + "second-row"} tech={tech} />
        ))}
      </motion.div>

      <motion.div
        className="flex flex-shrink-0 gap-x-5 pr-5"
        initial={{
          x: 0,
        }}
        animate={{
          x: "-100%",
        }}
        transition={{
          duration: ANIMATION_DURATION,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {techs.map((tech) => (
          <Tech key={tech.name + "third-row"} tech={tech} />
        ))}
      </motion.div>
    </div>
  );
}
