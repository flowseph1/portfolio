import { ProjectData } from "@/types";
import { ProjectSubtitle } from "../page";

export function ProjectFeatures({ project }: { project: ProjectData }) {
  return (
    <section className="flex flex-col gap-1">
      <ProjectSubtitle>Features</ProjectSubtitle>
      {/* <ul>
        {project.keyFeature &&
          project.keyFeature.map((feature) => (
            <FeatureItem key={feature.name} item={feature} />
          ))}
      </ul> */}
      <div>{project.description}</div>
      <div className="text-neutral-800 text-sm">{project.date}</div>
    </section>
  );
}

/* function FeatureItem({
  item,
}: {
  item: {
    name;
  };
}) {
  return <div>FeatureItem</div>;
} */
