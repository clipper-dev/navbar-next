import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { data } from "../data/menu";

function Navbar() {
  const [tab, setTab] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  return (
    <nav className="flex flex-row justify-between bg-zinc-800 text-white pl-4 text-lg h-12 items-center w-full">
      <div>
        <Image height={30} width={30} src="/favicon.ico" alt="Logo" />
      </div>
      <div></div>
      <ul className="flex-row gap-4 h-full items-center hidden md:flex">
        {data.map((item, index) => {
          return (
            <li
              key={index}
              className={
                tab === index
                  ? "text-green-800 bg-green-200 h-full flex flex-col justify-center px-4 transition-all"
                  : "hover:text-green-800 hover:bg-green-200 h-full flex flex-col justify-center px-4 transition-all"
              }
            >
              <Link
                href={item.slug}
                onClick={() => {
                  setTab(index);
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        className={
          "after:transition-all before:transition-all transition-all flex md:hidden mr-2 h-[3px] w-8 bg-white after:h-[3px] after:w-8 after:bg-white  after:absolute before:absolute  before:h-[3px] before:w-8 before:bg-white " +
          (sidebar
            ? "after:translate-y-0 before:-translate-y-0 rotate-45 before:rotate-0 after:-rotate-90"
            : "after:translate-y-[10px] before:-translate-y-[10px]")
        }
        onClick={() => {
          setSidebar(!sidebar);
        }}
      ></div>
      <ul
        className={
          "fixed bg-zinc-900 flex flex-col w-[50%] h-screen top-12 transition-all gap-8 items-center pt-6 " +
          (sidebar ? "right-0" : "right-[-100%]")
        }
      >
        {data.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.slug}
                onClick={() => {
                  setTab(index);
                }}
                className="p-4"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      
    </nav>
  );
}

export default Navbar;
