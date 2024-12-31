"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const NavSelect = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <select
      name="lang"
      id="lang"
      onChange={(e) => router.push(`/${e.target.value}`)}
      className="uppercase border-none ml-[-5px] bg-transparent cursor-pointer"
      value={pathname.replace("/", "")}
    >
      <option value="en">🇬🇧 en</option>
      <option value="pt">🇵🇹 pt</option>
    </select>
  );
};

export default NavSelect;
