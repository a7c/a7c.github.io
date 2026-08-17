import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"

const courses = [
  {
    title: "Cross-Platform Mobile Development",
    code: "CS 147L",
    enrollment: "125-160 students", 
    semester: ["Autumn 2023", "Autumn 2024", "Autumn 2025"],
    description:
      "Programming course for undergraduate and graduate students covering the foundations of cross-platform mobile development in React Native.",
    // rating: "4.8/5.0",
    // topics: ["Cognitive Development", "Learning Theories", "Motivation", "Assessment Strategies"],
    // assignments: ["Research Paper on Learning Styles", "Case Study Analysis", "Teaching Philosophy Reflection"],
    // outcomes:
    //   "Students develop understanding of how psychological principles apply to educational settings and can design age-appropriate learning activities.",
  },
  {
    title: "Mathematical Foundations of Computing",
    code: "CS 103",
    enrollment: "116 students",
    semester: ["Summer 2021"],
    description:
      "Foundational course covering discrete mathematics and introductory computer science theory, required for all CS majors.",
    },
]

export function Teaching() {
  return (
    <section id="teaching" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Teaching <span className="text-primary">Experience</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">Courses taught as Instructor of Record</p>
        </div>

        <ol className="animate-slide-up">
          {courses.map((course, index) => (
            <li
              key={index}
              className="grid grid-cols-1 gap-2 border-border/60 py-8 [&:not(:first-child)]:border-t sm:grid-cols-[7rem_1fr] sm:gap-8"
            >
              <div className="flex flex-col gap-2 pt-0.5">
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {course.code}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(Array.isArray(course.semester) ? course.semester : [course.semester]).map(
                    (sem, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs font-normal text-muted-foreground">
                        {sem}
                      </Badge>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold leading-snug text-foreground text-pretty">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  <Users className="h-3.5 w-3.5" />
                  {course.enrollment}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
