import Link from "next/link";
import ProjectCategory from "./ProjectCategory";

export const Projects = ({ listProject, isProjectPage }: { listProject: Project[], isProjectPage: boolean }) => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                    <span className="inline-block mb-1 sm:mb-4">
                        This is all of my Project
                        <br className="hidden md:block" />
                        You can see it below.
                    </span>
                    <div className="h-1 ml-auto duration-300 origin-left transform bg-blue-900 scale-x-30 group-hover:scale-x-100" />
                </h2>
                <p className="text-gray-700 lg:text-sm lg:max-w-md">
                    Project is a collection of my personal and professional projects that I have worked on. Each project is a unique opportunity to learn and grow, and I am excited to share them with you.
                </p>
            </div>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                {listProject.length === 0 &&
                    <div className="text-gray-700 lg:text-xl text-center">No project added yet</div>
                }
                {listProject.map((project) => (
                    <Link href={`/projects/${project.id}`} aria-label="View Item" key={project.id}>
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={project.image ?? "images/no-image.png"}
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className=" text-lg font-bold text-gray-100">{project.title}</p>
                                <ProjectCategory category={project.category} />
                                <p className="text-sm tracking-wide text-gray-300">{project.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {!isProjectPage &&
                <div className="text-center">
                    <Link
                        href="/projects"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-950"
                    >
                        See more
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </Link>
                </div>}
        </div>
    );
};