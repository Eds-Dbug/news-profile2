// export default function Projects() {
//   return (
//     <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center max-w-[900px] mx-auto">
//     <div className="space-y-2">
//       <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
//       <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Here are some of the projects I&apos;ve worked on.</p>
//     </div>

//     {/* Projects Entries */}
//     <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-1 lg:gap-12">
//       <div className="flex flex-col space-y-4 ">
//         {/* Project 1 */}
//         <div className="flex flex-row space-x-4 mb-10">
//           {/* Image Section */}
//           <div className="rounded-lg overflow-hidden w-1/2">
//             <Image src={projects[1].image} width="550" height="310" alt="Project 1" className="w-full h-auto object-cover" style={{ aspectRatio: "550/310", objectFit: "cover" }} />
//           </div>

//           {/* Text Section */}
//           <div className="w-1/2 flex flex-col justify-between">
//             <div>
//               <h3 className="text-xl font-bold mb-2">{projects[1].name}</h3>
//               <p className="text-muted-foreground">{projects[1].description}</p>
//             </div>
//             {/* Links Section */}
//             <div className="flex justify-center gap-2 mt-2">
//               <Link
//                 href="https://github.com/Eds-Dbug/warhammer-blog"
//                 className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                 prefetch={false}
//               >
//                 View Project
//               </Link>
//               {/* <Link
//               href="#"
//               className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//               prefetch={false}
//             >
//               GitHub
//             </Link> */}
//             </div>
//           </div>
//         </div>

//         {/* Project 2 */}
//         <div className="flex flex-row space-x-4 mb-10">
//           {/* Image Section */}
//           <div className="rounded-lg overflow-hidden w-1/2">
//             <Image src={projects[0].image} width="550" height="310" alt="Project 2" className="w-full h-auto object-cover" style={{ aspectRatio: "550/310", objectFit: "cover" }} />
//           </div>

//           {/* Text Section */}
//           <div className="w-1/2 flex flex-col justify-between">
//             <div>
//               <h3 className="text-xl font-bold mb-2">{projects[0].name}</h3>
//               <p className="text-muted-foreground">{projects[0].description}</p>
//             </div>
//             {/* Links Section */}
//             <div className="flex justify-center gap-2 mt-2">
//               <Link
//                 href="https://github.com/Eds-Dbug/Getogether"
//                 className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                 prefetch={false}
//               >
//                 View Project
//               </Link>
//               {/* <Link
//               href="#"
//               className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//               prefetch={false}
//             >
//               GitHub
//             </Link> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }