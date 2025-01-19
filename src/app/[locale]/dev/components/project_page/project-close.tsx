"use client";
import React from "react";
import CloseButton from "../ui/icons/close-button";
import { useRouter } from "@/i18n/routing";

const ProjectClose = ({ back }: { back?: boolean }) => {
  const router = useRouter();

  const handleClose = () => {
    if (back) {
      router.back();
    } else {
      router.push("/dev/");
    }
  };

  return (
    <div
      className="flex justify-end fixed top-0 w-full z-40 bg-background2 cursor-zoom-out"
      onClick={handleClose}
    >
      <CloseButton />
    </div>
  );
};

export default ProjectClose;
