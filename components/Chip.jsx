import Icon from './Icon';
export default function Chip({iconName, text, background = '#F2F2F2', textColor = '#222'}){
    return (
        <div className="flex items-center px-2 rounded w-max" style={{backgroundColor: background}}>
            {iconName && <Icon className="mr-1" name={iconName} width={14} height={14} />}
            <p className="mb-0.5 text-sm" style={{color: textColor}}>{text}</p>
        </div>
    )
}