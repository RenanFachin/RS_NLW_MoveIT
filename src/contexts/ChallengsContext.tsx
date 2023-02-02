import { createContext, ReactNode, useState } from "react";

interface ChallengeContextProps {
    level: number;
    levelUp: () => void;
}

export const ChallengeContext = createContext({} as ChallengeContextProps)

interface ChallengeProviderProps {
    children: ReactNode;
}

export function ChallengeProvider({ children }: ChallengeProviderProps) {
    const [level, setLevel] = useState(1)

    function levelUp() {
        setLevel(level + 1)
    }

    return (
        <ChallengeContext.Provider value={{ level, levelUp }}>
            {children}
        </ChallengeContext.Provider>

    )
}