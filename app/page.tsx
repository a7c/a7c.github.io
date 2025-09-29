import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Research } from "@/components/research"
import { Teaching } from "@/components/teaching"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        {/*<Experience />*/}
        <Research />
        <Teaching />
        {/*<Contact />*/}
      </main>
    </div>
  )
}
