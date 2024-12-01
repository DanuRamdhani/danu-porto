import { Education } from "@/components/Education";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { PrismaClient } from '@prisma/client'
import { unstable_cache as cache } from "next/cache";
import { Project } from "@prisma/client";

const prisma = new PrismaClient();

const getCachedProjects = cache(() => prisma.project.findMany({ take: 4 }));

export default async function Home() {

  const projects = await getCachedProjects();

  return (
    <>
      <Header />
      <Education />
      <Projects listProject={projects as Project[]} isProjectPage={false} />
    </>
  );
};