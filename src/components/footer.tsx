import { Container } from "@/components/container";
import { ImLinkedin } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[150px] border-t-2 border-neutral-200">
      <Container>
        <div className="py-5">
          <p className="text-sm text-neutral-800 mb-3">
            © 2023 All Rights Reserved by{" "}
            <span className="font-semibold">Jose Miguel Acosta Carias</span>
          </p>
          <div className="flex space-x-3">
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
          </div>
        </div>
      </Container>
    </footer>
  );
}
