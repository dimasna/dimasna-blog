export default function Icon({name,...props}) {
    return (
        <svg
                {...props}
                className={props.className ? props.className : 'stroke-gray-900'}
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                
            >
                <use href={"/feather-sprite.svg#"+name} />
            </svg>
    )
}