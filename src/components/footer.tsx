import { Container } from "@/components/container";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Footer() {
  return (
    <footer className="h-[150px] px-5 border-t-[1px] border-neutral-200 bg-gradient-to-tr from-neutral-50 to-slate-100">
      <Container>
        <div className="py-10">
          <div className="flex space-x-5 items-center mb-4">
            <Logo
              width={25}
              height={25}
              className="cursor-pointer text-neutral-700 hover:text-neutral-900 transition-colors"
            />
            <div className="bg-neutral-300 h-[50px] w-[1px]" />
            <div className="flex space-x-3">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/josemiguelacosta/"
              >
                <FaLinkedinIn
                  size={25}
                  className="text-neutral-500 cursor-pointer hover:text-neutral-700"
                />
              </Link>
              <Link target="_blank" href="https://github.com/flowseph1">
                <AiFillGithub
                  size={25}
                  className="text-neutral-500 cursor-pointer hover:text-neutral-700"
                />
              </Link>
            </div>
          </div>

          <p className="text-xs text-neutral-600 mb-3">
            Designed and Developed by{" "}
            <span className="font-semibold underline">Jose Acosta</span>
          </p>
          {/* <div className="flex space-x-3">
            <Link href="https://www.linkedin.com/in/josemiguelacosta/">
              <ImLinkedin
                size={20}
                className="text-neutral-400 cursor-pointer hover:text-neutral-700"
              />
            </Link>
            <Link href="https://github.com/flowseph1">
              <AiFillGithub
                size={20}
                className="text-neutral-400 cursor-pointer hover:text-neutral-700"
              />
            </Link>
          </div> */}
        </div>
      </Container>
    </footer>
  );
}
