'use client'


import React, {useState, useEffect, useRef, RefObject} from 'react';
import { motion } from 'framer-motion';
import Style from './AudioCard.module.css'


import images from '../../styles/img-copy'
import Image from 'next/image'
import AudioCards from './AudioCards/AudioCards';
import axios from 'axios'
import  Audio  from '@/components/Audio/Audio';




export default function AudioCard() {
  const [state, setState] = useState(
  []
 );
  
    // دستورات یا منطق بیشتر در اینجا قرار می‌گیرند
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
        setState(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  
  }, []);
  
  const [width, setWidth] = useState(0);


    return (
        <div className={Style.slider}>
            <div className={Style.slider_box_box}>
               <div className={Style.slider_box}>
                 <h3>موزیسین های نسل 4</h3>
                 <motion.div className={Style.slider_box_itmes} >
                    <motion.div 
                    className={Style.slider_box_item}
                    drag="x"
                    dragConstraints={{ left: -750 , right: 0 }}
                  >
                    {state.map((el, i)=>(
                        <AudioCards key={i + 1} el={el} i={i}/>
                   ))}
                    </motion.div>
                </motion.div>

              </div>
          </div>
          <Audio />
      </div>
    )
}