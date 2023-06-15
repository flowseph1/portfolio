import { Container } from "@/components/container";
import RoundedItem from "@/components/rounded-item";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import { Experience, Experience as IExperience } from "@/types";
import React from "react";

export function Experience({ experience }: { experience: IExperience[] }) {
  return (
    <section className="flex flex-col py-20">
      <Container>
        <div className="space-y-5">
          <Title>Experience</Title>
          <Subtitle>Companies I've worked with</Subtitle>
          <Timeline experience={experience} />
        </div>
      </Container>
    </section>
  );
}

export function Timeline({ experience }: { experience: IExperience[] }) {
  return (
    <div className="">
      <div className="flex mb-1 h-20">
        <div className="w-[350px] mr-3" />
        <div className="w-3 flex justify-center">
          <span className="w-[1px] bg-gradient-to-t from-gray-300 to-transparent" />
        </div>
      </div>
      {experience.map((item) => (
        <div className="flex">
          <p className="flex-1 text-gray-500 text-right -mt-1 text-sm w-[350px] mr-3">
            {item.dateStart} - {item.dateEnd}
          </p>
          <div className="flex flex-col items-center mb-1">
            <span className="w-3 h-3 border-2 border-gray-300 rounded-full mb-1" />
            <span className="w-[1px] flex-1 bg-gray-300" />
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

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="max-w-[500px] px-5 mb-20 rounded-lg -mt-2">
      <div className="mb-3">
        <p className="text-lg text-gray-700 font-semibold">{item.company}</p>
        <p className="text-gray-500 font-semibold mb-3">{item.position}</p>
        <p className="text-gray-700 text-sm">{item.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {item.projects?.map((project) => (
          <RoundedItem>{project}</RoundedItem>
        ))}
      </div>
    </div>
  );
}
