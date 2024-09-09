"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RpkScvnERwk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Contact } from "../components"
import profileData from "../data/portfolioData.json"
import { useState } from "react"
import Component from "@/components/main";

export default function Home() {
  const {introduction, workExperience, projects, education, skills} = profileData

  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => {
    setReadMore((prevState) => !prevState);
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-background sticky top-0 z-50 px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BriefcaseIcon className="h-6 w-6" />
          <span className="sr-only">Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Bio
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Skills
          </Link>
          <Link href="#work" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Work
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>

      <section id="bio" className="w-full py-8 md:py-12 lg:py-18 bg-background">
        <div className="container px-4 md:px-6 flex items-start justify-center space-x-8 max-w-[900px] mx-auto">
          {/* Image Container */}
          <div className="w-1/2 "> 
            <Image
              src="/me.jpg"
              width={400}
              height={400}
              alt="Edgar Leung"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          
          {/* Text Content */}
          <div className="w-1/2 space-y-6">
            <div className="space-y-2 text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{introduction.name}</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {introduction.summary}
              </p>
              
              {/* Read More Toggle Button */}
              <button className="underline" onClick={toggleReadMore}>
                {readMore ? "Read Less \u2B06" : "Read More \u2B07"}
              </button>

              {/* Read More Content */}
              {readMore && (
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {introduction.More}
                </p>
              )}
            </div>

            {/* Get in Touch Link */}
            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-200">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center max-w-[900px] mx-auto">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the key technologies and tools I work with.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-2">
              <CodeIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Front-end Development</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills[0].items.map((item, idx) => (
                  <span key={idx} className="bg-muted-foreground text-white text-md px-2 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <DatabaseIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Back-end Development</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills[1].items.map((item, idx) => (
                  <span key={idx} className="bg-muted-foreground text-white text-md px-2 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <PenToolIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Tools and Workflows</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills[0].items.map((item, idx) => (
                  <span key={idx} className="bg-muted-foreground text-white text-md px-2 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center max-w-[900px] mx-auto">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here's a summary of my professional background.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-5xl gap-6 py-12">
            <div className="flex flex-row space-x-4 min-h-full">
              <div className="rounded-lg overflow-hidden w-1/2 h-full flex items-center justify-center">
                <Image
                  src={workExperience[0].image}
                  width={550}
                  height={310}
                  alt="Full-Stack Developer Icon"
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
              
              {/* Text Section */}
              <div className="w-1/2 flex flex-col justify-center text-left pl-4"> {/* Adjusted alignment and added padding */}
                <div>
                  <h3 className="text-xl font-bold">{workExperience[0].title}</h3>
                  <p className="text-muted-foreground mb-2">{workExperience[0].project + " | " + workExperience[0].period}</p>
                  <p className="text-muted-foreground">
                    {workExperience[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional job entries */}
            <div className="flex flex-row space-x-4 min-h-full">
              {/* Image Section */}
              <div className="rounded-lg overflow-hidden w-1/2 h-full flex items-center justify-center">
                <Image
                  src={workExperience[1].image}
                  width={550}
                  height={310}
                  alt="Web Developer Intern Icon"
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              {/* Text Section */}
              <div className="w-1/2 flex flex-col justify-center text-left pl-4"> {/* Adjusted alignment and added padding */}
                <div>
                  <h3 className="text-xl font-bold">{workExperience[1].title}</h3>
                  <p className="text-muted-foreground mb-2">{workExperience[1].project + " | " + workExperience[1].period}</p>
                  <p className="text-muted-foreground">
                    {workExperience[1].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Last job entry */}
            <div className="flex flex-row space-x-4 min-h-full">
              {/* Image Section */}
              <div className="rounded-lg overflow-hidden w-1/2 h-full flex items-center justify-center">
                <Image
                  src={workExperience[2].image}
                  width={550}
                  height={310}
                  alt="Student Web Developer Icon"
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              {/* Text Section */}
              <div className="w-1/2 flex flex-col justify-center text-left pl-4"> {/* Adjusted alignment and added padding */}
                <div>
                  <h3 className="text-xl font-bold">{workExperience[2].title}</h3>
                  <p className="text-muted-foreground mb-2">{workExperience[2].project + " | " + workExperience[2].period}</p>
                  <p className="text-muted-foreground">
                    {workExperience[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-200">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center max-w-[900px] mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I've worked on.
          </p>
        </div>

        {/* Projects Entries */}
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-1 lg:gap-12">
          <div className="flex flex-col space-y-4 ">
            {/* Project 1 */}
            <div className="flex flex-row space-x-4 mb-10">
              {/* Image Section */}
              <div className="rounded-lg overflow-hidden w-1/2">
                <img
                  src={projects[1].image}
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "550/310", objectFit: "cover" }}
                />
              </div>

              {/* Text Section */}
              <div className="w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{projects[1].name}</h3>
                  <p className="text-muted-foreground">
                    {projects[1].description}
                  </p>
                </div>
                {/* Links Section */}
                <div className="flex justify-center gap-2 mt-2">
                  <Link
                    href="https://github.com/Eds-Dbug/warhammer-blog"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                  {/* <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    GitHub
                  </Link> */}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-row space-x-4 mb-10">
              {/* Image Section */}
              <div className="rounded-lg overflow-hidden w-1/2">
                <img
                  src={projects[0].image}
                  width="550"
                  height="310"
                  alt="Project 2"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "550/310", objectFit: "cover" }}
                />
              </div>

              {/* Text Section */}
              <div className="w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{projects[0].name}</h3>
                  <p className="text-muted-foreground">
                  {projects[0].description}
                  </p>
                </div>
                {/* Links Section */}
                <div className="flex justify-center gap-2 mt-2">
                  <Link
                    href="https://github.com/Eds-Dbug/Getogether"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                  {/* <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    GitHub
                  </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <Contact/>
      </section>
      
      {/* <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center max-w-[900px] mx-auto">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Feel free to reach out to me for any inquiries or opportunities.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-4">
              <Input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 text-sm bg-background rounded-lg focus-visible:ring-0 ring-0 focus-visible:ring-offset-0"
              />
              <Input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 text-sm bg-background rounded-lg focus-visible:ring-0 ring-0 focus-visible:ring-offset-0"
              />
              <Textarea
                placeholder="Message"
                className="w-full px-3 py-2 text-sm bg-background rounded-lg focus-visible:ring-0 ring-0 focus-visible:ring-offset-0"
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MailIcon className="h-4 w-4" />
                <span>edgarleung989@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" />
                <span>+1 (416) 822-3939</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <footer className="bg-gray-200 p-6 md:py-12 w-full">
        <div className="container max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm max-w-[900px] mx-auto">
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link href="#" prefetch={false}>
              Resume
            </Link>
            <Link href="#" prefetch={false}>
              Linkedin
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Services</h3>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BriefcaseIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function MailIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PenToolIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
      <path d="m2.3 2.3 7.286 7.286" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  )
}


function PhoneIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}