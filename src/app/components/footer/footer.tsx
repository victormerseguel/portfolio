import React, { Fragment } from "react";
import Button from "../ui/button";
import MailIcon from "../ui/icons/mail-icon";
import WhatsappIcon from "../ui/icons/whatsapp-icon";
import { useTranslations } from "next-intl";
import Link from "next/link";
import en from "@/texts/en.json";

const Footer = ({ background }: { background?: boolean }) => {
  const t = useTranslations("Footer");
  const h = useTranslations("Header");
  const year = new Date().getFullYear();

  const contacts = Object.keys(en.Header.contacts);

  const backImage = background ? "url('/bg-grain.jpg')" : null;

  return (
    <footer
      className={`bg-background rounded-t-[100px] bg-no-repeat bg-cover`}
      style={{ backgroundImage: `${backImage}` }}
    >
      <div className="content flex flex-col" id="contacts">
        <h5 className="font-black text-center text-5xl uppercase mt-20 mb-14">
          {t("title")}
        </h5>
        <div className="flex gap-12 mx-auto mb-14">
          <Button
            text={t("buttons.email")}
            image={<MailIcon />}
            reversed
            dark
          />
          <Button
            text={t("buttons.whatsapp")}
            image={<WhatsappIcon />}
            reversed
          />
        </div>
        <div className="mx-auto space-x-4 mb-16">
          {contacts.map((contact, i) => (
            <Fragment key={i}>
              <Link href={"/"}>{h(`contacts.${contact}`)}</Link>
              {i < contacts.length - 1 ? <span>|</span> : null}
            </Fragment>
          ))}
        </div>
        <div className="border-t-2">
          <p className="my-8 text-center text-xs uppercase">
            @{year} {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
