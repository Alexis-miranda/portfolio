"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default function Portfolio() {
  const skills = [
    "Java",
    "Python",
    "Pandas",
    "Docker",
    "Spring",
    "Spring Boot",
    "JavaScript",
    "kubernetes ",
    "Bootstrap",
    "Figma",
    "HTML/CSS",
    "Git",
    "firebase",
    "Sqlite",
    "MySql",
    "Oracle Sql",
    "microsoft sql server ",
    "MongoDB",
    "PostgreSQL",
    "AWS",
  ]

  const projects = [
    {
      title: "Social network",
      description:
        "A complete social network with user authentication, posts, messaging, profiles, and ephemeral stories..",
      image: "https://github.com/AlexAquinoMiranda/NexusApp/raw/main/app/src/main/res/drawable/logonexus.png",
      technologies: ["Java", "AndroidStudio", "Xml", "Firebase", "Json", "Glide"],
      github: "#",
      live: "#",
    },
    {
      title: "World´s Cup",
      description:
        "an app that simulates a sticker album for the 2022 World Cup.",
      image: "https://github.com/AlexAquinoMiranda/AlbumMundialQtar_22/blob/main/app/src/main/res/drawable/loogo.jpg?raw=true",
      technologies: ["Java", "Sqlite", "Xml"],
      github: "#",
      live: "#",
    },
    {
      title: "User Form",
      description: "basis for learning to build web application forms and perform validations",
      image: "https://th.bing.com/th/id/OIP.6n3tJpcA-ozVS7fCN-JF_gHaHa?w=217&h=217&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      technologies: ["Spring Boot", "Java", "Bootstrap", "Thymeleaf", "MVC"],
      github: "#",
      live: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Portfolio</h1>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-6">
                <Link href="#about" className="hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </Link>
                <Link href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Avatar className="w-32 h-32 mx-auto mb-6">
            <AvatarImage src="/images/profile.jpg" alt="Alexis Miranda Profile" />
            <AvatarFallback className="text-2xl">AM</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Alexis Miranda</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
           a software developer student passionate about technologies
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Button asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Alexis-miranda" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/alexis-aquino-miranda-053b0a252" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="alexaquinomiranda@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                I am a passionate backend developer eager to gain more experience creating applications that solve
                real-world problems. I love working with modern technologies and am always keen to learn new skills.
              </p>
              <p className="text-lg mb-6">When I'm not programming, you can find me exploring new technologies.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Clean Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>DataBases</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Java</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Python</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://th.bing.com/th/id/OIP.y3ASDpPxgcy9kQBtPcbuKQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain" 
                alt="About me"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={project.live} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">Live Demo</span>
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
            to say hi, feel free to reach out!
          </p>

          <Button size="lg" asChild>
            <Link href="alexaquinomiranda@gmailcom">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Alex Miranda. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
