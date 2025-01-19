"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const language = window.navigator.language;
  const languages = window.navigator.languages;

  useEffect(() => {
    language.includes("pt") || languages.includes("pt")
      ? router.push("/pt/film")
      : router.push("/en/film");
    return;
  }, []);
  return <></>;
};

export default Page;
