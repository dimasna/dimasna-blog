import { useState } from "react"
import shortText from "../../helper/shortText"

export default function ReadMore({text, maxChar}){
    const [isFullText, setFullText] = useState(false);
    return (
        !isFullText ?
        <span>{shortText(text, maxChar)} <span className="text-blue-500 font-bold cursor-pointer " onClick={()=>setFullText(true)}>Show more</span></span>
        :
        <span>{text} <span className="text-blue-500 font-bold cursor-pointer" onClick={()=>setFullText(false)}>Show less</span></span>
        )
}