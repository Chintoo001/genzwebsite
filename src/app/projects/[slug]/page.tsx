import { projectsData } from "@/data/projectsData";
import ProjectDetailsClient from "@/component/ProjectDetailsClient";
import { notFound } from "next/navigation";

// ✅ SEO Function
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const project = projectsData.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found | GenZwebsite.com",
    };
  }

  return {
    title: project.title,
    description: project.desc,
  };
}

// ✅ Page Component
export default async function ProjectDetailsPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const project = projectsData.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
