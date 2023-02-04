import React, {useRef} from 'react';

interface videoProps {
    video: MediaStream | null
}

const Enhancement: React.FC<videoProps> = (props) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const srcVideo = props.video;
    if (videoRef.current){
        videoRef.current.srcObject = srcVideo;
      }
    
    return (
        <div>
            <video ref={videoRef} autoPlay/>
        </div>
    );
    
}

export default Enhancement