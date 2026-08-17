import { Button } from "@/components/ui/button"
import { ArrowDown, FileText, Mail } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-x-clip px-4 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl space-y-12 py-24">
        <div className="inline-flex items-start gap-2.5 rounded-2xl bg-primary/15 px-4 py-3 text-sm font-semibold text-primary animate-fade-in">
          <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
          I'll be starting as an Assistant Teaching Professor at Cornell Information Science in July 2027!
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="order-2 space-y-7 text-center animate-fade-in lg:order-1 lg:text-left">
          <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Hi, I'm <span className="text-primary">Alan Cheng</span>
            <span className="text-primary">!</span>
          </h1>

          <div className="mx-auto max-w-xl space-y-4 lg:mx-0">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              I'm a <span className="font-semibold text-primary">PhD candidate in Computer Science</span> at Stanford University, advised by{" "}
              <span className="font-medium text-foreground">James Landay</span> and{" "}
              <span className="font-medium text-foreground">Chris Piech</span>. I also collaborate with{" "}
              <span className="font-medium text-foreground">Roy Pea</span> in the Graduate School of Education.
            </p>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              I'm passionate about teaching and building engaging, interactive learning technologies.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row lg:justify-start">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift" asChild>
              <a href="mailto:ayc@[institution]">
                <Mail className="mr-2 h-4 w-4" />
                ayc@[institution]
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground hover-lift"
              asChild
            >
              <a href="/alancheng_cv_09292025.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                CV
              </a>
            </Button>
          </div>
        </div>

        <div className="order-1 flex justify-center animate-fade-in lg:order-2">
          <div className="relative">
            <div className="absolute -inset-3 rotate-6 rounded-[2.75rem] bg-accent/20" />
            <div className="absolute -inset-3 -rotate-3 rounded-[2.75rem] border-2 border-primary/40" />
            <img
              src="/alan.jpeg"
              alt="Alan Cheng"
              className="relative h-64 w-64 rounded-[2.25rem] object-cover shadow-lg sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
            <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-primary" />
            <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-accent" />
          </div>
        </div>
        </div>
      </div>

      <a
        href="#research"
        aria-label="Scroll to research"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary animate-float"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
