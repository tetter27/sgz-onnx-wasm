import Head from 'next/head'
import React, { useEffect, useRef, useState } from "react";
import { OriginalVideo } from "@/components/Video/Original";
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const props={
    audio: false,
    video: {
    width: 840,
    height: 564
    }
  }

  return (
    <>
      <Head>
        <title>SGZ ONNX</title>
        <meta name="description" content="LLIE model on browser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Left is original video
          </p>
          <p>
            Right is enhanced video
          </p>
        </div>
        <OriginalVideo video={props.video} audio={props.audio}/>
        
      </main>
    </>
  )
}
