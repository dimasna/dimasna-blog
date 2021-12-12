import Menu from './Menu'
import MenuItem from './MenuItem'
export default function Header(){
    return (
        <div className="fixed top-0 right-0 left-0 backdrop-filter backdrop-blur bg-white bg-opacity-80 flex justify-between px-4 py-3 h-auto">
            <div>👨‍💻<span className="font-bold"> dimasna.com</span></div>
            <Menu>
                <MenuItem title="Linkedin" icon="linkedin" link="https://linkedin.com" />
                <MenuItem title="Github" icon="github" link="https://github.com" />
                <MenuItem title="Dribbble" icon="dribbble" link="https://dribbble.com" />
            </Menu>
        </div>
    )
}