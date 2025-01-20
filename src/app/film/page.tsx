"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  let language: string;
  let languages: readonly string[];

  if (window !== undefined) {
    language = window.navigator.language;
    languages = window.navigator.languages;
  }

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
