"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, Award, ChevronDown, ChevronUp, GraduationCap, Clock, Star } from "lucide-react"
import { useState } from "react"

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
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null)

  const toggleCourse = (index: number) => {
    setExpandedCourse(expandedCourse === index ? null : index)
  }

  return (
    <section id="teaching" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Teaching <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="space-y-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Courses Taught (as Instructor of Record)</h3>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <Card key={index} className="border-border bg-card hover-lift overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg text-pretty">{`${course.code}: ${course.title}`}</CardTitle>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(course.semester)
                            ? course.semester.map((sem, idx) => (
                                <Badge key={idx} variant="secondary">{sem}</Badge>
                              ))
                            : (
                              <Badge variant="secondary">{course.semester}</Badge>
                            )}
                          <Badge variant="outline" className="border-accent/30 text-accent">
                            <Users className="h-3 w-3 mr-1" />
                            {course.enrollment}
                          </Badge>
                        </div>
                      </div>
                      {/* <div className="text-right space-y-1">
                        <div className="flex items-center gap-1 text-accent">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleCourse(index)}
                          className="text-primary hover:text-primary/80"
                        >
                          {expandedCourse === index ? (
                            <>
                              Less <ChevronUp className="h-4 w-4 ml-1" />
                            </>
                          ) : (
                            <>
                              Details <ChevronDown className="h-4 w-4 ml-1" />
                            </>
                          )}
                        </Button>
                      </div> */}
                    </div>
                  </CardHeader>

                  {/* <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed mb-4">{course.description}</p>

                    {expandedCourse === index && (
                      <div className="space-y-6 pt-4 border-t border-border animate-slide-up">
                        <div>
                          <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            Key Topics Covered
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {course.topics.map((topic, topicIndex) => (
                              <Badge key={topicIndex} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Clock className="h-4 w-4 text-accent" />
                            Major Assignments
                          </h5>
                          <ul className="space-y-2">
                            {course.assignments.map((assignment, assignmentIndex) => (
                              <li
                                key={assignmentIndex}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                {assignment}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Award className="h-4 w-4 text-primary" />
                            Learning Outcomes
                          </h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">{course.outcomes}</p>
                        </div>
                      </div>
                    )}
                  </CardContent> */}
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
