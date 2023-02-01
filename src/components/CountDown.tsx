import { useState, useEffect } from "react"


let countDownTimeout: NodeJS.Timeout;

export function CountDown() {
    const [time, setTime] = useState(25 * 60)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    // Atribuindo cada valor dentro dos box de span
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    const [isActive, setIsActive] = useState(false)

    function startCountDown() {
        setIsActive(true)
    }

    function resetCountDown() {
        clearTimeout(countDownTimeout)
        setIsActive(false)
    }

    useEffect(() => {
        // Se active for true e time for maior que zero
        if (isActive && time > 0) {
            // Executando uma função a cada segundo que passar
            countDownTimeout = setTimeout(() => {
                // Tirando 1 segundo a cada segundo que passar após o a variável active virar true
                setTime(time - 1)
            }, 1000)
        }
    }, [isActive, time]) // Executa quando o active mudar, ou seja, qnd o usuário clicar no botão e quando o time mudar

    return (
        <>
            <div className="flex items-center font-Rajdhani font-semibold text-text-title">
                <div
                    className="flex-1 flex items-center justify-evenly bg-white shadow-custom rounded-md text-9xl text-center"
                >
                    <span className="flex-1 border-r border-r-[#f0f1f3]">
                        {minuteLeft}
                    </span>

                    <span className="flex-1 border-l border-l-[#f0f1f3]">
                        {minuteRight}
                    </span>
                </div>

                <span className="text-8xl mx-2">:</span>

                <div
                    className="flex-1 flex items-center justify-evenly bg-white shadow-custom rounded-md text-9xl text-center"
                >
                    <span className="flex-1 border-r border-r-[#f0f1f3]">
                        {secondLeft}
                    </span>

                    <span className="flex-1 border-l border-l-[#f0f1f3]">
                        {secondRight}
                    </span>
                </div>
            </div>


            {
                isActive ?
                    (
                        <button
                            onClick={resetCountDown}
                            type="button"
                            className="w-full h-20 mt-8 flex items-center justify-center rounded-md bg-white text-text-title text-xl font-semibold hover:bg-red-500 hover:text-white transition-colors"
                        >
                            Abandonar ciclo
                        </button>
                    )
                    :
                    (
                        <button
                            onClick={startCountDown}
                            type="button"
                            className="w-full h-20 mt-8 flex items-center justify-center rounded-md bg-blue-500 text-white text-xl font-semibold hover:bg-blue-600 transition-colors"
                        >
                            Iniciar um ciclo
                        </button>
                    )
            }




        </>
    )
}