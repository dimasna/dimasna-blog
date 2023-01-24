import Text from "../Text";
import Chip from "../Chip";
import moment from "moment";
import typeIcon from "../../typeIcon";
import Image from 'next/image'
export default function Card({ post, action }) {
    return (
        <div className="xxs:basis-full sm:basis-48  md:basis-48 lg:basis-25 xl:basis-25 dark:bg-lightdark hover:bg-gray-100 cursor-pointer ring-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 border rounded shadow" onClick={() => action()}>
            <div className="h-40 rounded-t relative " >

                <Image
                    layout="fill"
                    objectFit="cover"
                    src={post.featuredImage.url}
                    alt={post.featuredImage.fileName.split('.')[0] || post.featuredImage.id}
                    priority
                />

            </div>


            <div className="flex flex-col py-2 px-3" >
                <div className="min-h-16">
                    <Text type="date" value={moment(post.createdAt).format('MMM DD, YYYY')} />

                    <Text type="title" value={post.title} maxChar={50} />
                </div>
                <div className="mt-4">
                    <Chip iconName={typeIcon[post.category.slug]} text={post.category.name} />
                    <div className="flex flex-wrap mt-2 mb-2">
                    {
                        post.technologies.length === 0 ?
                            <div className="pt-1"><Chip text={'None'} background="#CCE7E1" /></div>
                            :
                            post.technologies.map((item, index) => {
                                return <div key={index} className='pr-1 pt-1'><Chip text={item.name} background="#CCE7E1" /></div>
                            })}
                </div>
                </div>
                

            </div>
        </div>
    )
}