'use client';

import { makeStore } from "./store";
import { Provider } from "react-redux";

interface Probs {
    children: React.ReactNode
}


export default function CustomProvider({ children }: Probs ) {
    return <Provider store={makeStore()}>{children}</Provider>

}
