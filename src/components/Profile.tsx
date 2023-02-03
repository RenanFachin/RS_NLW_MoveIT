import { useChallenges } from "@/hooks/useChallenges"
import Image from "next/image"

import Level from '../../public/icons/level.svg'

export function Profile() {

    const { level } = useChallenges()

    return (
        <div className="flex items-center font-Inter">

            <Image
                src={'https://github.com/RenanFachin.png'}
                alt={'Imagem do usuário'}
                width={88}
                height={88}
                className="rounded-full w-16 h-16 md:w-24 md:h-24"
            />

            <div className="ml-4 md:ml-6">
                <strong className="text-lg md:text-2xl font-semibold text-text-title dark:text-white">
                    Renan Fachin
                </strong>

                <p className="text-xs mt-1 md:text-base md:mt-2 flex dark:text-white">
                    <Image
                        src={Level}
                        alt={'Level'}
                        className="mr-1 md:mr-2"
                    />

                    Level {level}
                </p>
            </div>

        </div>
    )
}