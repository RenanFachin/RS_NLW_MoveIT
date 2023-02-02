import { ChallengeBox } from "@/components/ChallengeBox";
import { CompletedChallenges } from "@/components/CompletedChallenges";
import { CountDown } from "@/components/CountDown";
import { ExperienceBar } from "@/components/ExperienceBar";
import { Profile } from "@/components/Profile";
import { CountDownProvider } from "@/contexts/CountDownContext";

import Head from "next/head";

export default function Home() {
  return (
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
  )
}
