import React, { useState } from "react";
import styles from "./VideoBlock.module.css";
import { MdPlayArrow } from "react-icons/md";

const VideoBlock = ({ videoUrl, thumbnail, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.videoBlockWrapper}>
      <div className={styles.videoContainer}>
        {isPlaying ? (
          <iframe
            className={styles.videoFrame}
            src={videoUrl + "?autoplay=1"}
            title={title || "Video"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            className={styles.videoPreview}
            onClick={() => setIsPlaying(true)}
            style={{
              backgroundImage: thumbnail ? `url(${thumbnail})` : "none",
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
