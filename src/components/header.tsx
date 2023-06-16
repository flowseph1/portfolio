"use client";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { Nav } from "@/components/nav";
import { useRouter } from "next/navigation";

export function Header() {
  const route = useRouter();

  return (
    <header className=" flex-1 border-b-2 border-neutral-200">
      <Container>
        <div className="flex flex-1 justify-between items-center p-5">
          <div className="flex space-x-3 justify-center items-center">
            <Logo
              width={50}
              height={25}
              className="cursor-pointer text-neutral-700 hover:text-neutral-900 transition-colors"
              onClick={() => route.push("/")}
            />
            <p className="font-bold text-neutral-700">JOSE ACOSTA</p>
          </div>
          <Nav />
        </div>
      </Container>
    </header>
  );
}
