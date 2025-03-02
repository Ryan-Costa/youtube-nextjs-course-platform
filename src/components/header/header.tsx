"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";

export const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("CodarSe");
  const currentPath = usePathname();

  useEffect(() => {
    setTitle(document.title);
    setDrawer(false);
  }, [currentPath]);

  return (
    <nav className="flex items-center gap-6 justify-start md:justify-center px-6 bg-primary py-2 sm:py-4">
      <button className="sm:hidden" onClick={() => setDrawer(true)}>
        <MdMenu size={24} />
      </button>

      <ul
        className="flex gap-4 items-center"
        tabIndex={drawer ? -1 : undefined}
      >
        <li className="my-2">
          <Link href="/" className="border-2 rounded-md py-2 px-1 font-bold">
            CODARSE
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="/"
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
          >
            Página Inicial
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="/cursos"
            data-active={currentPath === "/cursos"}
            className="data-[active=true]:underline"
          >
            Cursos
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="https://blog.codarse.com"
            target="_blank"
            className="flex items-center gap-1"
          >
            Blog
            <MdOutlineOpenInNew />
          </Link>
        </li>
      </ul>

      <div
        data-open={drawer}
        tabIndex={drawer ? undefined : -1}
        onClick={() => setDrawer(false)}
        className="bg-gradient-to-r from-background fixed top-0 left-0 bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full"
      >
        <ul
          className="flex gap-4 flex-col p-4 w-60 bg-background h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <li className="">
            <Link
              href="/"
              data-active={currentPath === "/"}
              className="data-[active=true]:underline"
            >
              Página Inicial
            </Link>
          </li>
          <li className="">
            <Link
              href="/cursos"
              data-active={currentPath === "/cursos"}
              className="data-[active=true]:underline"
            >
              Cursos
            </Link>
          </li>
          <li className="">
            <Link
              href="https://blog.codarse.com"
              target="_blank"
              className="flex items-center gap-1"
            >
              Blog
              <MdOutlineOpenInNew />
            </Link>
          </li>
        </ul>
      </div>

      <h1 className="sm:hidden">{title}</h1>
    </nav>
  );
};
