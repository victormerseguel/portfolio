"use client";
import { useRouter } from "@/i18n/routing";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/film/works");
  }, []);
  return <></>;
};

export default Home;
