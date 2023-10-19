'use client'



import React, {useState, useEffect, useRef, RefObject} from 'react';
import {motion} from 'framer-motion';
import Style from './AudioCards.module.css'
import {BsFillPlayFill , BsFillPauseFill} from 'react-icons/bs'
import {IoPlayBackSharp , IoPlayForwardSharp} from 'react-icons/io5'
import images from '../../../styles/img-copy'
import Image from 'next/image'
import axios from 'axios'
import AudioCard from '@/components/AudioCard/AudioCard'



export default function AudioCards({el , i}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const audioPlayer = useRef([])



  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);

  const togglePlayPause = (index) => {
   
    if (index === currentTrackIndex && isPlaying) {
      audioPlayer.current.pause();
      setIsPlaying(false);
    } else {
      audioPlayer.current = new Audio(`http://127.0.0.1:8000/${el.music}`);
      audioPlayer.current.play();
      setIsPlaying(true);
      setCurrentTrackIndex(index);
    }
  };

   useEffect(() => {
     
   }, [audioPlayer?.current?.loadedmetadata , audioPlayer?.current?.readyState])



  

  
   
  

  
  
       
    return (
        <motion.div className={Style.sliderCard}>
        <div className={Style.sliderCard_box}>
              <div className={Style.sliderCard_box_box}>
                <div className={Style.sliderCard_box_box_box}>
          <motion.div className={Style.sliderCard_box_img}>
             <Image src={`http://127.0.0.1:8000/${el.image}`}
                    className={Style.sliderCard_box_img_img} 
                    alt={`Slide ${i + 1}`}  
                    width={400}  
                    height={400}
               />
          </motion.div>

              <div className={Style.sliderCard_underpic}> <div className={Style.audio}>
                    <div className={Style.audio_play} >
                      <button type='submit' className={Style.btn1}  onClick={() => togglePlayPause(i)}>
                      {isPlaying ? (
                    <BsFillPauseFill className={Style.icons1} />
                      ) : (
                    <BsFillPlayFill className={Style.icons1} />
                       )}
                      </button>
                    </div>
                  </div>
                <div className={Style.sliderCard_box_title}>
                  <div className={Style.sliderCard_box_title_box}>
                     <p>{el.title}</p>
                    </div>
                  </div>
                 
                </div>  
                <div className={Style.descriptions}>
                    <div className={Style.descriptions_box}>
                        {el.description}
                    </div>
                  </div>
             </div>
          </div>
       </div>
   </motion.div>
    )
}