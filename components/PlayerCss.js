import "videojs-youtube";

const PlayerCSS = () => {
  return (
    <>
      <h1>Шинэ хичээлийн жилийн нээлт1</h1>
      <div data-vjs-player>
        <video
          id="my-video"
          className="video-js vjs-theme-city"
          playsInline
          controls
          preload="auto"
          data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=IkOVe40Sy0U"}] }'
        ></video>
      </div>
    </>
  );
};

export default PlayerCSS;
