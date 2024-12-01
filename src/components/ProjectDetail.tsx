"use client";

import Link from 'next/link';
import ProjectCategory from './ProjectCategory';
import { toast } from 'sonner';

export function ProjectDetail({ project }: { project: Project }) {

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10">
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        {project.title}
                    </h5>
                    <ProjectCategory category={project.category} />
                    <p className="mb-4 text-gray-900">
                        {project.description}
                    </p>
                    <Link
                        onClick={() => {
                            console.log(`link : ${project.link}`);
                            if (project.github === null) {
                                toast('Not yet github for this project', {
                                    position: 'top-right',
                                    className: '',
                                    closeButton: true,
                                });
                            }
                        }}
                        href={`${project.github ?? ''}`}
                        className="mb-6 inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-950"
                    >
                        <svg viewBox="0 1 24 24" fill="currentColor" className="h-6 mr-1">
                            <path d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" />
                        </svg>
                        See on Github
                    </Link>
                    <hr className="mb-5 border-gray-300" />
                    <div className="flex items-center space-x-4">
                        <Link
                            onClick={() => {
                                console.log(`link : ${project.link}`);
                                if (project.link === null) {
                                    toast('Not yet link for this project', {
                                        position: 'top-right',
                                        className: '',
                                        closeButton: true,
                                    });
                                }
                            }}
                            href={`${project.link ?? ''}`}
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-900 hover:text-blue-950"
                        >
                            project link
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt="" />
                </div>
            </div>
        </div>
    );
}