"use client";

import { NavLinks } from "@/constant/constatn";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`border border-white ${navBg ? "bg-[#0f142ed9] shadow-md " : "fixed"}  transition-all duration-200 h-[12vh] z-1000 fixed w-full`}
    >
      <div className="flex items-center justify-between h-full w-[90%] border border-white mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl text-white hidden md:block md:text-2xl font-bold">
            Askebir Tadesse
          </h1>
        </div>
        {/* Nave link */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-white hover:text-cyan-300 font-medium transition-all duration-200 "
            >
              {link.lable}{" "}
            </Link>
          ))}
        </div>
        {/* download button */}
        <div
          className="border border-amber-300 px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900
         transition-all flex items-center space-x-2 duration-100 "
        >
          <BiDownload className="w-5 h-5" />
          <span>DownLoad CV</span>
        </div>
        {/* Burger menu */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-white lg:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
