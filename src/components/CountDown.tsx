import Image from "next/image";
import CheckIcon from '../../public/icons/checkIcon.svg'
import { useCountDown } from "@/hooks/useCountDown";



export function CountDown() {

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountDown,
        startCountDown
    } = useCountDown()

    // Atribuindo cada valor dentro dos box de span
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')


    return (
        <>
            <div className="flex items-center font-Rajdhani font-semibold text-text-title">
                <div
                    className="flex-1 flex items-center justify-evenly bg-white shadow-custom rounded-md text-7xl md:text-9xl text-center"
                >
                    <span className="flex-1 border-r border-r-[#f0f1f3]">
                        {minuteLeft}
                    </span>

                    <span className="flex-1 border-l border-l-[#f0f1f3]">
                        {minuteRight}
                    </span>
                </div>

                <span className="text-6xl mx-1 md:text-8xl md:mx-2">:</span>

                <div
                    className="flex-1 flex items-center justify-evenly bg-white shadow-custom rounded-md text-7xl md:text-9xl text-center"
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
                hasFinished ?
                    (
                        <button
                            disabled
                            className="w-full h-12 md:h-20 mt-5 md:mt-8 flex items-center justify-center rounded-md disabled:bg-white disabled:text-text-500 text-lg md:text-xl font-semibold transition-colors disabled:cursor-not-allowed border-b-4 border-b-green-500 gap-4"
                        >
                            Ciclo encerrado

                            <Image
                                src={CheckIcon}
                                alt={'Imagem de um check'}
                            />

                        </button>
                    )

                    :

                    (
                        <>
                            {
                                isActive ?
                                    (
                                        <button
                                            onClick={resetCountDown}
                                            type="button"
                                            className="w-full h-12 md:h-20 mt-5 md:mt-8 flex items-center justify-center rounded-md bg-white text-text-title text-lg md:text-xl font-semibold hover:bg-red-500 hover:text-white transition-colors"
                                        >
                                            Abandonar ciclo
                                        </button>
                                    )
                                    :
                                    (
                                        <button
                                            onClick={startCountDown}
                                            type="button"
                                            className="w-full h-12 md:h-20 mt-5 md:mt-8 flex items-center justify-center rounded-md bg-blue-500 text-white text-lg md:text-xl font-semibold hover:bg-blue-600 transition-colors"
                                        >
                                            Iniciar um ciclo
                                        </button>
                                    )
                            }
                        </>
                    )
            }






        </>
    )
}