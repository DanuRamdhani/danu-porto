import { Education } from "@/components/Education";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { PrismaClient } from '@prisma/client'
import { Project } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {

  const projects = await prisma.project.findMany({ take: 4 });

  return (
    <>
      <Header />
      <Education />
      <Projects listProject={projects as Project[]} isProjectPage={false} />
    </>
  );
};