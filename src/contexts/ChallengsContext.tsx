import { createContext, ReactNode, useState } from "react";

// importando o arquivo json de desafios
import challenges from '../../challenges.json'

//Tipando o que vem do arquivo JSON para depois atribuir no activeChallenge
interface Challenge {
    type?: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeContextProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
}

export const ChallengeContext = createContext({} as ChallengeContextProps)

interface ChallengeProviderProps {
    children: ReactNode;
}

export function ChallengeProvider({ children }: ChallengeProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    // criando um state para armazenar o challenge
    const [activeChallenge, setActiveChallenge] = useState<Challenge>()

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const totalOfChallenges = challenges.length

        // Capturando um desafio aleatório
        const randomChallengeIndex = Math.floor(Math.random() * totalOfChallenges)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
    }

    return (
        <ChallengeContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                activeChallenge,
                levelUp,
                startNewChallenge,
            }}
        >
            {children}
        </ChallengeContext.Provider>

    )
}