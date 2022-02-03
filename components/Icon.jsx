export default function Icon({name,...props}) {
    return (
        <svg
                {...props}
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                
            >
                <use href={"/feather-sprite.svg#"+name} />
            </svg>
    )
}