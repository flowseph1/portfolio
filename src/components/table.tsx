import RoundedItem from "@/components/rounded-item";
import { ProjectData } from "@/types";
import Image from "next/image";
import Link from "next/link";

export function Table({ projects }: { projects: ProjectData[] }) {
  return (
    <div className="w-full flex flex-col border-[1px] rounded-md border-neutral-300 overflow-hidden [&>*:last-child>div]:border-b-transparent">
      {projects.map((project) => (
        <ProjectRow key={project.name} project={project} />
      ))}
    </div>
  );
}

export function ProjectRow({ project }: { project: ProjectData }) {
  const getIcon = (categoryName: string) => {
    switch (categoryName) {
      case "Mobile":
        return (
          <svg
            width="10"
            height="10"
            viewBox="0 0 56 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48 0.04L8 0C3.6 0 0 3.6 0 8V80C0 84.4 3.6 88 8 88H48C52.4 88 56 84.4 56 80V8C56 3.6 52.4 0.04 48 0.04ZM48 72H8V16H48V72Z"
              fill="rgb(115,115,115)"
            />
          </svg>
        );

      case "Web":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="10"
            viewBox="0 -960 960 960"
            width="10"
            fill="rgb(115,115,115)"
          >
            <path d="M480-80q-84 0-157-31.5T196-197q-54-54-85-127.5T80-482q0-84 31-156.5T196-765q54-54 127-84.5T480-880q84 0 157 30.5T764-765q54 54 85 126.5T880-482q0 84-31 157.5T764-197q-54 54-127 85.5T480-80Zm0-58q35-36 58.5-82.5T577-331H384q14 60 37.5 108t58.5 85Zm-85-12q-25-38-43-82t-30-99H172q38 71 88 111.5T395-150Zm171-1q72-23 129.5-69T788-331H639q-13 54-30.5 98T566-151ZM152-391h159q-3-27-3.5-48.5T307-482q0-25 1-44.5t4-43.5H152q-7 24-9.5 43t-2.5 45q0 26 2.5 46.5T152-391Zm221 0h215q4-31 5-50.5t1-40.5q0-20-1-38.5t-5-49.5H373q-4 31-5 49.5t-1 38.5q0 21 1 40.5t5 50.5Zm275 0h160q7-24 9.5-44.5T820-482q0-26-2.5-45t-9.5-43H649q3 35 4 53.5t1 34.5q0 22-1.5 41.5T648-391Zm-10-239h150q-33-69-90.5-115T565-810q25 37 42.5 80T638-630Zm-254 0h194q-11-53-37-102.5T480-820q-32 27-54 71t-42 119Zm-212 0h151q11-54 28-96.5t43-82.5q-75 19-131 64t-91 115Z" />
          </svg>
        );

      default:
        break;
    }
  };

  return (
    <Link href={`#`} key={project.name}>
      <div className="relative flex flex-1 group h-full overflow-hidden cursor-pointer hover:bg-neutral-100 transition-all duration-400 border-b-[1px] border-neutral-300  bg-project">
        <div className="flex w-full p-7 gap-5 flex-wrap justify-between items-center">
          <div className="flex flex-wrap gap-5">
            <div className="flex shrink-0 items-start self-start">
              <Image
                src={project.image}
                alt={project.name}
                width={35}
                height={35}
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex space-x-2 items-baseline">
                <div className="flex flex-col">
                  <div className="text-[0.7rem] text-neutral-500">
                    {new Date(project.date as string).toLocaleDateString()}
                  </div>
                  <div className="flex gap-2">
                    <h5 className="text-lg leading-tight font-semibold text-neutral-800">
                      {project.name}
                    </h5>
                    <div className="flex gap-1 text-sm text-neutral-500 bg-neutral-200/80 w-fit p-1 items-center rounded-sm h-fit">
                      {getIcon(project.categoryName)}

                      <p className="text-xs">{project.categoryName}</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-neutral-600 -mt-1">
                {project.description}
              </p>
              <div className="flex gap-2 h-fit flex-wrap">
                {project.technologies.map((tech) => (
                  <RoundedItem key={tech} className="shrink-0">
                    {tech}
                  </RoundedItem>
                ))}
              </div>
            </div>
          </div>

          <div className="text-neutral-400/80 -translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
            <svg
              width="15"
              height="15"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 0L26.36 5.64L48.68 28H0V36H48.68L26.36 58.36L32 64L64 32L32 0Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
