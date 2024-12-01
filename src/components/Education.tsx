import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function Education() {
    const education = await prisma.education.findMany()

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-24">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                                width="52"
                                height="24" />
                        </svg>
                        <span className="relative">Education and Experience</span>
                    </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Education and Experience is a place where I can share my knowledge and experience in the field of computer science.
                </p>
            </div>
            <div className="border-t border-b divide-y">
                {education.map((edu) => (

                    <div key={edu.id} className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <p className="text-gray-600">{edu.date}</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-blue-900"
                                >
                                    <p className="text-xl font-extrabold leading-none sm:text-2xl xl:text-2xl">
                                        {edu.title}
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                {edu.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}