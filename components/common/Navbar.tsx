'use client'

import Style from '../../styles/Navbar.module.css'
import Link from 'next/link'
import { useRouter , usePathname} from 'next/navigation'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useAppSelector , useAppDispath } from '@/redux/hooks';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import { logout as setLogout } from '@/redux/features/authSlice';
import { NavLink } from '@/components/common';





export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname();
  const dispatch = useAppDispath();

  const [logout] = useLogoutMutation()

  const { isAuthenticated } = useAppSelector(state => state.auth);

  const handleLogout = () => {
    logout(undefined)
       .unwrap()
       .then(() => {
         dispatch(setLogout())
       })
       .finally(() => {
          router.push('/')
       })
  }

  const isSelected = (path : string) => pathname == path ? true : false;

  const authLinks = (isMobile: boolean) => (
    <>
    <NavLink isMobile={isMobile} onClick={handleLogout}>
       خروج
    </NavLink>
 </>
  );
 

  const guestLinks = (isMobile: boolean) => (
    <>
       <NavLink
          isSelected={isSelected('/auth/login')}
          isMobile={isMobile}
          href ='/auth/login'
   
       >
          ورود
       </NavLink>
       <NavLink
             isSelected={isSelected('/auth/register')}
             isMobile={isMobile}
             href ='/auth/register'  
       >
          ثبت نام
       </NavLink>
    </>
  )

   return (
    <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
         <div className={Style.Navbar}>
         <div className={Style.Navbar_container}>
             <div className={Style.Navbar_container_box}>
                 <div className={Style.Navbar_container_box_right}>
                     <p className='text-black'>ونگارد موزیک</p>
                 </div>
                 {/* Center Conteiner*/}
                 <div className={Style.Navbar_container_box_center}>
                     <div className={Style.Navbar_container_box_center_box}>
                     <div className={Style.Navbar_link}>
                    <Link className='text-white no-underline' href="#">
                      <p>تکس</p>
                    </Link>
                      </div>
                    <div className={Style.Navbar_link}>
                       <Link className='text-white no-underline' href="#">
                          <p>موزیک</p>
                        </Link>
                       </div>
                    <div className={Style.Navbar_link}>
                         <Link className='text-white no-underline' href="#">
                          <p>درباره ی ما</p>
                         </Link>
                       </div>
                    <div className={Style.Navbar_link}>
                    <Link className='text-white no-underline' href="#">
                      <p>خانه</p>
                    </Link>
                       </div>
                    </div>
                 </div>
                 {/* Left Container */}
                 <div className={Style.Navbar_container_box_left}>
                     
                      {isAuthenticated ? authLinks(false)  : guestLinks(false)}
                   
                 </div>
                 <Disclosure.Panel className="sm:hidden">
                 <div className="space-y-1 px-2 pb-3 pt-2 bg-white ">
                   {isAuthenticated ? authLinks(true) : guestLinks(true)}
                 </div>
                 </Disclosure.Panel>
             </div>
         </div>
     </div>
        )}
      </Disclosure>
   )
}