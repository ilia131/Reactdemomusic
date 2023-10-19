import { useState , ChangeEvent , FormEvent} from "react";
import { useRouter } from "next/navigation";
import { useAppDispath } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { setAuth } from "@/redux/features/authSlice";
import { toast } from 'react-toastify';



export default function useLogin() {
    const router = useRouter();
    const dispatch = useAppDispath();
    const [login, { isLoading }] = useLoginMutation();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {email , password } = formData;

    const onChange = (event : ChangeEvent<HTMLInputElement>) => {
       const {name , value} = event.target;

        setFormData({ ...formData,  [name] : value })
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
       event.preventDefault();

       login({ email , password })
         .unwrap()
         .then(() => {
           dispatch(setAuth())
           toast.success('داشی وارد شو داشی')
           router.push('/')
         })
         .catch(() => {
           toast.error('Failed to log in')
         })
    }

    return {
        email,
        password,
        onChange,
        onSubmit,
        isLoading,
    }
}