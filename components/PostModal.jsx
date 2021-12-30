import { useEffect, useRef, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useRemark } from 'react-remark';
import remarkBreaks from 'remark-breaks'
import remarkHtml from "remark-html";
import useHasMounted from "../hooks/useHasMounted";
import Button from "./Button";
import Content from "./Content";
import { GET_POST_DETAILS } from "../graphQL/Query";

export default function PostModal({ isShow, setShow, slug }) {
    const ref = useRef(null);
    const cardRef = useRef(null);
    const hasMounted = useHasMounted();
    const [reactContent, setMarkdownSource] = useRemark({ remarkPlugins: [remarkBreaks, remarkHtml] });
    const [getPost, { data, loading, error }] = useLazyQuery(GET_POST_DETAILS);

    useEffect(() => {
        if (slug != '') {
            console.log('slugeff' + slug)
            getPost({ variables: { slug } })

        }
    }, [slug])

    useEffect(() => {
        console.log('eff' + isShow)
        if (data?.post) {
            console.log(data)
            setMarkdownSource(data.post.content);
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
            ref.current.addEventListener('click', closeOptions)
        }


    }, [data])





    const closeOptions = (evt) => {

        if (cardRef.current.contains(evt.target)) {
            return;

        } else {
            setShow(false)
            getPost({ variables: { slug: '' } })
            document.getElementsByTagName('body')[0].style.overflowY = 'auto';
            ref.current.removeEventListener('click', null)
            return;
        }


    }

    if (!hasMounted) return null;

    //console.log('data'+JSON.stringify(data))
    return (
        <div ref={ref} className={`fixed ${isShow ? 'block' : 'hidden'} top-0 bottom-0 right-0 left-0 insert-0 bg-gray-600 bg-opacity-50 h-full w-full`} >
            <div ref={cardRef} style={{ overflowY: 'overlay' }} className="relative flex flex-col overflow-x-hidden top-20 max-w-lg min-h-md max-h-md mx-auto shadow-lg rounded-md bg-white">
                <div className="bg-white w-full max-w-lg">
                    <a href={`/post/${slug}`}>
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
