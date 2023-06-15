import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import Button from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-28">
      {/* Image */}
      <div className="relative rounded-full">
        <Image
          src={"/avatar.png"}
          alt="avatar"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>

      <p className="px-4 py-2 bg-neutral-200 rounded-full text-sm">
        Hi, my name is <span className="font-semibold">Jose Acosta</span> 👋
      </p>

      <Title>Front End Developer</Title>
      <Subtitle>
        I'm a passionate developer who loves to learn <br /> new things and
        build awesome things.
      </Subtitle>

      <div className="flex gap-4">
        <Button text="Contact Me" />
        <Button text="Download CV" intent="outline" />
      </div>
    </section>
  );
}
