import Icon from "../Icon"

export default function MenuItem({ title, icon, link, onClick }) {
    return (
        <a href={link} onClick={onClick} className="flex items-center pl-2 space-x-1 dark:hover:text-slate-400 hover:text-blue-500 dark:text-gray-200">
            <Icon className="dark:stroke-gray-400 stroke-gray-500" name={icon} width={14} height={14}/>
            <p className="text-sm">{title}</p>
        </a>
    )
}