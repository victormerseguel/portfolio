"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const language = window.navigator.language;
      const languages = window.navigator.languages;

      if (language.includes("pt") || languages.includes("pt")) {
        router.push("/pt/dev");
      } else {
        router.push("/en/dev");
      }
    }
  }, []);
  return <></>;
};

export default Page;
