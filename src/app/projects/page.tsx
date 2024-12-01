import { Projects } from "@/components/Projects";
import { PrismaClient } from '@prisma/client'
import { Project } from "@prisma/client";

const prisma = new PrismaClient()

export default async function ProjectPage() {
    const projects = await prisma.project.findMany()

    return (
        <Projects listProject={projects as Project[]} isProjectPage={true} />
    );
}