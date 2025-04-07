import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Rimmal",
  lastName: "Sheikh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "TechGirls Alumna • AI Researcher • Computational Modeler",
  avatar: "/images/avatar.png",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Not a Newsletter</>,
  description: (
    <>
      This isn’t a newsletter. Just a small space to share random thoughts, projects that didn’t fall apart,
      or things I did that actually worked. 
      <br />
      Refresh the page—something different might show up. Like a lucky dip. But nerdier.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rimmi-sheikh",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rimmal-sheikh-22610a266/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:rimmalsheikh27@gmail.com",
  },
];

const home = { 
  label: "home",
  title: `Rimmis Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <div>I do things.<br />Sometimes they work.</div>
      <div className="spellbook-container">
        <img src="/images/enchanted-book.png" alt="Enchanted Book" className="spellbook" />
        <div className="magic-particles"></div>
        <div className="hover-text"></div>
      </div>
    </div>
  ),  
  subline: (
    <>
      I'm <InlineCode>Rimmal</InlineCode>—A Level student, tech tinkerer, and frequent victim of my own ideas. Based in <InlineCode>Lahore, Pakistan</InlineCode>, I like <InlineCode>engineering</InlineCode> things that occasionally function, <InlineCode>3D model concepts</InlineCode> no one asked for, and negotiate with <InlineCode>circuits</InlineCode> like they owe me money. 
      <br/> If it involves code, design, or an unnecessary amount of overcomplication, I’m probably in. 
      <br/> <InlineCode>Welcome to my portfolio 👾</InlineCode>—try not to trip over the unfinished projects or half-baked ideas.
    </>
  ),
};

const about = {
  label: "About",
  title: "Rimmi | About",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      Rimmal is an engineering enthusiast with a passion for electrical systems, environmental technology, 
      and a surprising fondness for spaghetti bridges. She merges hardware, AI, and sustainability to create 
      impactful solutions—from air quality monitoring to flood detection systems. Whether she’s debugging code 
      or building a car chassis from scratch, Rimmal’s work bridges the gap between practicality and ingenuity—
      sometimes literally.
    </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Pakistan Young Innovative Minds (PYIMS)",
        timeframe: "Dec 2024 – Present",
        role: "Paid Web Development Intern",
        achievements: [
          <>Redesigned and implemented key sections of the PYIMS website using HTML, CSS, and JavaScript.</>,
          <>Collaborated with the design team to align site UI with organizational branding and accessibility goals.</>,
          <>Resolved site bugs and improved responsiveness across devices through regular QA and user feedback cycles.</>,
        ],
        images: [],
      },
      {
        company: "TechGirls (U.S. Department of State Exchange Program)",
        timeframe: "Jul – Aug 2024",
        role: "Selected Participant",
        achievements: [
          <>Completed certification at Virginia Tech in Automated Systems Using Microprocessors (ASUM).</>,
          <>Worked a multicultural team to design a flood detection and mitigation system inspired by the 2022 Pakistan floods.</>,
          <>Founded ‘Learn. Tinker. Innovate.’ to host Arduino and TinkerCAD workshops encouraging girls in STEM.</>,
        ],
        images: [],
      },
      {
        company: "Aliva Tech",
        timeframe: "Sep – Oct 2023",
        role: "Space Science Python Developer Intern",
        achievements: [
          <>Designed Python tools to simulate satellite orbits using orbital mechanics equations.</>,
          <>Documented code and workflows for internal knowledge sharing on space mission data analysis.</>,
          <>Researched and prototyped automated methods for space-related data processing.</>,
        ],
        images: [],
      },
    ],
  },
  
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Lahore Grammar School OPF Senior Girls",
        description: <>Currently pursuing A-Levels in Computer Science, Physics, Mathematics, Chemistry, and English Language.</>,
      },
    ],
  },
  
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Python",
        description: <>Built AQI prediction models and environmental monitoring tools; used for research and real-world air quality tracking.</>,
        images: [],
      },
      {
        title: "3D Design (Blender, TinkerCAD)",
        description: <>Designed models for NASA-affiliated space settlement contests, spaghetti bridges, and custom chassis prototypes.</>,
        images: [],
      },
      {
        title: "Arduino & Hardware",
        description: <>Created sensor systems for air pollution and flood detection as part of CAP and internships.</>,
        images: [],
      },
      {
        title: "Web Development",
        description: <>Developed responsive interfaces using HTML, CSS, JavaScript, and frameworks during internships and projects.</>,
        images: [],
      },
    ],
  },
};  
  
const blog = {
  label: "Blog",
  title: "Rimmi | Blog",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "Rimmi | Work",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work};
