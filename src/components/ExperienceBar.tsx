import { useChallenges } from "@/hooks/useChallenges"

export function ExperienceBar() {

    const { currentExperience, experienceToNextLevel } = useChallenges()

    const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel

    return (
        <header className="flex items-center">
            <span className="text-xs md:text-base md:font-normal">
                0 xp
            </span>

            <div className="flex-1 h-1 rounded-md bg-text-300 mx-3 md:mx-6 relative">

                <div
                    className="h-1 rounded-md bg-green-500"
                    // Esta estilização está inline por motivos de ser um valor que vai se alterar durante o uso da aplicação
                    style={{ width: `${percentToNextLevel}%` }}
                />

                <span
                    className="text-green-500 font-bold text-xs md:text-base absolute top-3 -translate-x-1/2"
                    // Esta estilização está inline por motivos de ser um valor que vai se alterar durante o uso da aplicação
                    style={{ left: `${percentToNextLevel}%` }}
                >
                    {currentExperience} xp
                </span>

            </div>

            <span className="text-xs md:text-base font-normal">
                {experienceToNextLevel} xp
            </span>
        </header>
    )
}