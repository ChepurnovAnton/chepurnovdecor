import React, { useState } from "react";
import styles from "./VideoBlock.module.css";
import { MdPlayArrow } from "react-icons/md";

const VideoBlock = ({ videoUrl, thumbnail, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.videoBlockWrapper}>
      <div className={styles.videoContainer}>
        {isPlaying ? (
          <video
            className={styles.videoFrame}
            title={title || "Video"}
            controls
            autoPlay
          >
            <source src={'https://api.chepurnovdecor.ru/' + videoUrl} type="video/mp4" />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
        ) : (
          <div
            className={styles.videoPreview}
            onClick={() => setIsPlaying(true)}
            style={{
              backgroundImage: thumbnail ? `url(${'https://api.chepurnovdecor.ru/' + thumbnail})` : "none",
              backgroundColor: !thumbnail ? "#000000" : "transparent",
            }}
          >
            <div className={styles.playButtonOverlay}>
              <button className={styles.playButton} aria-label="Play video">
                <MdPlayArrow size={60} />
              </button>
            </div>
          </div>
        )}
      </div>
      {title && <h3 className={styles.videoTitle}>{title}</h3>}
    </div>
  );
};

export default VideoBlock;
