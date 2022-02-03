import shortText from "../helper/shortText"
import ReadMore from "./ReadMore"
export default function Bio({ text }) {
    return (
        <div className="flex dark:bg-lightdark bg-gray-50 p-4 rounded-lg mx-3 my-5 space-x-4">
            <p>💡</p>
            <p className="dark:text-gray-200 flex xxs:flex sm:hidden">
                <ReadMore text={text} maxChar={100}/>
            </p>
            <p className=" dark:text-gray-300 text-justify flex xxs:hidden sm:flex">
                <ReadMore text={text} maxChar={300}/>
            </p>
        </div>
    )
}