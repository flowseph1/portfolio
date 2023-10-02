"use client";

import { Container } from "@/components/container";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import Button from "@/components/ui/button";
import { cx } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

const options = ["projects", "ideas", "applications", "solutions"];

export function Hero() {
  const [selecteOption, setSelectedOption] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const interval = () => {
    intervalRef.current = setTimeout(() => {
      setSelectedOption((prevOption) => (prevOption + 1) % options.length);
      interval();
    }, 1000 * 3);
  };

  useEffect(() => {
    const handleVisibiltyChange = () => {
      if (document.hidden) {
        clearInterval(intervalRef.current!);
      } else {
        interval();
      }
    };

    interval();

    document.addEventListener("visibilitychange", handleVisibiltyChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibiltyChange);
      clearInterval(intervalRef.current!);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-16 z-10">
      {/* Hero background */}
      <div className="absolute inset-0 -z-20 bg-hero"></div>
      <Container>
        <div className=" flex flex-col justify-center items-center z-10">
          {/* Image */}

          {/* <div className="relative z-10 rounded-full mb-5">
            <span className="absolute -inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full -z-10 blur-3xl bg-clip-padding border-[12px] border-transparent"></span>
            <Image
              src={"/avatar.jpg"}
              alt="avatar"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div> */}

          <p className="glass-button">
            Hi, my name is <span className="font-semibold">Jose Acosta</span> 👋
          </p>

          <div className="flex flex-col items-center justify-center gap-6">
            <Title>Front End Developer</Title>
            <div className="mb-5">
              <Subtitle className="space-y-1">
                <div>I&apos;m a passionate developer who loves to learn</div>
                <div className="flex items-center justify-center space-x-2">
                  <motion.div layout>new things and build awesome</motion.div>
                  <div className="overflow-hidden">
                    <AnimatePresence mode="wait" initial={false}>
                      <Option key={options[selecteOption]}>
                        {options[selecteOption]}
                      </Option>
                    </AnimatePresence>
                  </div>
                </div>
              </Subtitle>
            </div>

            <div className="flex gap-4">
              <Button
                text="Contact Me"
                href="mailto:jose.m.acosta1996@gmail.com"
              />
              <Button
                text="Download CV"
                intent="outline"
                href="download/jose-acosta-resume-v2.pdf"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Option({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.p
      layout
      className={cx("text-start font-bold", className)}
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      exit={{ y: -50 }}
      transition={{ stiffness: 100, duration: 0.5 }}
    >
      {children}
    </motion.p>
  );
}
