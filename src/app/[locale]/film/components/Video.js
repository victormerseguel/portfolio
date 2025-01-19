"use client";
import style from "./Video.module.css";

import { Fragment, useRef } from "react";
import { useRouter } from "@/i18n/routing";
import { orderedFiles } from "../db/files";

const Video = ({ projectId, modal }) => {
  const videoRef = useRef();
  const router = useRouter();

  const closebtn = "/assets/img/close.png";
  const id = projectId;

  const handleClickOut = () => {
    document.body.style.overflow = "scroll";
    modal ? router.back() : router.push("/film/works");
    return;
  };

  return (
    <div className={style.divVid} onClick={handleClickOut}>
      <img className={style.closeBtn} src={closebtn} alt="" />
      {orderedFiles.map((file) =>
        id === file.id ? (
          <Fragment key={file.descripTitle}>
            <iframe
              id={`${id}Video`}
              className={style.video}
              width="100%"
              height="fit-content"
              src={`https://player.vimeo.com/video/${file.patch}?portrait=0&title=0&autoplay=1&controls=0&keyboard=1&loop=1&playsinline=0&speed=0`}
              title="0"
              frameBorder={0}
              portrait="false"
              allow="autoplay; fullscreen; picture-in-picture"
              ref={videoRef}
            ></iframe>
            <div className={style.videoLabel}>
              <h4>{file.descriptType}</h4>
              <h5>{file.descripTitle}</h5>
              <h6>{file.descripClient}</h6>
            </div>
          </Fragment>
        ) : null
      )}
    </div>
  );
};

export default Video;
