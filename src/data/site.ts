export const site = {
  name: "Nick McLarty",
  title: "Nick McLarty",
  description:
    "Native Texan. Adopted Floridian. Passionate about technology, aviation, and staying informed.",
  url: "https://nick.mclarty.me",
  location: "Celebration, Florida",
  locationBlurb: "Enjoying the sunshine and vibrant energy of Central Florida.",
  email: "nick@mclarty.me",
  greeting: "Hi, I'm Nick",
  roles: ["Cyber Guy", "Pilot", "Veteran"] as const,
  tagline: "Native Texan. Adopted Floridian.",
  summary: "Passionate about technology, aviation, and staying informed.",
  connect:
    "Whether you want to talk tech, aviation, current events, or just say hello — I'm always open to good conversations.",
  links: {
    x: "https://x.com/NickMcLarty",
    github: "https://github.com/mclarty",
    orcid: "https://orcid.org/0000-0003-0905-0875",
    resume: "/assets/pdf/resume.pdf",
    thesis: "/assets/pdf/thesis_final.pdf",
    pgp: "/pgp.pub.txt",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
] as const;
