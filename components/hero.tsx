"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, FileText, Sparkles, Mail } from "lucide-react"
import { useEffect, useRef } from "react"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const circles = heroRef.current.querySelectorAll(".floating-circle")
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      circles.forEach((circle, index) => {
        const element = circle as HTMLElement
        const speed = 0.02 + index * 0.01 // Different speeds for each circle
        const x = (clientX - innerWidth / 2) * speed
        const y = (clientY - innerHeight / 2) * speed

        element.style.transform = `translate(${x}px, ${y}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-circle absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float transition-transform duration-300 ease-out"></div>
        <div className="floating-circle absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-full animate-float-delayed transition-transform duration-300 ease-out"></div>
        <div className="floating-circle absolute bottom-32 left-20 w-12 h-12 bg-primary/15 rounded-full animate-float-delayed-2 transition-transform duration-300 ease-out"></div>
        <div className="floating-circle absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full animate-float transition-transform duration-300 ease-out"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/30 flex items-center justify-center">
              <img 
                src="/alan.jpeg" 
                alt="Alan Cheng"
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              {/* <Sparkles className="h-4 w-4" /> */}
              I'm on the job market for the 2025-26 cycle!
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              Hi, I'm <span className="text-primary">Alan Cheng</span>!
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light">
              Computer Science Educator • HCI Researcher
            </p>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            I'm a <span className="font-bold text-primary">PhD candidate in Computer Science</span> at Stanford University, advised by <span className="text-primary">James Landay</span> and <span className="text-primary">Chris Piech</span>.
            I also collaborate with <span className="text-primary">Roy Pea</span> in the Graduate School of Education.
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            I'm passionate about teaching and incorporating evidence-based practices into my work.
            I like to design and build engaging, interactive learning technologies, which is the focus of my research.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift" asChild>
              <a href="mailto:ayc@[instutition]">
                <Mail className="mr-2 h-4 w-4" />
                ayc@[institution]
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-lift bg-transparent"
              asChild
            >
              <a href="/alancheng_cv_09292025.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                CV
              </a>
            </Button>
          </div>

          <div className="pt-8">
            <a
              href="#research"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowDown className="h-5 w-5 animate-bounce group-hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
