import { useState } from "react"
import shortText from "../helper/shortText"

export default function ReadMore({text, maxChar}){
    const [isFullText, setFullText] = useState(false);
    return (
        !isFullText ?
        <span>{shortText(text, maxChar)} <a href="#" className="text-green-500 font-bold" onClick={()=>setFullText(true)}>Show more</a></span>
        :
        <span>{text}</span>
        )
}