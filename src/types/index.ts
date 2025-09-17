import type React from "react";

export interface Bio {
  name: string;
  description: string;
  resume: string;
  linkedin: string;
  github: string;
  mailto: string;
}

export interface Project {
  id?: string | number;
  date: string | number | Date;
  title: string;
  imageUrl: string;
  description: string;
  githubLink?: string;
  deployLink?: string;
  tags: string[];
  type?: string[];
}

export interface Milestone {
  title: string;
  description: string;
  date: string;
  url?: string;
}

export interface Certificate {
  link: string;
  title: string;
  organization: string;
  issueDate: string | Date;
}

export interface LinkInfo {
  name: string;
  url: string;
}

export interface ProjectsClientUIProps {
  projects: Project[];
}

export interface MilestonesProps {
  milestones: Milestone[];
}

export interface CertificateProps {
  certificates: Certificate[];
}

export interface IntroductionProps {
  introduction: Bio;
}

export interface SocialLinkButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export interface MoreInfoProps {
  text: string;
  content: React.ReactNode;
}

export type CardProps = Pick<
  Project,
  "imageUrl" | "title" | "description" | "githubLink" | "deployLink" | "tags"
>;
