"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RpkScvnERwk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Contact from "../components/home/Contact";
import profileData from "../data/portfolioData.json";
import { useState } from "react";
import Component from "@/components/main";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Cable, CloudIcon, GithubIcon, LinkedinIcon, LucideGithub, Users } from "lucide-react";

export default function Home() {
  const { introduction, workExperience, projects, education, skills } = profileData;

  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => {
    setReadMore((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-background sticky top-0 z-50 px-4 lg:px-6 h-14 flex items-center border-b">
        <div className="flex space-x-2">
        <div className="flex space-x-3">
        <Link href="/resume/Edgar_Resume.pdf" target="_blank" className="flex items-center justify-center" prefetch={false}>
          <BriefcaseIcon className="h-6 w-6 mr-1" />
          RESUME
        </Link>

        {/* Email Icon with mailto */}
        <Link href="mailto:edgar.debug@gmail.com" target="_blank" className="flex items-center justify-center" prefetch={false}>
          <MailIcon className="h-6 w-6 mr-1" />
          EMAIL
        </Link>

        {/* GitHub Icon */}
        <Link href="https://github.com/Eds-Dbug" target="_blank" className="flex items-center justify-center" prefetch={false}>
          <GitHubLogoIcon className="h-6 w-6 mr-1" />
          GITHUB
        </Link>

        {/* LinkedIn Icon */}
        <Link href="https://www.linkedin.com/in/edgar-leung" target="_blank" className="flex items-center justify-center" prefetch={false}>
          <LinkedinIcon className="h-6 w-6 mr-1" />
          LINKEDIN
        </Link>

      </div>

        </div>
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
          {/* <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link> */}
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>

      <section id="bio" className="w-full py-8 md:py-12 lg:py-18 bg-background">
        <div className="container px-4 md:px-6 flex items-start justify-center space-x-8 max-w-1/2 mx-auto">
          {/* Image Container */}
          <div className="w-1/2">
            <Image src="/me.jpg" width={400} height={400} alt="Edgar Leung" className="rounded-full object-cover w-full h-full" />
             {/* Get in Touch Link */}
             <Link
              href="#contact"
              className="w-full inline-flex h-10 items-center justify-center bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get in Touch
            </Link>
          </div>

          {/* Text Content */}
          <div className="w-1/2 space-y-6">
            <div className="space-y-10 flex-col ml-5">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{introduction.name}</h1>
              <p className="max-w-1/2 text-muted-foreground md:text-xl">{introduction.summary}</p>
              <br />
              {/* Read More Toggle Button */}
              <div className="flex">
                <button className="underline text-3xl font-semibold" onClick={toggleReadMore}>
                  {readMore ? "Read Less \u2B06" : "Read More \u2B07"}
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 space-y-6">
            {/* Read More Content */}
            {readMore && (<div><h1 className="text-center text-2xl mb-4 text-muted-foreground font-semibold underline tracking-tighter ">Reading More</h1><p className="text-muted-foreground md:text-xl">{introduction.Journey}</p><br /><p className="text-muted-foreground md:text-xl">{introduction.Hobbies}</p></div>) }
          </div>

        </div>
      </section>

      <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-200">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center mx-auto">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the key technologies and tools I work with.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {/* Frontend Section */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <CodeIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Frontend Development</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills[0].items.map((item, idx) => (
                  <span key={idx} className="bg-muted-foreground text-white text-md px-2 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Section */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <DatabaseIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Backend Development</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills[1].items.map((item, idx) => (
                  <span key={idx} className="bg-muted-foreground text-white text-md px-2 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & Testing Section */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <CloudIcon className="h-12 w-12 text-primary" /> {/* Add a new Cloud Icon */}
              <h3 className="text-xl font-bold">Cloud & Testing</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills[2].items.map((item, idx) => (
                  <span key={idx} className="bg-muted-foreground text-white text-md px-2 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* API's Section */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <Cable className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">API's</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills[3].items.map((item, idx) => (
                  <span key={idx} className="bg-muted-foreground text-white text-md px-2 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Tools Section */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <PenToolIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Addtional Tools</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills[4].items.map((item, idx) => (
                  <span key={idx} className="bg-muted-foreground text-white text-md px-2 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills Section */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <Users className="h-12 w-12 text-primary" /> {/* Add a new People/Soft Skills Icon */}
              <h3 className="text-xl font-bold">Soft Skills</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills[5].items.map((item, idx) => (
                  <span key={idx} className="bg-muted-foreground text-white text-md px-2 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="work" className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center max-w-[900px] mx-auto">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here&apos;s a summary of my professional background.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 py-12">
            {workExperience.map((job, index) => (
              <div key={index} className="flex flex-row space-x-4 min-h-full">
                {/* Image Section */}
                <div className="rounded-lg overflow-hidden w-1/2 h-full flex items-center justify-center">
                  <Image
                    src={job.image}
                    width={550}
                    height={310}
                    alt={`${job.title} Icon`}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Text Section */}
                <div className="w-1/2 flex flex-col justify-center text-left pl-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-muted-foreground mb-2">{job.project + " | " + job.period}</p>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-200">
      </section> */}

      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-200">
        <Contact />
      </section>

      {/* <footer className="bg-gray-200 p-6 md:py-12 w-full">
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
      </footer> */}
    </div>
  );
}

function BriefcaseIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CodeIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function DatabaseIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PenToolIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
      <path d="m2.3 2.3 7.286 7.286" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}


  



