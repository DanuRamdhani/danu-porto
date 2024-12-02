import Image from "next/image";

export const Header = () => {
	return (
		<div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
			<div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
				<div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
					<div className="max-w-xl mb-6">
						<div>
							{/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
								Computer Science
							</p> */}
						</div>
						<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
							Helo Guys Its Me
							<br className="hidden md:block" />
							{' '}
							<span className="inline-block text-blue-900 mt-2">
								Danu Ramdhani
							</span>
						</h2>
						<p className="text-base text-gray-700 md:text-lg">
							As a dedicated computer science student, I have honed my skills in
							<b className="font-semibold"> React</b> for Web and <b className="font-semibold">Flutter</b> for Mobile through
							various projects and coursework. My passion for coding and problem-solving drives me to continuously learn and improve my abilities.
						</p>
					</div>
					<div className="flex flex-col items-center md:flex-row">
						<a
							href="https://drive.google.com/drive/folders/1I7jDjHJhFV7kVcCRZPh1MmdL8aKzwkw9?usp=sharing"
							target="_blank"
							className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-900 hover:bg-blue-950 focus:shadow-outline focus:outline-none"
						>
							Hire Me
						</a>
					</div>
				</div>
			</div>
			<div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
				<Image
					className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
					src="/images/my-foto.jpg"
					width={1200}
					height={1200}
					priority={true}
					alt="my foto"
				/>
			</div>
		</div>
	);
};