import { createContext, ReactNode, useState } from "react";

interface ChallengeContextProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
}

export const ChallengeContext = createContext({} as ChallengeContextProps)

interface ChallengeProviderProps {
    children: ReactNode;
}

export function ChallengeProvider({ children }: ChallengeProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    function levelUp() {
        setLevel(level + 1)
    }

    return (
        <ChallengeContext.Provider value={{ level, currentExperience, challengesCompleted, levelUp }}>
            {children}
        </ChallengeContext.Provider>

    )
}