import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import React, { useRef, useEffect } from 'react'

export default function myapp() {

  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const setVideoStream = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true});
      if (videoRef.current){
        videoRef.current.srcObject = stream;
      }
    }

    setVideoStream();
  }, [])


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            original image
          </p>
          <p>
            enhanced image
          </p>
        </div>
        <div>
          <video ref ={videoRef} autoPlay/>
        </div>
      </main>
    </>
  )
}