import Style from './HeroSection.module.css'
import images from '../../styles/img-copy'
import Image from 'next/image'
import {BsSearch ,BsInstagram , BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
export default function HeroSection() {
   return (
     <div className={Style.HeroSection}>
        <div className={Style.HeroSection_box}>
           
            <div className={Style.HeroSection_box_left}>
               
               <div className={Style.HeroSection_box_left_left}>
                  <button className=' p-2 rounded-e-md'><BsSearch className={Style.icons1}/></button>
                  <button className=' p-2 rounded-e-md'><BsInstagram className={Style.icons1}/></button>
                  <button className=' p-2 rounded-e-md'><BsTwitter className={Style.icons1}/></button>
                  <button className=' p-2 rounded-e-md'><BsGithub className={Style.icons1}/></button>
               </div> 
               <div className={Style.HeroSection_box_right_right}>
                     <h1>کمپانی ونگارد</h1>
                     <p>کمپانی ونگارد برای حمایت از هنرمندان تاسیس شده و تمام سعی این کمپانی حمایت از هنرمندان است</p>
                </div>
            </div>
            <div className={Style.HeroSection_box_right}>
                <Image src={images.Hero} className={Style.image3} alt='vg' width={400} height={800}/>
            </div>
        </div>
     </div>
   )
}