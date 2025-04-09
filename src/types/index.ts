export interface ProjectData {
  id?: string | number
  date: string | number | Date
  title: string
  imageUrl: string
  description: string
  githubLink?: string
  deployLink?: string
  tags: string[]
  type?: string[]
}

export interface LinkData {
  name: string
  url: string
}

export interface MoreInfoProps {
  text: string
  content: React.ReactNode
}
export interface CardProps {
  imageURL: string
  title: string
  desc: string
  githubLink?: string
  deployLink?: string
  tag: string[]
}

export interface ProjectsClientUIProps {
  projects: ProjectData[]
}

export interface MilestoneData {
  id: number
  title: string
  description: string
  date: string
  url?: string
}

export interface MilestonesProps {
  milestones: MilestoneData[]
}

export interface CertificateData {
  id: string | number
  link: string
  title: string
  organization: string
  issueDate: string | Date
}

export interface CertificateProps {
  certificates: CertificateData[]
}

export interface IntroductionProps {
  introduction: {
    name: string
    github: string
    linkedin: string
    mailto: string
    resume: string
  }
}

export interface SocialLinkButtonProps {
  href: string
  icon: React.ReactNode
  label: string
}
