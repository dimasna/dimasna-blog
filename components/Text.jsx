export default function Text({value, type = 'default'}) {
    return(
        <>
        {type == 'default' && <p>{value}</p>}
        {type == 'title' && <p className="font-bold underline">{value}</p>}
        {type == 'date' && <p className="text-blue-400 text-sm">{value}</p>}
        </>
    )
}