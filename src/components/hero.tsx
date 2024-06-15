"use client";

import { Container } from "@/components/container";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import Button from "@/components/ui/button";
import { cx } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

const OPTIONS = [
  { text: "Experiences", gradient: "from-blue-500 to-purple-600" },
  { text: "Projects", gradient: "from-pink-500 via-red-500 to-yellow-500" },
  {
    text: "Applications",
    gradient: "from-orange-600 to-rose-600",
  },
  { text: "Solutions", gradient: "from-fuchsia-600 to-pink-600" },
];

const WORDS_PER_SECONDS = 1000 * 5;

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === OPTIONS.length - 1 ? 0 : prevIndex + 1,
      );
    }, WORDS_PER_SECONDS);

    return () => {
      clearInterval(unsubscribe);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center py-20 sm:py-32 z-10">
      {/* Hero background */}
      <div className="absolute inset-0 -z-20 bg-hero"></div>
      <Container>
        <div className="flex flex-col justify-center items-center z-10">
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

          <p className="glass-button mb-5">
            Hi, my name is <span className="font-semibold">Jose Acosta</span> 👋
          </p>

          <div className="flex flex-col items-center justify-center gap-6 px-5">
            <Title>Code with Purpose, Design with Passion</Title>
            <div className="mb-5">
              <AnimatePresence initial={false}>
                <Subtitle className="hidden md:flex gap-2 max-w-xl">
                  <motion.p layout>Transforming Ideas into Intuitive</motion.p>
                  <motion.p
                    key={OPTIONS[currentIndex].text}
                    className={cx(
                      "font-bold bg-clip-text bg-gradient-to-r text-transparent animate-hero-text bg-300%",
                      OPTIONS[currentIndex].gradient,
                    )}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        delay: 0.3,
                        ease: "easeInOut",
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.5,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    {OPTIONS[currentIndex].text}
                  </motion.p>
                </Subtitle>
              </AnimatePresence>

              <AnimatePresence initial={false}>
                <Subtitle className="flex flex-col md:hidden max-w-xl">
                  <p>Transforming Ideas into</p>
                  <div className="flex gap-2 justify-center items-center">
                    <motion.p layout>Intuitive</motion.p>

                    <motion.p
                      key={OPTIONS[currentIndex].text}
                      className={cx(
                        "font-bold bg-clip-text bg-gradient-to-r text-transparent animate-hero-text bg-300%",
                        OPTIONS[currentIndex].gradient,
                      )}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                          delay: 0.3,
                          ease: "easeInOut",
                        },
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.5,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      {OPTIONS[currentIndex].text}
                    </motion.p>
                  </div>
                </Subtitle>
              </AnimatePresence>
            </div>

            <div className="flex gap-4">
              <Button
                text="Contact Me"
                href="mailto:jose.m.acosta1996@gmail.com"
              />
              <Button
                text="Download CV"
                intent="outline"
                href="download/jose-acosta-resume-2024-2.pdf"
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
