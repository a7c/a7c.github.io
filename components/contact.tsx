import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sarah.chen@stanford.edu",
    href: "mailto:sarah.chen@stanford.edu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Stanford, CA",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sarahchen",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sarahchen",
  },
  {
    icon: FileText,
    label: "CV",
    href: "/cv.pdf",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm always interested in discussing teaching opportunities, research collaborations, and innovative
            approaches to education. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium text-foreground hover:text-accent transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <Button className="w-full justify-start bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                  <Mail className="mr-3 h-5 w-5" />
                  Send Email
                </Button>

                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="flex flex-col items-center gap-2 h-auto py-4 bg-transparent"
                      asChild
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <link.icon className="h-5 w-5" />
                        <span className="text-xs">{link.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Available for teaching positions starting Fall 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
