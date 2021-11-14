import MenuItem from './menuItem'
export default function Header(){
    return (
        <div className="flex justify-between px-4 py-3 h-auto shadow-xl ">
            <div className="font-bold">👨‍💻 dimasna.com</div>
            <div className="flex xxs:hidden xs:flex">
                <MenuItem title="Linkedin" icon="linkedin" link="https://linkedin.com"/>
                <MenuItem title="Github" icon="github" link="https://github.com"/>
                <MenuItem title="Dribbble" icon="dribbble" link="https://dribbble.com"/>
            </div>
            <div className="hidden xxs:flex xs:hidden">
                <MenuItem title="" icon="more-horizontal" link="https://linkedin.com"/>
            </div>
        </div>
    )
}