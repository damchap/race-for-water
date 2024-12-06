import React from 'react';
import BgVideo from '../assets/video/background/BgVideo.mp4';

const VideoBackground: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Display a Video locally saved, that is as big as the screen and fit it */}
      <video
        src={BgVideo}
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          zIndex: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        Your browser does not support the video tag.
      </video>
      <div
      className='relative z-[1] m-3'
      >
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
