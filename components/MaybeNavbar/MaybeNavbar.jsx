'use client'


import React, { useEffect  , useState } from 'react'
import { useRouter } from 'next/router'
const MaybeNavbar = ({children}) => {
    const router = useRouter;

    const {showNavBar , setShowNavBar} = useState(false) 

    useEffect(() => {
        console.log('this is router ', router)
        if (router.pathname == '/auth/login') {
            if (router.pathname === '/auth/login') {
                setShowNavBar(false)
            } else {
                setShowNavBar(true)
            }
        }
    }, [router])
  return (
    <div>{showNavBar && children}</div>
  )
}

export default MaybeNavbar