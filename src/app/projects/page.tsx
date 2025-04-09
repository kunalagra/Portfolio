import React from 'react'
import { projectsData } from '@/assets/data'
import { ProjectsClientUI } from '@/components'
import { ProjectData } from '@/types'
import { Metadata } from 'next'

async function getSortedProjects(): Promise<ProjectData[]> {
  const projects: ProjectData[] = projectsData
  return projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My Projects',
  openGraph: {
    title: 'Projects | Kunal Agrawal',
    description: 'My Projects',  
  },
}

export default async function ProjectsPage() {
  const sortedProjects = await getSortedProjects()

  return (
    <>
      <ProjectsClientUI projects={sortedProjects} />
    </>
  )
}
