import { useChallenges } from "@/hooks/useChallenges"

export function CompletedChallenges() {

    const { challengesCompleted } = useChallenges()

    return (
        <div
            className="flex items-center justify-between my-14 pb-4 border-b-2 border-b-[#d7d8da] font-medium  font-Inter"
        >
            <span className="text-xl">
                Desafios completos
            </span>

            <span className="text-2xl">
                {challengesCompleted}
            </span>
        </div>
    )
}