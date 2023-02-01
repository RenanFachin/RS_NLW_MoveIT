import { ExperienceBar } from "@/components/ExperienceBar";
import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <div className="h-screen max-w-4xl mx-auto py-10 px-8 flex flex-col">
      <ExperienceBar />

      <section className="flex-1 grid grid-cols-2 gap-24 content-center">
        <div>
          <Profile />
        </div>

        <div></div>
      </section>
    </div>
  )
}
