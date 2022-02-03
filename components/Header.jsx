import Button from './Button';
import Menu from './Menu';
import MenuItem from './MenuItem';
import useDarkMode from '../hooks/useDarkMode';
export default function Header() {
    const [colorTheme, setTheme] = useDarkMode();
    const changeTheme = (theme) => {
        console.log(theme);
        setTheme(theme)
    }
    return (
        <div className="fixed z-50 top-0 right-0 left-0 backdrop-filter backdrop-blur bg-white dark:backdrop-filter dark:backdrop-blur dark:bg-lightdark dark:bg-opacity-80 bg-opacity-80 flex justify-between px-4 py-3 h-auto">
            <a href="/" >
                <div>👨‍💻<span className="font-bold cursor-pointer dark:hover:text-slate-400 dark:text-white"> dimasna.com</span></div>
            </a>
            <div className="flex">
                {colorTheme === 'light' ?
                    <Button onClick={() => changeTheme('light')} variant="nobg" size="small">🌕</Button>
                    :
                    <Button onClick={() => changeTheme('dark')} style={{color: 'yellow'}} variant="nobg" size="small">🌑</Button>
                }
                <Menu>
                    <MenuItem title="Linkedin" icon="linkedin" link="https://linkedin.com/in/dimasna" />
                    <MenuItem title="Github" icon="github" link="https://github.com/dimasna" />
                    <MenuItem title="Dribbble" icon="dribbble" link="https://dribbble.com/dimasna" />
                </Menu>
            </div>
        </div>
    )
}