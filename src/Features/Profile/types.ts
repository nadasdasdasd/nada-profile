export interface Project {
  name: string
  description: string
  techStack: string[]
  liveUrl?: string
  repoUrl?: string
  image?: string
  challenges?: string
  impact?: string
}

export interface Experience {
  company: string
  role: string
  period: string
  achievements: string[]
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface ProfileData {
  name: string
  profession: string
  tagline: string
  photo?: string
  about: {
    background: string
    yearsOfExperience: number
    goals: string
    hobbies: string[]
  }
  skills: SkillCategory[]
  projects: Project[]
  experiences: Experience[]
  contact: {
    email: string
    linkedin: string
    github: string
    whatsapp?: string
  }
  links: {
    label: string
    url: string
  }[]
}
