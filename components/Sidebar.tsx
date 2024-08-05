'use client';

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2 ">
          <Image
            src="/icons/logo.svg"
            alt="Hamro bank logo"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Hamro Bank</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          return(
          <Link
            key={item.label}
            href={item.route}
            className={cn('sidebar-link',{'bg-bank-gradient':isActive})}
          >
            {item.label}
          </Link>
          )
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
