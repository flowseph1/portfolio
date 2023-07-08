import { Container } from "@/components/container";
import RoundedItem from "@/components/rounded-item";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import Button from "@/components/ui/button";
import { generateCols } from "@/lib/utils";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section className="pt-32 pb-16" id="projects">
      <Container>
        <div className="flex justify-center items-center flex-col gap-4">
          <Title>Projects</Title>
          <Subtitle className="mb-[3rem]">
            Awsome projects I have worked on and am proud of
          </Subtitle>
          <ProjectList projects={projects} />
          <div className="flex justify-center">
            {/* <button className="glass-button">
              Discover more <span className="font-semibold">projects</span>
              <div className="absolute -inset-3 bg-white/20 border-[1px] border-white/50 rounded-full -z-10 hover:"></div>
              <div className="absolute inset-0 bg-[#eeeeee] blur -z-20"></div>
            </button> */}
          </div>
        </div>
      </Container>
    </section>
  );
}

export async function ProjectList({ projects }: { projects: Project[] }) {
  const firstCol = useMemo(() => generateCols(projects, 3, 0), [projects]);
  const secondCol = useMemo(() => generateCols(projects, 3, 1), [projects]);
  const thirdCol = useMemo(() => generateCols(projects, 3, 2), [projects]);

  const matrix = [firstCol, secondCol, thirdCol];

  return (
    <div className="relative flex gap-5 h-[40rem] overflow-hidden mb-10 bg-project-background">
      {matrix.map((col) => (
        <div className="flex flex-1 flex-col space-y-5">
          {col.map((project) => (
            <ProjectItem project={project} key={project.id} />
          ))}
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-[10rem] bg-gradient-to-t from-[#eeeeee]"></div>
    </div>
  );
}

export function ProjectItem({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        className="relative flex flex-1 border border-neutral-300 group rounded-2xl h-full]
      overflow-hidden cursor-pointer hover:bg-neutral-100 transition-all duration-400 scale-[98%] hover:scale-100
     bg-project"
      >
        <div className="flex  w-full p-7 gap-5">
          <div className="flex shrink-0 items-start self-start">
            <Image
              src={project.image}
              alt={project.name}
              width={35}
              height={35}
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex space-x-2 mb-2 items-baseline">
              <h5 className="text-xl font-semibold text-neutral-900">
                {project.name}
              </h5>
            </div>
            <p className="text-sm mb-7 text-neutral-600">
              {project.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((tech) => (
                <RoundedItem>{tech}</RoundedItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
