import { Container } from "@/components/container";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import { Tech } from "@/types";
import Image from "next/image";

export function TechStack({ technologies }: { technologies: Tech[] }) {
  return (
    <section className="flex flex-col justify-center items-center py-24 space-y-5">
      {/* <p className="text-base text-zinc-500">Main Tech Stack</p> */}
      <Title>Tech Stack</Title>
      <Subtitle>Main technologies I use to build my projects.</Subtitle>
      <div className="">
        <Container>
          <div className="flex max-w-[800px] mx-auto flex-wrap items-center justify-evenly gap-y-3">
            {technologies.map((tech) => (
              <Tech key={tech.name} tech={tech} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

export function Tech({ tech }: { tech: Tech }) {
  return (
    <div className="flex items-center justify-center px-5 py-4 border-[1px] border-neutral-300 rounded-full">
      <div className="mr-5">
        <Image
          src={tech.logo}
          alt={tech.name}
          width={tech.width}
          height={tech.height}
        />
      </div>
      <div>
        <h3 className="">{tech.name}</h3>
      </div>
    </div>
  );
}
