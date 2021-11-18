export default function Icon({name,...props}) {
    return (
        <svg
                {...props}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <use href={"/feather-sprite.svg#"+name} />
            </svg>
    )
}