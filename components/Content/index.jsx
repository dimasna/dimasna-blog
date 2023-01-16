import typeIcon from "../../typeIcon";
import Chip from "../Chip";
import Loading from "../Loading";
import Image from 'next/image'
export default function Content({ data, loading, error, reactContent }) {
    // console.log('content' + JSON.stringify(data))
    if (loading) return <div className="text-center pb-4" ><Loading /></div>;
    if (error) return <p>{error}</p>
    return (
        <div>
            <h2 className="text-2xl leading-6 font-medium dark:text-gray-300 text-gray-900">{data?.post && data.post.title}</h2>
            <div className="mt-4">
                {data?.post && <Chip iconName={typeIcon[data.post.category.slug]} text={data.post.category.name} />}
            </div>
            <hr className="mt-4 dark:border-gray-500" />
            <div className="mt-2 py-3">
                <div style={{ width: '100%', height: '400px', position: 'relative' }}>
                    {data?.post &&
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src={data.post.featuredImage.url}
                        />
                    }
                </div>
                {data?.post && <div className="text-md dark:text-gray-100 text-gray-800 mb-10 pt-4">
                    {reactContent}
                </div>}
            </div>
        </div>
    )
}