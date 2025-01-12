"use client";
import React from "react";
import CloseButton from "../ui/icons/close-button";

const ProjectClose = () => {
  function handleClose() {
    return console.log("hello!");
  }

  return (
    <div
      onClick={handleClose}
      className="flex justify-end fixed top-0 w-full z-40 bg-background2 cursor-zoom-out"
    >
      <CloseButton />
    </div>
  );
};

export default ProjectClose;
