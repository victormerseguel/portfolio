"use client";

import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const ClientText = ({
  objectKey,
  text,
}: {
  objectKey: string;
  text: string;
}) => {
  const pathname = usePathname().slice(1);
  const t = useTranslations(`Project-page.${objectKey}.${pathname}`);

  return <div>{t(`${text}`)}</div>;
};

export default ClientText;
