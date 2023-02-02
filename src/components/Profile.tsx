import { ChallengeContext } from "@/contexts/ChallengsContext"
import Image from "next/image"
import { useContext } from "react"


import Level from '../../public/icons/level.svg'

export function Profile() {

    return (
        <div className="flex items-center font-Inter">

            <Image
                src={'https://github.com/RenanFachin.png'}
                alt={'Imagem do usuário'}
                width={88}
                height={88}
                className="rounded-full"
            />

            <div className="ml-6">
                <strong className="text-2xl font-semibold text-text-title">
                    Renan Fachin
                </strong>

                <p className="text-base mt-2 flex">
                    <Image
                        src={Level}
                        alt={'Level'}
                        className="mr-2"
                    />

                    Level 1
                </p>
            </div>

        </div>
    )
}