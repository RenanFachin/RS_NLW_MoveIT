import { ChallengeBox } from "@/components/ChallengeBox";
import { CompletedChallenges } from "@/components/CompletedChallenges";
import { CountDown } from "@/components/CountDown";
import { ExperienceBar } from "@/components/ExperienceBar";
import { Profile } from "@/components/Profile";
import { CountDownProvider } from "@/contexts/CountDownContext";

import Head from "next/head";
import { GetServerSideProps } from 'next'
import { ChallengeProvider } from "@/contexts/ChallengsContext";



export default function Home(props) {

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
          <section className="flex-1 grid grid-cols-2 gap-24 content-center">
            <div>
              <Profile />

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