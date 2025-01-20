"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  let language: string;
  let languages: readonly string[];

  if (typeof window !== undefined) {
    language = window.navigator.language;
    languages = window.navigator.languages;
  }

  useEffect(() => {
    if (language.includes("pt") || languages.includes("pt")) {
      router.push("/pt/dev");
    } else {
      router.push("/en/dev");
    }
  }, []);
  return <></>;
};

export default Page;
