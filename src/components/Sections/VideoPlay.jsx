import React, { useState } from "react";
import "../../styles/components/Sections/VideoPlay.css";
import Modal from "../utils/Modal";

const VideoPlay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="video-play">
      <div className="container">
        <div className="video h-[380px] md:h-[769px]">
          <div className="play" onClick={openModal}>
            Play
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="video-container">
              <iframe
                width="100%"
                height="480"
                src="https://www.youtube.com/embed/N47kapFfXl0?mute=1&controls=0&disablekb=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"></iframe>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;
