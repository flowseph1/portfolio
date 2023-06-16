import { Container } from "@/components/container";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Footer() {
  return (
    <footer className="h-[150px] border-t-2 border-neutral-200">
      <Container>
        <div className="py-10">
          <div className="flex space-x-5 items-center mb-4">
            <Logo className="text-neutral-500 w-[60px]" />
            <div className="bg-neutral-300 h-[50px] w-[1px]" />
            <div className="flex space-x-3">
              <Link href="https://www.linkedin.com/in/josemiguelacosta/">
                <FaLinkedinIn
                  size={25}
                  className="text-neutral-500 cursor-pointer hover:text-neutral-700"
                />
              </Link>
              <Link href="https://github.com/flowseph1">
                <AiFillGithub
                  size={25}
                  className="text-neutral-500 cursor-pointer hover:text-neutral-700"
                />
              </Link>
            </div>
          </div>

          <p className="text-sm text-neutral-600 mb-3">
            Copyrigth © 2023{" "}
            <span className="font-semibold underline">Jose Acosta</span> All
            Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
