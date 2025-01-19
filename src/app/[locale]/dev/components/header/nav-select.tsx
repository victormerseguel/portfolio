"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const NavSelect = () => {
  const router = useRouter();
  const pathname = usePathname().replace("/dev", "").replace("/", "");

  return (
    <select
      name="lang"
      id="lang"
      onChange={(e) => router.push(`/${e.target.value}/dev`)}
      className="uppercase border-none ml-[-5px] bg-transparent cursor-pointer"
      value={pathname}
    >
      <option value="en">🇬🇧 en</option>
      <option value="pt">🇵🇹 pt</option>
    </select>
  );
};

export default NavSelect;
