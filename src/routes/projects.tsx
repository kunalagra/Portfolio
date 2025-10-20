import { createFileRoute } from "@tanstack/react-router";
import { projects as data } from "@/assets/data";
import { ProjectsClientUI } from "@/components";
import type { Project } from "@/types";

async function getSortedProjects(): Promise<{ projects: Project[] }> {
  const projects: Project[] = data;
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return { projects: sortedProjects };
}

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Kunal Agrawal" },
      { name: "description", content: "My Projects" },
    ],
  }),
  loader: async () => getSortedProjects(),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { projects } = Route.useLoaderData();
  return <ProjectsClientUI projects={projects} />;
}
