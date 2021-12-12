import { useEffect, useRef } from "react";
import Button from "./Button";
import Chip from "./Chip";
export default function PostModal({ isShow, setShow }) {
    const ref = useRef();
    const cardRef = useRef();
    useEffect(() => {
        //changeWidth();
        console.log('eff' + isShow)
        if (isShow) {
            ref.current.addEventListener('click', closeOptions)
        }

    }, [isShow])

    const closeOptions = (evt) => {

        if (cardRef.current.contains(evt.target)) {
            return;

        } else {
            setShow(false)
            ref.current.removeEventListener('click', null)
            return;
        }


    }
    return (
        <div ref={ref} className={`fixed ${isShow ? 'block' : 'hidden'} top-0 bottom-0 right-0 left-0 insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`} >
            <div ref={cardRef} className="relative top-20 max-w-lg min-h-md max-h-md mx-auto p-2 border shadow-lg rounded-md bg-white">
                <Button variant="flat" size="small" iconName="maximize-2">Open as page</Button>
                <div className="mt-16 px-24">
                    <h2 className="text-3xl leading-6 font-medium text-gray-900">Post Title</h2>
                    <div className="mt-4">
                        <Chip iconName='github' text="Career" />
                    </div>
                    <div className="mt-2 py-3">
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}