import Text from "./Text";
import Chip from "./Chip";
import moment from "moment";
import typeIcon from "../typeIcon";
export default function Card({ post, action }) {
    return (
        <div className="flex xxs:basis-full sm:basis-48  md:basis-48 lg:basis-48 xl:basis-25 flex-col hover:bg-gray-100 cursor-pointer ring-gray-50 border rounded shadow lg:max-w-55 xl:max-w-51 2xl:max-w-52" onClick={() => action()}>

            <img className="h-40 object-cover rounded-t" src={post.featuredImage.url} />

            <div className="py-2 px-3">
                
                    <Text type="date" value={moment(post.createdAt).format('MMM DD, YYYY')} />
                
                <Text type="title" value={post.title} />
                <div className="mt-4">
                    <Chip iconName={typeIcon[post.category.slug]} text={post.category.name} />
                </div>
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
    )
}