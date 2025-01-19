"use client";
import style from "./page.module.css";

import { useEffect } from "react";
import { useState } from "react";
import { Link } from "@/i18n/routing";

import { orderedFiles } from "../../db/files";

const Works = () => {
  const [mouseOverItems, setMouseOverItems] = useState([]);

  useEffect(() => {
    document.body.style.overflow = "scroll";
    orderedFiles.forEach(() => {
      mouseOverItems.push(false);
    });
  }, []);

  const handleClick = () => {
    document.body.style.overflow = "hidden";
  };

  function showLabel(index) {
    mouseOverItems[index] = true;
    setMouseOverItems([...mouseOverItems]);
  }

  function hideLabel(index) {
    mouseOverItems[index] = false;
    setMouseOverItems([...mouseOverItems]);
  }

  return (
    <>
      <div className={style.thumbContainer} id="thumbContainer">
        {orderedFiles.map((file, index) => (
          <div
            key={index}
            className={style.divImg}
            style={{ position: "relative" }}
            onMouseEnter={() => showLabel(index)}
            onMouseLeave={() => hideLabel(index)}
          >
            <img
              src={file.imgURL}
              className={style.thumb}
              alt={file.nome}
              id={file.id}
            />
            <Link
              href={`/film/works/projects/${file.id}`}
              onClick={handleClick}
              scroll={false}
            >
              {mouseOverItems[index] && (
                <div className={`${style.description}`} id={`${file.id}Label`}>
                  <h4>{file.descriptType}</h4>
                  <h5>{file.descripTitle}</h5>
                  <h6>{file.descripClient}</h6>
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Works;
