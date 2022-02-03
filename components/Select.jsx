import { useEffect, useRef, useState } from "react";
import getTextWidth from "../helper/getTextWidth";
export default function Select({ options, value, setValue }) {
    const ref = useRef();
    const [showDropDown, setShowDropDown] = useState(false);
    const defaultOpts = ["Opt 1", "Opt 2", "Opt 3"];
    const opts = options && options.length ? options : defaultOpts;

    useEffect(() => {
        //changeWidth();
        if (showDropDown) {
            document.addEventListener('click', closeOptions)
        }

    }, [showDropDown])

    const changeOption = (val) => {
       setValue(val)
    }

    const closeOptions = (evt) => {

        if (evt.target.closest('#containerSelect')) {
            return;
        }

        if (showDropDown) {
            setShowDropDown(false)
            document.removeEventListener('click',null)
        }
    }

    return (
        <div className="relative inline-block w-auto">
            <div ref={ref} className="contents h-10 pr-6 text-base rounded-lg appearance-none flex items-center ">
                <div id="containerSelect" onClick={() => setShowDropDown(!showDropDown)}>
                    <p className="hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-lightdark flex items-center px-2 rounded cursor-pointer pointer-events-auto" >{value}
                        <svg className="w-4 h-4 fill-current ml-1 mt-0.5 dark:fill-gray-500" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>

                    </p>

                </div>
                {showDropDown && <ul className="mt-1 w-max bg-white absolute shadow-lg rounded border border-gray-200 dark:bg-lightdark dark:border-gray-600">
                    {opts.map((val, idx) => {
                        return <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-400 cursor-pointer" key={idx} onClick={()=>changeOption(val)}>{val}</li>
                    })}
                </ul>}
            </div>
        </div>
    )
}