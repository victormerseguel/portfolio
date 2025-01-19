"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const language = window.navigator.language;
  const languages = window.navigator.languages;

  useEffect(() => {
    if (language.includes("pt") || languages.includes("pt")) {
      router.push("/pt/film");
    } else {
      router.push("/en/film");
    }
    return;
  }, []);
  return <></>;
};

export default Page;
