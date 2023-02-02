import { ChallengeContext } from "@/contexts/ChallengsContext";
import { useContext } from "react";

export const useChallenges = () => {
    return useContext(ChallengeContext)
}