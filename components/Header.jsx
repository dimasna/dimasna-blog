import Menu from './Menu'
import MenuItem from './MenuItem'
export default function Header({menuItem}){
    return (
        <div className="flex justify-between px-4 py-3 h-auto shadow-xl ">
            <div>👨‍💻<span className="font-bold"> dimasna.com</span></div>
            <Menu>
                <MenuItem title="Linkedin" icon="linkedin" link="https://linkedin.com" />
                <MenuItem title="Github" icon="github" link="https://github.com" />
                <MenuItem title="Dribbble" icon="dribbble" link="https://dribbble.com" />
            </Menu>
        </div>
    )
}