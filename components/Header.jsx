import Button from './Button'
import Menu from './Menu'
import MenuItem from './MenuItem'
export default function Header() {
    return (
        <div className="fixed z-50 top-0 right-0 left-0 backdrop-filter backdrop-blur bg-white bg-opacity-80 flex justify-between px-4 py-3 h-auto">
            <a href="/" >
            <div>👨‍💻<span className="font-bold cursor-pointer"> dimasna.com</span></div>
            </a>
            <div className="flex">
            <Button iconName="sun" variant="nobg" size="small"></Button>
            <Menu>
                <MenuItem title="Linkedin" icon="linkedin" link="https://linkedin.com/in/dimasna" />
                <MenuItem title="Github" icon="github" link="https://github.com/dimasna" />
                <MenuItem title="Dribbble" icon="dribbble" link="https://dribbble.com/dimasna" />
            </Menu>
            </div>
        </div>
    )
}