import React from "react";
const VideoComponent = () => {
    return (
      <div className="p-3">
        <div className="aspect-w-20 aspect-h-20 rounded-lg shadow-md">
          <iframe
            className="rounded-lg " style = {{width: "100%", height: "400px"}}
            src="https://www.youtube.com/embed/w41aX9yP0nU?si=JLcqZCtJR7Vq3Cdi" 
            title="Training Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default VideoComponent;
  