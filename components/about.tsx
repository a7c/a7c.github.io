import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Lightbulb, FileText, Heart } from "lucide-react"

const highlights = [
  {
    icon: BookOpen,
    title: "Research Focus",
    description: "Curriculum development, educational technology, and inclusive pedagogy",
    color: "text-primary",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Leveraging technology for equitable and accessible learning experiences",
    color: "text-accent",
  },
  {
    icon: FileText,
    title: "Publications",
    description: "Contributing to educational research and evidence-based practices",
    color: "text-primary",
  },
  {
    icon: Heart,
    title: "Community",
    description: "Volunteering with literacy programs and mentoring students",
    color: "text-accent",
  },
]

export function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-slide-up">
            <div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated educator and researcher with a passion for transforming learning experiences through
                  innovative curriculum design and educational technology. My work focuses on creating inclusive,
                  engaging, and effective learning environments that support diverse student populations.
                </p>

                <p>
                  Currently completing my PhD in Education at Stanford University, I specialize in curriculum
                  development, educational technology integration, and inclusive pedagogy. My research examines how
                  technology can be leveraged to create more equitable and accessible learning experiences for all
                  students.
                </p>

                <p>
                  Throughout my academic journey, I've had the privilege of teaching undergraduate and graduate courses,
                  mentoring students, and collaborating with faculty on various research projects. I'm committed to
                  fostering critical thinking, creativity, and lifelong learning in my students.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
