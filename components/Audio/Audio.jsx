'use client'

import Style from './Audio.module.css'
import {BsFillPlayFill , BsFillPauseFill} from 'react-icons/bs'
import {IoPlayBackSharp , IoPlayForwardSharp} from 'react-icons/io5'
import React , { useState , useRef, useEffect } from 'react'
import axios from 'axios'

import Head from 'next/head'

export default function Audio() {
   const [audio , SetAudio] = useState([])
   const [isPlaying, setIsPlaying] = useState(false);
   const [duration, setDuration] = useState(0);
   const [currentTime , setCurrentTime] = useState(0)
   const audioPlayer = useRef([])
   const progressBar = useRef()
   const animationRef = useRef()

   useEffect(() => {

    const config = {
      headers: {
        'Accept': 'application/json'
      }
    };
    // Fetch slider images on component mount
    axios
      .get('http://127.0.0.1:8000')
      .then((response) => {
        SetAudio(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  
  }, []);




   useEffect(() => {
     
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
   }, [audioPlayer?.current?.loadedmetadata , audioPlayer?.current?.readyState])

   const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);

    const returnedMinutes = minutes < 10 ?`0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);

    const returnedSeconds = seconds < 10 ?`0${seconds}`  : `${seconds}`;

    return `${returnedMinutes}  : ${returnedSeconds}`;
 }

 const togglePlayPause = () => {
  const preValue = isPlaying;
  setIsPlaying(!preValue);
  if (!preValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
  } else {
      audioPlayer.current.pause();

      cancelAnimationFrame(animationRef.current);
  }
 }

 const whilePlaying = () => {
  progressBar.current.value = audioPlayer.current.currentTime;
  changePlayerCurrentTime();
  animationRef.current = requestAnimationFrame(whilePlaying)
 }
  
 const changeRange = () => {
     audioPlayer.current.currentTime = progressBar.current.value;
     changePlayerCurrentTime();
 }

 const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--main-bg-color', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
 };

 const backThirty = () => {
  progressBar.current.value = Number(progressBar.current.value - 30);
  changeRange();
 };

 const TTwardThirty = () => {
  progressBar.current.value = Number(progressBar.current.value + 30);
  changeRange();
 }

     



    return (
        <div className={Style.Audio}>
            <div className={Style.Audio_box}>
                <div className={Style.Audio_box_left}>
                  {audio.map((el , i) => (
                    <div>
                <audio ref={audioPlayer} src={`http://127.0.0.1:8000/${el.music}`}  key={i} preload='metaData'></audio>
                    </div>
                   ))}
                      <button  className={Style.btn3} type='submit' onClick={backThirty}><IoPlayBackSharp className={Style.icons3}/></button>
                      <button type='submit' className={Style.btn1} onClick={togglePlayPause}>
                        { isPlaying ?  <BsFillPauseFill className={Style.icons1} /> : <BsFillPlayFill className={Style.icons1}/>}
                      </button>
                      <button type='submit' className={Style.btn2} onClick={TTwardThirty}><IoPlayForwardSharp className={Style.icons2}/></button>
                </div>
                <div className={Style.Audio_box_center}>
                    <div className={Style.Audio_box_center_box}>
                        <div className={Style.duration}>{calculateTime(currentTime)}</div>
                          <input type='range'  className={Style.input}
                          defaultValue='0' ref={progressBar}
                           onChange={changeRange}/> 
                           <div className={Style.duration}>{duration && !isNaN(duration) && calculateTime(duration)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}