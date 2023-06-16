import { Container } from "@/components/container";
import RoundedItem from "@/components/rounded-item";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import Button from "@/components/ui/button";
import { Project } from "@/types";
import Image from "next/image";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col gap-4">
          <Title>Projects</Title>
          <Subtitle className="mb-[3rem]">
            Awsome projects I have worked on
          </Subtitle>
          <ProjectList projects={projects} />
          <div className="flex justify-center">
            <Button
              text="Discover more"
              intent="secondary"
              size="sm"
              rounded="full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export async function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 mb-10 max-w-[80rem] mx-auto">
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </div>
  );
}

export function ProjectItem({ project }: { project: Project }) {
  return (
    <div
      className="relative flex flex-1 border group rounded-2xl min-h-[15rem]
    overflow-hidden cursor-pointer hover:bg-neutral-100/50 transition-all duration-400 
    hover:border-neutral-400/50 shadow-sm"
    >
      <div className="flex  w-full p-7 gap-5">
        <div className="flex shrink-0 items-start">
          <Image
            src={project.image}
            alt={project.name}
            width={40}
            height={40}
            className="rounded-lg border-[1px] border-neutral-300 transition"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex space-x-2 mb-2 items-baseline">
            <h5 className="text-xl font-semibold text-neutral-700">
              {project.name}
            </h5>
          </div>
          <p className="text-sm mb-7 text-neutral-600">{project.description}</p>
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((tech) => (
              <RoundedItem>{tech}</RoundedItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
