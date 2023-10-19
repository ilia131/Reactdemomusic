'use client'


import Style from './Hero.module.css'
import Image from 'next/image'
import { useState } from 'react';
import Carousel from 'react-grid-carousel'
import images from  '../../styles/img-copy'




export default function Hero() {
    
    const [index, setIndex] = useState(1);

    return (
        <div className={Style.Carousel}>
        <Carousel cols={4} rows={1}  autoplay={2000} loop>
            <Carousel.Item>
                <Image src={images.NFT1} className={Style.Carousel_image} alt='Item 1'/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={images.NFT2} className={Style.Carousel_image} alt='Item 2'/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={images.NFT3}  className={Style.Carousel_image} alt='Item 3'/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={images.NFT4} className={Style.Carousel_image} alt='Item 4'/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={images.NFT1} className={Style.Carousel_image} alt='Item 5'/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={images.NFT2} className={Style.Carousel_image} alt='Item 6'/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={images.NFT3} className={Style.Carousel_image} alt='Item 7'/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={images.NFT4} className={Style.Carousel_image} alt='Item 8'/>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}