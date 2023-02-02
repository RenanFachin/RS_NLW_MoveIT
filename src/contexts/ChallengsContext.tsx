import { createContext } from "react";

interface Props {
    level: number;
    levelUp: () => void;
}

export const ChallengeContext = createContext({} as Props)

