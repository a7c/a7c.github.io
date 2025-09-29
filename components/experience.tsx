import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    period: "2021 — Present",
    title: "PhD Candidate & Teaching Assistant",
    organization: "Stanford University",
    description:
      "Conducting dissertation research on inclusive curriculum design while teaching undergraduate education courses. Mentoring 15+ students and collaborating on interdisciplinary research projects.",
    skills: ["Curriculum Development", "Educational Research", "Student Mentoring", "Course Design"],
  },
  {
    period: "2019 — 2021",
    title: "Master's Student & Research Assistant",
    organization: "University of California, Berkeley",
    description:
      "Completed Master's in Education with focus on educational technology. Assisted with research on digital learning platforms and their impact on student engagement.",
    skills: ["Educational Technology", "Data Analysis", "Research Methods", "Academic Writing"],
  },
  {
    period: "2017 — 2019",
    title: "High School Teacher",
    organization: "Lincoln High School",
    description:
      "Taught AP Psychology and Introduction to Education courses. Developed innovative curriculum incorporating technology and project-based learning approaches.",
    skills: ["Classroom Management", "Lesson Planning", "Assessment Design", "Student Support"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-48 flex-shrink-0">
                    <p className="text-sm font-medium text-accent">{exp.period}</p>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-muted-foreground font-medium">{exp.organization}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
