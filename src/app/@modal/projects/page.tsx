import { Container } from "@/components/container";
import { GoBackButton } from "@/components/go-back-button";
import { Table } from "@/components/table";
import { getDomain } from "@/lib/utils";
import { ApiResponse, ProjectData } from "@/types";

async function getProjects(): Promise<ApiResponse<ProjectData[]>> {
  const domain = getDomain();

  const res = await fetch(`${domain}/api/projects`, {
    method: "GET",
    next: {
      revalidate: 30,
    },
  });

  if (!res.ok) {
    throw new Error("Error fetching technologies");
  }

  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="">
      <section className="py-20 ">
        <Container>
          <div className="w-full flex flex-col gap-10">
            <GoBackButton />
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-bold">Projects</h1>
              <h2 className="text-lg text-neutral-500">
                Discover all projects I work for
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-4 justify-end text-neutral-500">
                <div className="flex gap-1 items-center ">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 80 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.6 42.4L11.2 24L29.6 5.6L24 0L0 24L24 48L29.6 42.4ZM50.4 42.4L68.8 24L50.4 5.6L56 0L80 24L56 48L50.4 42.4Z"
                      fill="currentColor"
                    />
                  </svg>

                  <p className="text-sm font-light">{`${projects.data.length} projects`}</p>
                </div>

                <div className="flex gap-1 justify-end items-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 56 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48 0.04L8 0C3.6 0 0 3.6 0 8V80C0 84.4 3.6 88 8 88H48C52.4 88 56 84.4 56 80V8C56 3.6 52.4 0.04 48 0.04ZM48 72H8V16H48V72Z"
                      fill="currentColor"
                    />
                  </svg>

                  <p className="text-sm font-light">{`${
                    projects.data.filter((p) => p.categoryName === "Mobile")
                      .length
                  } mobile`}</p>
                </div>

                <div className="flex gap-1 justify-end items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="17"
                    width="17"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="M480-80q-84 0-157-31.5T196-197q-54-54-85-127.5T80-482q0-84 31-156.5T196-765q54-54 127-84.5T480-880q84 0 157 30.5T764-765q54 54 85 126.5T880-482q0 84-31 157.5T764-197q-54 54-127 85.5T480-80Zm0-58q35-36 58.5-82.5T577-331H384q14 60 37.5 108t58.5 85Zm-85-12q-25-38-43-82t-30-99H172q38 71 88 111.5T395-150Zm171-1q72-23 129.5-69T788-331H639q-13 54-30.5 98T566-151ZM152-391h159q-3-27-3.5-48.5T307-482q0-25 1-44.5t4-43.5H152q-7 24-9.5 43t-2.5 45q0 26 2.5 46.5T152-391Zm221 0h215q4-31 5-50.5t1-40.5q0-20-1-38.5t-5-49.5H373q-4 31-5 49.5t-1 38.5q0 21 1 40.5t5 50.5Zm275 0h160q7-24 9.5-44.5T820-482q0-26-2.5-45t-9.5-43H649q3 35 4 53.5t1 34.5q0 22-1.5 41.5T648-391Zm-10-239h150q-33-69-90.5-115T565-810q25 37 42.5 80T638-630Zm-254 0h194q-11-53-37-102.5T480-820q-32 27-54 71t-42 119Zm-212 0h151q11-54 28-96.5t43-82.5q-75 19-131 64t-91 115Z" />
                  </svg>

                  <p className="text-sm font-light">{`${
                    projects.data.filter((p) => p.categoryName === "Web").length
                  } web`}</p>
                </div>
              </div>
              {/* Table */}
              <Table projects={projects.data} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
