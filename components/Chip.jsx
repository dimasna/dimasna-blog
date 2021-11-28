import Icon from './Icon';
export default function Chip({iconName, text, background, textColor}){
    return (
        <div style={{backgroundColor: 'gray'}}>
            {iconName && <Icon name={iconName} width={14} height={14} />}
            <p>{text}</p>
        </div>
    )
}