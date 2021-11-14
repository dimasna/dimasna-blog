export default function MenuItem({ title, icon, link }) {
    return (
        <a href={link} className="flex items-center pl-2 space-x-1 hover:text-green-800">
            <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <use href={"/feather-sprite.svg#"+icon} />
            </svg>
            <p className="text-sm">{title}</p>
        </a>
    )
}