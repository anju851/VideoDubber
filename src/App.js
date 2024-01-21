import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function App() {
  const [video, setVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setVideo(URL.createObjectURL(file));
    setIsPlaying(true);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'video/*',
  });

  return (
    <div>
      <div style={sonyBrand}>
        <text style={headerStyle}>SONY</text>
      </div>
      <div style={containerStyles}>
          <div style={dropzoneContainerStyles}>
              <div {...getRootProps()} style={dropzoneStyles}>
                <input {...getInputProps()} />
                  <p>Drag & drop a video file here</p>
                  <p>Or click to select one</p>
              </div>
          </div>
        
          {video && (
            <div style={videoContainerStyles}>
              <div style={videoStyles}>
                  <video
                    controls
                    width="500"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p>{isPlaying ? 'Video is playing' : 'Video is paused'}</p>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

const headerStyle = {
  fontWeight: 'bold',
  fontSize: '30px',
  marginTop: '80px',
  marginLeft: '50px'
  
}

const sonyBrand = {
  background: '#3457D5',
  height: '130px',
}
const dropzoneContainerStyles = {
  width: '25%', // Fixed width for the dropzone container
  marginRight: '20px', // Adjust the right margin for spacing
  marginTop: '330px',
}

const dropzoneStyles = {
    border: '2px dashed #ccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',    
};

const videoContainerStyles = {
  marginTop: '150px',      // Adjust the top margin for spacing
};
  const videoStyles = {
    marginLeft: '30px',     // Adjust the left margin for the video
  };


const containerStyles = {
  display: 'flex',        // Use flexbox to align items horizontally
  marginLeft: '20px',     // Adjust the left margin as needed
  marginTop: '20px',      // Adjust the top margin as needed
  // alignItems: 'flex-start', // Align items at the start (top) of the cross-axis
};

export default App;
