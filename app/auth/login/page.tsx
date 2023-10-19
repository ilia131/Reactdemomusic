import Link from 'next/link';

import { LoginForm } from '@/components/forms';
import { Metadata } from 'next';
import Style from './login.module.css'

export const metadata: Metadata = {
    title : 'لاگین پیچ | ونگارد',
    description: 'ونگارد',
}

export default function Page() {
   

    return (
        <div className={Style.login}>
          <div className={Style.login_box}>
        
          <h2 className={Style.login_box_h2}>
            صفحه ی ورود
          </h2>
      

         <LoginForm />

          <p className="mt-10 text-center text-sm text-gray-500">
            اکانت نداری؟{' '}
            <Link href="/auth/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                اینجا وارد شو
            </Link>
          </p>  
           </div>
        </div>
     
    )
}