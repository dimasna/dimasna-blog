import shortText from "../helper/shortText"
import ReadMore from "./ReadMore"
export default function About({ children }) {
    return (
        <div className="flex bg-gray-50 p-4 rounded-lg mx-3 my-5 space-x-4">
            <p>💡</p>
            <p className="flex xxs:flex sm:hidden">
                <ReadMore text={children} maxChar={100}/>
            </p>
            <p className="text-justify flex xxs:hidden sm:flex">{children}</p>
        </div>
    )
}