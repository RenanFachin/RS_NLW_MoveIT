import { ChallengeBox } from "@/components/ChallengeBox";
import { CompletedChallenges } from "@/components/CompletedChallenges";
import { CountDown } from "@/components/CountDown";
import { ExperienceBar } from "@/components/ExperienceBar";
import { Profile } from "@/components/Profile";
import { CountDownProvider } from "@/contexts/CountDownContext";

import Head from "next/head";
import { GetServerSideProps } from 'next'
import { ChallengeProvider } from "@/contexts/ChallengsContext";
import { ThemeButton } from "@/components/ThemeButton";


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className="h-screen max-w-4xl mx-auto py-10 px-8 flex flex-col">
        <Head>
          <title>Início | Move.it</title>
        </Head>

        <ExperienceBar />

        <CountDownProvider>
          <section className="mt-16 md:mt-0 flex-1 grid md:grid-cols-2 gap-10 md:gap-24 content-center">
            <div>
              <div className="flex justify-between">
                <Profile />

                <ThemeButton />
              </div>

              <CompletedChallenges />

              <CountDown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>

        </CountDownProvider>
      </div>
    </ChallengeProvider>
  )
}

// getServerSideProps busca as infos antes do carregamento da página
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  // Pegando os dados do cookie
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      // Convertendo de string para number
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}