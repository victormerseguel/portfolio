import React from "react";
import { useTranslations } from "next-intl";

import Link from "next/link";
import Button from "../ui/button";

const ResumeButton = () => {
  const t = useTranslations("About");
  const t2 = useTranslations("Header");

  return (
    <Link href={t2("contacts_links.resume")} target="_blank">
      <Button text={t("button")} />
    </Link>
  );
};

export default ResumeButton;
