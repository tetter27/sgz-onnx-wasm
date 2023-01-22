import React, { useEffect, useRef, useState } from "react";
import { CamOnOfButton } from "@/components/Button/Cam";
import { MicOnOfButton } from "@/components/Button/Mic";

type MediaProps = {
    audio: boolean;
    video: {
    width: number;
    height: number;
    };
};

export const OriginalVideo: React.FC<MediaProps> = ({ audio, video }) => {
    const constraints = {
        audio: false,
        video: {
        width: 840,
        height: 564,
        },
    };

    const videoRef = useRef<HTMLVideoElement>(null);

    const [mutedState, setMutedState] = useState(false);
    const micSetter = (isChecked: boolean) => setMutedState(isChecked);
    const [cameraState, setCameraState] = useState(false);
    const cameraSetter = (isChecked: boolean) => setCameraState(isChecked);

    //カメラのon/offボタンの実装
    useEffect(() => {
        navigator.mediaDevices
        .getUserMedia({ audio: true, video: true })
        .then((stream) => {
            videoRef.current!.srcObject = cameraState ? null : stream;
        });
    }, [cameraState]);

    //マイクのon/offボタンの実装
    useEffect(() => {
        navigator.mediaDevices
        .getUserMedia({ audio: mutedState ? false : true, video: true })
        .then(() => {});
        console.log(audio);
    }, [mutedState]);

    return (
        <>
        <video
            ref={videoRef}
            id="local-video"
            autoPlay
            playsInline
            muted
            width={video.width}
            height={video.height}
        />
        <br />
        <CamOnOfButton disabled={cameraState} setter={cameraSetter} />
        <MicOnOfButton muted={mutedState} setter={micSetter} />
        </>
    );
};


    
