"use client";

import { Container } from "@/components/container";
import RoundedItem from "@/components/rounded-item";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import { getYear } from "@/lib/utils";
import { ExperienceData } from "@/types";
import Image from "next/image";
import texture from "../../public/texture-7.png";
import { useEffect } from "react";

export function Experience({ experience }: { experience: ExperienceData[] }) {
  return (
    <section className="relative flex flex-col pt-32 pb-16 z-0" id="experience">
      {/* Background */}
      <div className="absolute inset-0 -z-20 opacity-10">
        <Image src={texture} alt="texture" fill />
      </div>

      <div className="absolute left-0 top-0 w-full -z-10 h-[20rem] bg-gradient-to-b from-[var(--background)] to-transparent blur-lg"></div>
      <div className="absolute left-0 bottom-0 w-full -z-10 h-[20rem] bg-gradient-to-t from-[var(--background)] to-transparent blur-lg"></div>
      <div className="absolute left-1/2 top-1/2 w-[40rem] h-[40rem] -z-10  bg-[var(--background)] rounded-full -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
      <div className="absolute left-0 top-0 w-[20rem] h-[20rem] -z-10  bg-[var(--background)] rounded-full  blur-lg"></div>

      <Container>
        <div className="flex justify-center items-center flex-col space-y-5">
          <Title>Experience Timeline</Title>
          <Subtitle>Delve into my experiences working for companies</Subtitle>
          <Timeline experience={experience} />
        </div>
      </Container>
    </section>
  );
}

export function Timeline({ experience }: { experience: ExperienceData[] }) {
  useEffect(() => {
    const elements = document.querySelectorAll("#horizontal-line");

    elements.forEach((element) => {
      const delay = 0;

      setTimeout(() => {
        element.classList.add("before:animate-shootin-star");
      }, delay * 1000);
    });
  }, []);

  return (
    <div className="">
      <div className="flex mb-1 h-20">
        <div className="w-[350px] mr-3" />
        <div className="w-3 flex justify-center">
          <span className="w-[1px] bg-gradient-to-t from-gray-300 to-transparent" />
        </div>
      </div>
      {experience.map((item) => (
        <div className="flex" key={item.id}>
          <div className=" flex w-[350px] -mt-2 mr-3 justify-end ">
            <div className="relative glass-button py-1 h-fit mr-1">
              <p className="text-neutral-500 text-right text-sm">
                {getYear(item.dateStart!)}{" "}
                {item.dateEnd ? ` - ${getYear(item.dateEnd)}` : "- current"}
              </p>

              {/* <div
                className="absolute top-1/2 right-0 w-0 h-0 
                border-t-[10px] border-t-transparent
                border-l-[15px] border-l-neutral-200
                border-b-[10px] border-b-transparent
                translate-x-3/4 -translate-y-1/2
                "
              /> */}
            </div>
          </div>
          <div
            id="horizontal-line"
            className="relative  flex flex-col items-center mb-1 before:w-[1.5px] before:absolute 
            before:bottom-0 before:bg-gradient-to-t before:from-transparent before:to-zinc-800 before:opacity-0
            before:h-12 before:content-['']"
          >
            <span className="w-3 h-3 border-2 border-gray-300 rounded-full mb-1" />
            <span className="w-[1px] flex-1 bg-gray-300 " />
          </div>
          <ExperienceItem key={item.id} item={item} />
        </div>
      ))}
      <div className="flex -mt-1 h-20">
        <div className="w-[350px] mr-3" />
        <div className="w-3 flex justify-center">
          <span className="w-[1px] bg-gradient-to-b from-gray-300 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export function ExperienceItem({ item }: { item: ExperienceData }) {
  return (
    <div className="max-w-[500px] px-5 mb-20 rounded-lg -mt-2">
      <div className="mb-5">
        <p className="text-xl text-neutral-800 font-semibold">
          {item.companyName}
        </p>
        <p className="text-neutral-600 mb-3">{item.position}</p>
        <p className="text-neutral-500 text-sm whitespace-break-spaces">
          {item.description}
        </p>
      </div>

      <div className="flex flex-col">
        <p className="mb-3 text-sm text-neutral-500">Apps</p>
        <div className="flex flex-wrap gap-2">
          {item.projects?.map((project) => (
            <RoundedItem key={project}>{project}</RoundedItem>
          ))}
        </div>
      </div>
    </div>
  );
}
