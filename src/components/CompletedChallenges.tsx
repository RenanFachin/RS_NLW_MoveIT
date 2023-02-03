import { useChallenges } from "@/hooks/useChallenges"

export function CompletedChallenges() {

    const { challengesCompleted } = useChallenges()

    return (
        <div
            className="flex items-center justify-between my-8 md:my-14 pb-4 border-b-2 border-b-[#d7d8da] font-medium font-Inter dark:text-white"
        >
            <span className="md:text-xl">
                Desafios completos
            </span>

            <span className="md:text-2xl text-blue-600 font-bold dark:text-[#6F48C9]">
                {challengesCompleted}
            </span>
        </div>
    )
}