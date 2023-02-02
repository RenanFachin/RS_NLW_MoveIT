import { useChallenges } from "@/hooks/useChallenges";
import { createContext, ReactNode, useEffect, useState } from "react";

interface CountDownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;
}

export const CountDownContext = createContext({} as CountDownContextData)

interface CountDownProviderProps {
    children: ReactNode;
}


let countDownTimeout: NodeJS.Timeout;
const totalTimeCountDown = 0.1 * 60

export function CountDownProvider({ children }: CountDownProviderProps) {

    const { startNewChallenge } = useChallenges()


    const [time, setTime] = useState(totalTimeCountDown)
    const [isActive, setIsActive] = useState(false)

    // Mostrando um modal a partir da condição deste estado
    const [hasFinished, setHasFinished] = useState(false)


    const minutes = Math.floor(time / 60)
    const seconds = time % 60


    function startCountDown() {
        setIsActive(true)
    }

    function resetCountDown() {
        clearTimeout(countDownTimeout)
        setIsActive(false)
        setTime(totalTimeCountDown)
    }

    useEffect(() => {
        // Se active for true e time for maior que zero
        if (isActive && time > 0) {
            // Executando uma função a cada segundo que passar
            countDownTimeout = setTimeout(() => {
                // Tirando 1 segundo a cada segundo que passar após o a variável active virar true
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)

            // Disparando um novo desafio com o context
            startNewChallenge()
        }
    }, [isActive, time]) // Executa quando o active mudar, ou seja, qnd o usuário clicar no botão e quando o time mudar


    return (
        <CountDownContext.Provider
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountDown,
                resetCountDown
            }}
        >
            {children}
        </CountDownContext.Provider>
    )
}