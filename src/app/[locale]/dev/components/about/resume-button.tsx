"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import Link from "next/link";
import Button from "../ui/button";

const ResumeButton = () => {
  const pathname = usePathname().replace("/dev", "").replace("/", "");
  const t = useTranslations("About");
  const t2 = useTranslations("Header");

  useEffect(() => {
    console.log(pathname);
  }, []);

  return (
    <Link href={t2("contacts_links.resume")} target="_blank">
      <Button text={t("button")} />
    </Link>
  );
};

export default ResumeButton;
