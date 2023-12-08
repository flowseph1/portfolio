"use client";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { Nav } from "@/components/nav";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TbSmartHome } from "react-icons/tb";

export function Header() {
  const route = useRouter();

  return (
    <header className="flex-1">
      <Container>
        <div className="flex flex-1 justify-between items-center p-5">
          <div className="flex space-x-4 justify-center items-center">
            <Logo
              width={25}
              height={25}
              className="cursor-pointer transition-colors"
              onClick={() => route.push("/")}
            />
            <p className="hidden sm:block font-bold text-neutral-700">
              JOSE ACOSTA
            </p>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <Link href={"#"}>
              <TbSmartHome size={25} className="text-neutral-700" />
            </Link>
            <Nav />
          </div>
        </div>
      </Container>
    </header>
  );
}
