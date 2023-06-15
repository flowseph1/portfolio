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
        <div className="flex max-w-[950px] mx-auto flex-col gap-4">
          <Title>Projects</Title>
          <Subtitle className="mb-4">Awsome projects I have worked on</Subtitle>
          <ProjectList projects={projects} />
          <div className="flex justify-center">
            <Button
              text="See All Projects"
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
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5">
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </div>
  );
}

export function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="flex flex-1 border group border-transparent hover:border-gray-300 rounded-md min-h-[20rem] overflow-hidden cursor-pointer">
      <div className="flex flex-col w-full">
        <div className="flex items-end px-5 pt-5">
          <Image
            src={project.image}
            alt={project.name}
            width={50}
            height={50}
            className="rounded-2xl border-[1px] border-gray-300"
          />
        </div>
        <div className="flex flex-col p-5">
          <div className="flex space-x-2 mb-2 items-baseline">
            <h5 className="text-lg font-semibold">{project.name}</h5>
            {/*  <p className="text-sm bg-zinc-200 text-zinc-700 px-2 py-1 rounded-md font-semibold">
                  {project.date}
                </p> */}
          </div>
          <p className="text-sm mb-7 text-gray-600">{project.description}</p>
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
