import { Modal } from "@/components/modal";
import RoundedItem from "@/components/rounded-item";
import { getProjects } from "@/lib/api-request";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { GrAppleAppStore } from "react-icons/gr";
import { TbBrandAppgallery } from "react-icons/tb";
import { ProjectFeatures } from "./_components/project-features";

interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

const IMAGES = [
  "banhcafe-online-app-1.jpg",
  "banhcafe-online-app-2.jpg",
  "banhcafe-online-app-3.jpg",
  "banhcafe-online-app-4.jpg",
  "banhcafe-online-app-5.jpg",
  "banhcafe-online-app-6.jpg",
  "banhcafe-online-app-7.jpg",
  "banhcafe-online-app-8.jpg",
  "banhcafe-online-app-9.jpg",
  "banhcafe-online-app-10.jpg",
  "banhcafe-online-app-11.jpg",
  "banhcafe-online-app-12.jpg",
  "banhcafe-online-app-13.jpg",
  "banhcafe-online-app-14.jpg",
];

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const slug = params.slug;

  const projects = await getProjects();

  const project = projects.data.find((project) => project.slug === slug);

  if (!project) {
    return null;
  }

  return (
    <Modal>
      <div className="flex items-start gap-6">
        <Image
          src={project.image}
          alt={project.name}
          width={40}
          height={40}
          className="rounded-lg"
        />

        <div className="flex flex-col gap-7">
          <div className="flex gap-6 items-center">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-2xl">{project.name}</h1>
              {project.platform === "App" && (
                <StoreUrls
                  appGalleryUrl={project.appGalleryURL!}
                  appStoreUrl={project.appStoreURL!}
                  googlePlayUrl={project.playStoreURL!}
                />
              )}
            </div>
          </div>

          <div>section</div>

          {/* Project images */}
          <section>
            <div className="overflow-auto">
              <ul className="flex gap-4">
                {IMAGES.map((image) => (
                  <Image
                    key={image}
                    className="cursor-pointer rounded-md "
                    src={`/projects/${slug}/${image}`}
                    width={100}
                    height={250}
                    alt={image}
                    priority
                  />
                ))}
              </ul>
            </div>
          </section>

          {/* Project Overview */}
          <section className="flex flex-col gap-1 p-4 bg-black/5 border border-black/10 rounded-md">
            <h2 className="text-sm text-neutral-500 font-semibold">Overview</h2>
            <div className="text-neutral-800 text-xs">{project.overview}</div>
          </section>

          <section className="flex flex-col gap-1">
            <ProjectSubtitle>Description</ProjectSubtitle>
            <div className="text-neutral-800 text-sm">
              {project.description}
            </div>
          </section>

          <ProjectFeatures project={project} />

          {/* Technologies */}
          <section className="flex flex-col gap-1">
            <ProjectSubtitle>Technologies</ProjectSubtitle>
            <div className="flex gap-2 flex-wrap">
              {project.technologies.map((tech) => (
                <RoundedItem key={tech}>{tech}</RoundedItem>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
}

export function StoreUrls({
  appStoreUrl,
  googlePlayUrl,
  appGalleryUrl,
}: {
  appStoreUrl: string;
  googlePlayUrl: string;
  appGalleryUrl: string;
}) {
  return (
    <ul className="text-sm text-neutral-700 flex gap-2">
      <StoreUrlItem
        storeUrl={appStoreUrl}
        storeName="App Store"
        icon={<GrAppleAppStore />}
      />

      <StoreUrlItem
        storeUrl={googlePlayUrl}
        storeName="Google Play"
        icon={<BiLogoPlayStore />}
      />

      <StoreUrlItem
        storeUrl={appGalleryUrl}
        storeName="App Gallery"
        icon={<TbBrandAppgallery />}
      />
    </ul>
  );
}

export function StoreUrlItem({
  storeUrl,
  storeName,
  icon,
}: {
  storeUrl: string;
  storeName: string;
  icon: JSX.Element;
}) {
  return (
    <Link href={storeUrl} target="_blank" rel="noopener noreferrer">
      <li className="flex items-center gap-1 border-[1px] border-neutral-300 px-2 rounded-full bg-neutral-200 text-xs py-1 hover:border-neutral-400/70 relative">
        {icon}
        {storeName}
      </li>
    </Link>
  );
}

export function ProjectSubtitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-semibold text-neutral-800">{children}</h2>;
}
