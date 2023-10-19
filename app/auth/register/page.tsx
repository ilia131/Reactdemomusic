import Link from 'next/link';

import { RegisterForm } from '@/components/forms';
import { Metadata } from 'next';
import Style from './register.module.css'

export const metadata: Metadata = {
    title : 'ثبت نام | ونگارد',
    description: 'ونگارد',
}

export default function Page() {
   

    return (
        <div className={Style.login}>
        <div className={Style.login_box}>
        
          <h2 className={Style.register_box_box}>
            اینجا ثبت نام کن
          </h2>
      

         <RegisterForm />

          <p className="mt-10 text-center text-sm text-gray-500">
            اکانت داری؟{' '}
            <Link href="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                اینجا وارد شو
            </Link>
          </p>
        </div>
       </div>
    )
}