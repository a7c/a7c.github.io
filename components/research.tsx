import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink } from "lucide-react"

const publications = [
  {
    title: "Oak Story: Improving Learner Outcomes with LLM-Mediated Interactive Narratives",
    authors: "Alan Y. Cheng, Carolyn Q. Zou, Anthony Xie, Matthew Hsu, Felicia Yan, Felicity Huang, David K. Zhang, Arjun Sharma, Rashon Poole, Daniel Wan Rosli, Andrea Cuadra, Roy D. Pea, and James A. Landay",
    journal: "UIST 2025",
    link: "https://dl.acm.org/doi/10.1145/3746059.3747698",
  },
  {
    title: "Scientific and Fantastical: Creating Immersive, Culturally-Relevant Learning Experiences with Augmented Reality and Large Language Models",
    authors: "Alan Y. Cheng*, Meng Guo*, Melissa Ran, Arpit Ranasaria, Arjun Sharma, Anthony Xie, Khuyen N. Le, Bala Vinaithirthan, Shihe (Tracy) Luan, David Thomas Henry Wright, Andrea Cuadra, Roy D. Pea, and James A. Landay",
    journal: "CHI 2024",
    link: "https://dl.acm.org/doi/abs/10.1145/3613904.3642041",
  },
  {
    title: "Brief, Just-in-Time Teaching Tips to Support Computer Science Tutors",
    authors: "Alan Y. Cheng, Ellie Tanimura, Joseph Tey, Andrew C. Wu, and Emma Brunskill",
    journal: "SIGCSE 2024",
    link: "https://dl.acm.org/doi/pdf/10.1145/3626252.3630794",
  },
  {
    title: "Designing Immersive, Narrative-Based Interfaces to Guide Outdoor Learning",
    authors: "Alan Y. Cheng, Jacob Ritchie, Niki Agrawal, Elizabeth Childs, Cyan DeVeaux, Yubin Jee, Trevor Leon, Bethanie Maples, Andrea Cuadra, and James A. Landay",
    journal: "CHI 2023",
    link: "https://dl.acm.org/doi/10.1145/3544548.3581365",
  },
  {
    title: "Teaching Language and Culture with a Virtual Reality Game",
    authors: "Alan Cheng, Lei Yang, and Erik Andersen",
    journal: "CHI 2017",
    link: "https://dl.acm.org/doi/abs/10.1145/3025453.3025857",
  }
]

export function Research() {
  return (
    <section id="research" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Research & <span className="text-primary">Publications</span>
          </h2>
        </div>

        <div className="space-y-12">
          <div className="animate-slide-up">
            <div className="grid gap-4">
              {publications.map((pub, index) => (
                <Card key={index} className="border-border bg-card hover-lift group">
                  <CardContent className="ph-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        {pub.link ? (
                          <a 
                            href={pub.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-semibold text-foreground mb-2 text-pretty group-hover:text-primary transition-colors hover:underline block"
                          >
                            {pub.title}
                          </a>
                        ) : (
                          <h4 className="font-semibold text-foreground mb-2 text-pretty group-hover:text-primary transition-colors">
                            {pub.title}
                          </h4>
                        )}
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                          <span className="font-medium">{pub.authors}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground text-sm mb-3 text">
                          <span className="font-medium">{pub.journal}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
