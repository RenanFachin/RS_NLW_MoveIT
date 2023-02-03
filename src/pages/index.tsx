import { ChallengeBox } from "@/components/ChallengeBox";
import { CompletedChallenges } from "@/components/CompletedChallenges";
import { CountDown } from "@/components/CountDown";
import { ExperienceBar } from "@/components/ExperienceBar";
import { Profile } from "@/components/Profile";
import { CountDownProvider } from "@/contexts/CountDownContext";

import Head from "next/head";
import { GetServerSideProps } from 'next'
import { ChallengeProvider } from "@/contexts/ChallengsContext";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";

import Switch from 'react-switch'
import { BsMoon, BsSun } from 'react-icons/bs'


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  const { toggleThemeHandler, actualTheme } = useTheme()

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

                <button>
                  <Switch
                    className='ml-7'
                    onChange={toggleThemeHandler}
                    checked={actualTheme}
                    checkedIcon={
                      <div className='flex items-center justify-center h-full text-white'>
                        <BsMoon />
                      </div>
                    }
                    uncheckedIcon={
                      <div className='flex items-center justify-center h-full text-white'>
                        <BsSun />
                      </div>
                    }
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    offHandleColor='#6F48C9'
                    onHandleColor="#6F48C9"
                    offColor="#9F75FF"
                    onColor="#9F75FF"
                  />
                </button>
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