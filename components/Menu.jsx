import { useState, Children, useEffect } from 'react';
import Icon from './Icon'
export default function Menu({ children }) {
    const [showDropDown, setShowDropDown] = useState(false);
    useEffect(() => {
        //changeWidth();
        if (showDropDown) {
            document.addEventListener('click', closeOptions)
        }

    }, [showDropDown])


    const closeOptions = (evt) => {

        if (evt.target.closest('#containerSelect')) {
            return;
        }

        if (showDropDown) {
            setShowDropDown(false)
            document.removeEventListener('click',null)
        }
    }

    const setToggle = ()=>{
        setShowDropDown(!showDropDown);
    }

    return (
        <>
            <div className="flex xxs:hidden xs:flex justify-end">
                {children}
            </div>
            <div id="containerSelect" className="hidden xxs:flex xs:hidden justify-end">
                <Icon name={showDropDown ? 'x':'menu'} className="cursor-pointer self-center" width={14} height={14} onClick={setToggle} />
                {showDropDown && <ul className="w-max bg-white absolute shadow-lg rounded right-0 mr-4 mt-8">
                    {Children.map(children, child => <li className="px-4 py-2">{child}</li>)}
                </ul>}
            </div>
        </>
    )
}