"use client";

import { Container } from "@/components/container";
import RoundedItem from "@/components/rounded-item";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import { generateCols } from "@/lib/utils";
import { ProjectData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";

export function Projects({ projects }: { projects: ProjectData[] }) {
  return (
    <section className="p-32" id="projects">
      <Container>
        <div className="flex justify-center items-center flex-col gap-4">
          <p className="glass-button self-center w-fit justify-center flex gap-2 items-center">
            <FaLaptopCode size={20} />
            Projects
          </p>
          <Title>Code Creations</Title>
          <Subtitle className="mb-[3rem]">
            Behold the tangible outcomes of my coding creations, where
            creativity meets functionality in the realm of front-end
            development.
          </Subtitle>
          <ProjectList projects={projects} />
          <div className="flex w-full mt-5 items-center gap-4">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-neutral-200/60"></div>
            <Link href={"https://github.com/flowseph1"} target="_blank">
              <button className="glass-button hover:shadow-md transition-all flex gap-2">
                Discover more at
                <p className="flex gap-1 items-center">
                  <AiFillGithub />{" "}
                  <span className="font-semibold">flowseph1</span>
                </p>
                {/* <div className="absolute -inset-3 bg-white/20 border-[1px] border-white/50 rounded-full -z-10 hover:"></div> */}
              </button>
            </Link>
            <div className="flex-1 h-[1px] bg-gradient-to-r to-transparent from-neutral-200/60"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProjectList({ projects }: { projects: ProjectData[] }) {
  const firstCol = useMemo(() => generateCols(projects, 3, 0), [projects]);
  const secondCol = useMemo(() => generateCols(projects, 3, 1), [projects]);
  const thirdCol = useMemo(() => generateCols(projects, 3, 2), [projects]);

  const matrix = [firstCol, secondCol, thirdCol];

  return (
    <div className="relative flex gap-5 h-[45rem] overflow-hidden mb-10 bg-project-background max-w-6xl ">
      {matrix.map((col, index) => (
        <div className="flex flex-1 flex-col gap-5" key={index}>
          {col.map((project) => (
            <ProjectItem project={project} key={project.id} />
          ))}
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-[10rem] bg-gradient-to-t from-[var(--background)]"></div>
    </div>
  );
}

export function ProjectItem({ project }: { project: ProjectData }) {
  const href = useMemo(() => {
    if (project.link) {
      return project.link;
    }

    let userAgent = window.navigator.userAgent.toLowerCase(),
      macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i,
      windowsPlatforms = /(win32|win64|windows|wince)/i,
      iosPlatforms = /(iphone|ipad|ipod)/i,
      os = null;

    if (macosPlatforms.test(userAgent)) {
      return project.appStoreURL;
    } else if (iosPlatforms.test(userAgent)) {
      return project.appStoreURL;
    } else if (windowsPlatforms.test(userAgent)) {
      return project.playStoreURL;
    } else if (/android/.test(userAgent)) {
      return project.playStoreURL;
    } else if (!os && /linux/.test(userAgent)) {
      return project.playStoreURL;
    }

    return "";
  }, [project]);

  return (
    <Link href={href ?? ""} scroll={false} target="_blank">
      <div
        className="relative flex flex-1 border-[1px] border-neutral-200/60 group rounded-2xl h-full]
      overflow-hidden cursor-pointer hover:bg-white/80 transition-all duration-400 shadow-sm
     bg-project "
      >
        <div className="flex  w-full p-7 gap-5">
          <div className="flex shrink-0 items-start self-start relative">
            <Image
              src={project.image}
              alt={project.name}
              width={25}
              height={25}
              className="rounded-md"
            />

            <div className="absolute -inset-1 bg-white -z-10"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex space-x-2 mb-2 items-baseline">
              <h5 className="text-lg font-semibold text-neutral-600">
                {project.name}
              </h5>
            </div>
            <p className="text-sm mb-7 text-neutral-500 font-light">
              {project.short_description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.technologies.map((tech) => (
                <RoundedItem key={tech}>{tech}</RoundedItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
