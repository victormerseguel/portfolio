import React from "react";
import Button from "../ui/button";
import MailIcon from "../ui/icons/mail-icon";
import WhatsappIcon from "../ui/icons/whatsapp-icon";
import { useTranslations } from "next-intl";
import Link from "next/link";
import en from "@/texts/en.json";

const Footer = () => {
  const t = useTranslations("Footer");
  const h = useTranslations("Header");
  const year = new Date().getFullYear();

  const contacts = Object.keys(en.Header.contacts);

  return (
    <div className="content flex flex-col" id="contacts">
      <h5 className="font-black text-center text-5xl uppercase mt-20 mb-14">
        Let's Talk
      </h5>
      <div className="flex gap-12 mx-auto mb-14">
        <Button text="email me" image={<MailIcon />} reversed dark />
        <Button text="whatsapp" image={<WhatsappIcon />} reversed />
      </div>
      <div className="mx-auto space-x-4 mb-16">
        {contacts.map((contact, i) => (
          <>
            <Link href={"/"}>{h(`contacts.${contact}`)}</Link>
            {i < contacts.length - 1 ? <span>|</span> : null}
          </>
        ))}
      </div>
      <div className="border-t-2">
        <p className="my-8 text-center text-xs uppercase">
          @{year} {t("rights")}
        </p>
      </div>
    </div>
  );
};

export default Footer;
