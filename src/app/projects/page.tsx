import React from 'react'
import { projects as data } from '@/assets/data'
import { ProjectsClientUI } from '@/components'
import { Project } from '@/types'
import { Metadata } from 'next'

async function getSortedProjects(): Promise<Project[]> {
  const projects: Project[] = data
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
