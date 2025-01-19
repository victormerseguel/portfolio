import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { ContextProvider } from "./hooks/ContextFilm";

export const metadata = {
  title: "Victor Films",
  description: "",
  icons: {
    icon: "/victoricon.ico",
  },
};

export default async function Layout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang="pt">
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="container">
            <div className="content">
              <ContextProvider>
                <Header />
                {children}
                <Footer />
              </ContextProvider>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
