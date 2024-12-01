import { ProjectDetail } from "@/components/ProjectDetail";
import { PrismaClient } from '@prisma/client'
import { Project } from "@prisma/client";

const prisma = new PrismaClient()

export default async function DetailProjectPage({ params }: { params: Promise<any> }) {
    const { id } = await params

    const project = await prisma.project.findUnique({
        where: {
            id: id
        },
    });

    return (
        <ProjectDetail project={project as Project} />
    );
}