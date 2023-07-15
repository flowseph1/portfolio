import { Container } from "@/components/container";

interface ProjectProps {
  params: {
    slug: string;
  };
}

export default function Project(props: ProjectProps) {
  return (
    <div>
      <Container>{props.params.slug}</Container>
    </div>
  );
}
