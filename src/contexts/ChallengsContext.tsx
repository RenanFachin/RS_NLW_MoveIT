import { createContext, ReactNode, useEffect, useState } from "react";

// importando o arquivo json de desafios
import challenges from '../../challenges.json'

// Cookies
import Cookies from 'js-cookie'

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
    resetChallenge: () => void;
    completeChallenge: () => void;
    experienceToNextLevel: number;
}

export const ChallengeContext = createContext({} as ChallengeContextProps)

interface ChallengeProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

// desta forma o ...rest terá level, currentexperience e challengescompleted dentro
export function ChallengeProvider({ children, ...rest }: ChallengeProviderProps) {

    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)

    // criando um state para armazenar o challenge
    const [activeChallenge, setActiveChallenge] = useState(null)

    // Criando uma constante para gerenciar a quantidad de experiência para o próximo lvl
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


    // Pedindo autorização do usuário para enviar notificação
    useEffect(() => {
        Notification.requestPermission()

    }, [])

    // Salvando os dados do usuário nos cookies
    // Quando houver alteração nos valores dos states de level, currentExperience e challengeCompleted os dados serão salvos nos cookies novamente
    useEffect(() => {
        // Salvando os dados
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleted', String(challengesCompleted))

    }, [level, currentExperience, challengesCompleted])


    function levelUp() {
        setLevel(level + 1)
    }

    // Função que faz o random de um novo desafio
    function startNewChallenge() {
        const totalOfChallenges = challenges.length

        // Capturando um desafio aleatório
        const randomChallengeIndex = Math.floor(Math.random() * totalOfChallenges)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)


        new Audio('/public_notification.mp3').play()
        if (Notification.permission === 'granted') {
            new Notification("Novo desafio");
        }
    }


    // Função chamada quando o usuário clicar em falhei
    function resetChallenge() {
        setActiveChallenge(null)
    }

    // Função chamada quando o usuário clicar em completado com sucesso
    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }

        // Buscando a pontuação total do desafio concluído
        const { amount } = activeChallenge


        // Total de experiência do usuário após completar o desafio
        let finalExperience = currentExperience + amount


        // Caso o usuário ultrapasse o level, fazer ele ficar com a quantia restante
        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
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
                resetChallenge,
                completeChallenge,
                experienceToNextLevel
            }}
        >
            {children}
        </ChallengeContext.Provider>

    )
}