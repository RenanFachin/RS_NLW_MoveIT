import Image from "next/image";

import LevelUp from '../../public/icons/level-up.svg'
import Body from '../../public/icons/body.svg'
import Eye from '../../public/icons/eye.svg'

import { useChallenges } from "@/hooks/useChallenges";
import { useCountDown } from "@/hooks/useCountDown";


export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useChallenges()

    const { resetCountDown } = useCountDown()

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountDown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountDown()
    }

    return (
        <div className="bg-white h-[370px] md:h-full rounded-md shadow-custom py-4 md:py-6 px-8 flex flex-col items-center justify-center text-center">
            {
                activeChallenge ?
                    (
                        <div className="h-full flex flex-col">
                            <header className="text-blue-500 font-semibold text-lg md:text-xl md:px-8 pb-2 md:pb-6 border-b border-b-text-300">
                                Ganhe {activeChallenge.amount} xp
                            </header>

                            <main className="flex-1 flex flex-col items-center justify-center gap-2 md:gap-0 mt-4 md:mt-0">
                                {
                                    activeChallenge.type === 'eye' ?
                                        (
                                            <Image
                                                className=""
                                                src={Eye}
                                                alt=""
                                            />
                                        )
                                        :
                                        (
                                            <Image
                                                className=""
                                                src={Body}
                                                alt=""
                                            />
                                        )
                                }


                                <strong
                                    className="font-semibold text-xl md:text-3xl text-text-title my-2 md:my-4"
                                >
                                    Novo desafio
                                </strong>

                                <p className="text-xs md:text-base leading-relaxed">
                                    {activeChallenge.description}
                                </p>
                            </main>

                            <footer className="grid grid-cols-2 gap-4 mt-2 md:mt-0">
                                <button
                                    type="button"
                                    className="h-8 md:h-12 flex items-center justify-center rounded-lg text-white font-semibold bg-red-500 hover:brightness-90 shadow-lg transition-all"
                                    onClick={handleChallengeFailed}
                                >
                                    Falhei
                                </button>

                                <button
                                    type="button"
                                    className="h-8 md:h-12 flex items-center justify-center rounded-lg text-white font-semibold bg-green-500 hover:brightness-90 shadow-lg transition-all"
                                    onClick={handleChallengeSucceeded}
                                >
                                    Completei
                                </button>

                            </footer>
                        </div>
                    )
                    :
                    (
                        <div className="flex flex-col items-center">
                            <strong className="text-xl md:text-2xl font-medium leading-tight">
                                Finalize um ciclo para receber um desafio
                            </strong>

                            <p className="flex flex-col gap-2 md:gap-4 items-center leading-snug max-w-[70%] mt-6 md:mt-12">
                                <Image
                                    className="mb-2 md:mb-4"
                                    src={LevelUp}
                                    alt="Level up"
                                />

                                Avance de level completando desafio.
                            </p>

                        </div >
                    )
            }
        </div >
    )
}