import { navbarConfig } from "@/config/navbar";
import Link from "next/link";

export function Nav() {
  return (
    <ul className="flex justify-around gap-4">
      {navbarConfig.map((item) => (
        <NavItem option={item.option} href={item.href} key={item.option} />
      ))}
    </ul>
  );
}

export function NavItem({ option, href }: { option: string; href: string }) {
  return (
    <Link href={href}>
      <div className="flex-1 text-neutral-400  cursor-pointer hover:text-neutral-900 transition">
        {option}
      </div>
    </Link>
  );
}
