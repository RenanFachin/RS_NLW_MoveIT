import Image from "next/image";

import LevelUp from '../../public/icons/level-up.svg'
import Body from '../../public/icons/body.svg'


export function ChallengeBox() {
    const hasActiveChallenge = true

    return (
        <div className="bg-white h-full rounded-md shadow-custom py-6 px-8 flex flex-col items-center justify-center text-center">
            {
                hasActiveChallenge ?
                    (
                        <div className="h-full flex flex-col">
                            <header className="text-blue-500 font-semibold text-xl px-8 pb-6 border-b border-b-text-300">
                                Ganhe 400 xp
                            </header>

                            <main className="flex-1 flex flex-col items-center justify-center">
                                <Image
                                    className=""
                                    src={Body}
                                    alt=""
                                />

                                <strong
                                    className="font-semibold text-3xl text-text-title my-4"
                                >
                                    Novo desafio
                                </strong>

                                <p className="leading-relaxed">
                                    Levante e faça uma caminhada de 3 minutos.
                                </p>
                            </main>

                            <footer className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    className="h-12 flex items-center justify-center rounded-lg text-white font-semibold bg-red-500 hover:brightness-90 shadow-lg transition-all"
                                    onClick={() => { }}
                                >
                                    Falhei
                                </button>

                                <button
                                    type="button"
                                    className="h-12 flex items-center justify-center rounded-lg text-white font-semibold bg-green-500 hover:brightness-90 shadow-lg transition-all"
                                    onClick={() => { }}
                                >
                                    Completei
                                </button>

                            </footer>
                        </div>
                    )
                    :
                    (
                        <div className="flex flex-col items-center">
                            <strong className="text-2xl font-medium leading-tight">
                                Finalize um ciclo para receber um desafio
                            </strong>

                            <p className="flex flex-col gap-4 items-center leading-snug max-w-[70%] mt-12">
                                <Image
                                    className="mb-4"
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