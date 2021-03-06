export default function Footer({text}){
    return (
        <div className="dark:bg-darkbg dark:mt-0 dark:border-gray-800 block mt-4 px-4 py-3 h-auto left-0 right-0 w-full justify-center bottom-0 border-t text-center">
            <p className="dark:text-gray-300">{text}</p>
        </div>
    )
}