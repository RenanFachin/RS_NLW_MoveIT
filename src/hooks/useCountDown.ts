import { CountDownContext } from "@/contexts/CountDownContext";
import { useContext } from "react";

export const useCountDown = () => {
    return useContext(CountDownContext)
}