"use client";

import { Container } from "@/components/container";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import { Technology } from "@/lib/schema";
import Image from "next/image";
import { PiBrainBold } from "react-icons/pi";

export function TechStack({ technologies }: { technologies: Technology[] }) {
  const factor = Math.round(technologies.length / 3);

  const firstRow = technologies.slice(0, factor);
  const secondRow = technologies.slice(factor, factor * 2);
  const thirdRow = technologies.slice(factor * 2);

  return (
    <section className="flex py-20 sm:py-32 space-y-5 ">
      {/* <p className="text-base text-zinc-500">Main Tech Stack</p> */}

      <Container>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="glass-button self-center w-fit justify-center flex gap-2 items-center">
            <PiBrainBold size={20} />
            Technical Skills
          </p>
          <Title>Tech Stack</Title>
          <Subtitle className="mb-7">
            Essential technologies powering my coding ventures
          </Subtitle>

          {/* Large screens */}
          <div className="relative mb-7">
            <div className="flex flex-col space-y-8 max-w-[300px] md:max-w-[1000px] overflow-hidden">
              <AnimatedRow techs={firstRow} />
              <AnimatedRow techs={secondRow} />
              <AnimatedRow techs={thirdRow} />
            </div>
            <div className="absolute inset-0 bg-tech-stack" />
          </div>

          {/* Mobile screens */}

          <div className="flex justify-center items-center">
            <p className="text-zinc-500">and many others...</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Tech({ tech }: { tech: Technology }) {
  return (
    <div className="flex px-2">
      <div className="flex shrink-0 items-center justify-center px-5 py-4 border-[0.8px] border-neutral-300/50 rounded-full">
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
    </div>
  );
}

export function AnimatedRow({ techs }: { techs: Technology[] }) {
  return (
    <div className="flex flex-row" key={techs[0].name}>
      <div className="flex flex-shrink-0 animate-tech-carousel">
        {techs.map((tech) => (
          <Tech key={tech.name + "first-row"} tech={tech} />
        ))}
      </div>

      <div className="flex flex-shrink-0 animate-tech-carousel">
        {techs.map((tech) => (
          <Tech key={tech.name + "first-row"} tech={tech} />
        ))}
      </div>
    </div>
  );
}
