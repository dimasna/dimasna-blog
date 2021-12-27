import { useEffect, useRef } from "react";
import { useRemark } from 'react-remark';
import remarkBreaks from 'remark-breaks'
import remarkHtml from "remark-html";
import useHasMounted from "../hooks/useHasMounted";
import Button from "./Button";
import Content from "./Content";
import Link
 from "next/link";
export default function PostModal({ isShow, setShow, data, loading, error, slug }) {
    const ref = useRef(null);
    const cardRef = useRef(null);
    const hasMounted = useHasMounted();
    const [reactContent, setMarkdownSource] = useRemark({ remarkPlugins: [remarkBreaks, remarkHtml] });


    useEffect(() => {
        //changeWidth();
        console.log('eff' + isShow)
        if (isShow && !loading && !error) {
            console.log(data)
            setMarkdownSource(data.post.content);
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
            ref.current.addEventListener('click', closeOptions)
            //console.log('slug'+slug)
        }


    }, [loading])

  

    if (!hasMounted) return null;


    const closeOptions = (evt) => {

        if (cardRef.current.contains(evt.target)) {
            return;

        } else {
            setShow(false)
            document.getElementsByTagName('body')[0].style.overflowY = 'auto';
            ref.current.removeEventListener('click', null)
            return;
        }


    }
    //console.log('data'+JSON.stringify(data))
    return (
        <div ref={ref} className={`fixed ${isShow ? 'block' : 'hidden'} top-0 bottom-0 right-0 left-0 insert-0 bg-gray-600 bg-opacity-50 h-full w-full`} >
            <div ref={cardRef} style={{ overflowY: 'overlay' }} className="relative flex flex-col overflow-x-hidden top-20 max-w-lg min-h-md max-h-md mx-auto shadow-lg rounded-md bg-white">
                <div className="bg-white w-full max-w-lg">
                    <a href={`/post/my-first-post`}>
                    <Button className="m-2" variant="flat" size="small" iconName="maximize-2" >Open as page</Button>
                    </a>

                </div>
                <div className="pt-16 lg:px-24 md:px-12 xxs:px-4 overflow-y-auto ">
                    <Content data={data} loading={loading} error={error} reactContent={reactContent} />
                </div>
            </div>
        </div>
    )
}
