import Link from "next/link";

export const Footer = () => {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8" id="contact">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <Link
                        href="/"
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <span className="text-xl font-bold tracking-wide text-gray-800 uppercase">
                            DANU.PORTO
                        </span>
                    </Link>
                    <div className="mt-6 lg:max-w-sm">
                        <p className="text-sm text-gray-800">
                            As a dedicated computer science student, I have honed my skills in JavaScript and Dart Flutter through
                            various projects and coursework. My passion for coding and problem-solving drives me to continuously
                            learn and improve my abilities.
                        </p>
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">
                        Contacts
                    </p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Phone:</p>
                        <Link
                            href="tel:083-147-666-143"
                            aria-label="my phone"
                            title="my phone"
                            className="transition-colors duration-300 text-blue-900 hover:text-blue-950"
                        >
                            083-147-666-143
                        </Link>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <Link
                            href="mailto:danudeveloper@gmail.com"
                            aria-label="my email"
                            title="my email"
                            className="transition-colors duration-300 text-blue-900 hover:text-blue-950"
                        >
                            danudeveloper@gmail.com
                        </Link>
                    </div>
                </div>
                <div>
                    <span className="text-base font-bold tracking-wide text-gray-900">
                        Social
                    </span>
                    <div className="flex items-center mt-1 space-x-3">
                        <Link
                            href="https://www.instagram.com/danu.rmdni"
                            target="_blank"
                            className="text-gray-500 transition-colors duration-300 hover:text-blue-900"
                        >
                            <svg viewBox="0 0 28 30" fill="currentColor" className="h-6">
                                <circle cx="15" cy="15" r="4" />
                                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                            </svg>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/danu-ramdhani"
                            target="_blank"
                            className="text-gray-500 transition-colors duration-300 hover:text-blue-900"
                        >
                            <svg viewBox="0 0 20 24" fill="currentColor" className="h-7">
                                <path d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" />
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                            </svg>

                        </Link>
                        <Link
                            href="https://github.com/DanuRamdhani"
                            target="_blank"
                            className="text-gray-500 transition-colors duration-300 hover:text-blue-900"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                                <path d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" />
                            </svg>
                        </Link>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        Social Media Links. <br />
                        with social media we can connect.
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-600">
                    © Copyright 2024 Danu Ramdhani.
                </p>
            </div>
        </div>
    );
};