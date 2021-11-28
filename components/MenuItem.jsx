import Icon from "./Icon"

export default function MenuItem({ title, icon, link, onClick }) {
    return (
        <a href={link} onClick={onClick} className="flex items-center pl-2 space-x-1 hover:text-green-800">
            <Icon name={icon} width={14} height={14}/>
            <p className="text-sm">{title}</p>
        </a>
    )
}