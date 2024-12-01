export default function ProjectCategory({ category }: { category: string }) {

    if (category.toLowerCase() === 'work') {
        return (
            <p className={`inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider bg-red-accent-400 text-red-950 uppercase rounded-full`}>
                {category}
            </p>
        )
    } if (category.toLowerCase() === 'personal') {
        return (
            <p className={`inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider bg-teal-accent-400 text-teal-900 uppercase rounded-full`}>
                {category}
            </p>
        )
    }

}