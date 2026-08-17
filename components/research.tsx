import { ExternalLink } from "lucide-react"

function renderAuthors(authors: string) {
  const parts = authors.split(/(Alan Y\. Cheng\*?|Alan Cheng)/g)
  return parts.map((part, i) =>
    /^Alan (Y\. )?Cheng\*?$/.test(part) ? (
      <span key={i} className="font-semibold text-primary">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

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
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Research & <span className="text-primary">Publications</span>
          </h2>
        </div>

        <ol className="animate-slide-up">
          {publications.map((pub, index) => (
            <li
              key={index}
              className="group grid grid-cols-1 gap-2 border-border/60 py-8 [&:not(:first-child)]:border-t sm:grid-cols-[7rem_1fr] sm:gap-8"
            >
              <div className="pt-0.5">
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {pub.journal}
                </span>
              </div>

              <div>
                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-1.5 text-lg font-semibold leading-snug text-foreground text-pretty transition-colors hover:text-primary"
                  >
                    <span>{pub.title}</span>
                    <ExternalLink className="mt-1 h-4 w-4 flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ) : (
                  <h3 className="text-lg font-semibold leading-snug text-foreground text-pretty">
                    {pub.title}
                  </h3>
                )}

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {renderAuthors(pub.authors)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
