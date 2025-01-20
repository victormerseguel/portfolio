import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor ⎯ Frontend Developer",
};

export default async function LocaleLayout({
  children,
  modal,
  params,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // prettier-ignore
  if (!routing.locales.includes(locale as any)) { // eslint-disable-line @typescript-eslint/no-explicit-any
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth focus:scroll-auto">
      <body className={dmSans.className}>
        <NextIntlClientProvider messages={messages}>
          {modal}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
