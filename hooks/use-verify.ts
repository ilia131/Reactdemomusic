import { useEffect } from "react";
import { setAuth  , finishInitialLoad} from "@/redux/features/authSlice";
import { useVerifyMutation } from "@/redux/features/authApiSlice";
import { useAppDispath } from "@/redux/hooks";




export default function useVerify() {
   
    const dispatch = useAppDispath();

    const [verify] = useVerifyMutation()

    useEffect(() => {
        verify(undefined)
         .unwrap()
         .then(() => {
            dispatch(setAuth())
         })  
         .finally(() => {
            dispatch(finishInitialLoad())
         })  
    }, []);

}