import shortText from "../../helper/shortText"

export default function Text({value, type = 'default', maxChar = 0}) {
    const newVal = maxChar != 0 && value.length > maxChar ?  shortText(value, maxChar) : value
    return(
        <>
        {type == 'default' && <p>{newVal}</p>}
        {type == 'title' && <p className="font-bold underline dark:no-underline dark:text-white dark:font-normal " title={value}>{newVal}</p>}
        {type == 'date' && <p className="text-blue-400 text-sm">{newVal}</p>}
        </>
    )
}