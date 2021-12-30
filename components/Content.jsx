import Chip from "./Chip";
export default function Content({data, loading, error, reactContent}){
console.log('content'+JSON.stringify(data))
if(loading)return <p>loading...</p>;
if(error)return <p>{error}</p>
    return(
            <div>
                <h2 className="text-2xl leading-6 font-medium text-gray-900">{data?.post && data.post.title}</h2>
                <div className="mt-4">
                    <Chip iconName='github' text={data?.post && data.post.category.name} />
                </div>
                <hr className="mt-4" />
                <div className="mt-2 py-3">
                    {data?.post && <img src={ data.post.featuredImage.url} style={{ width: '100%', height: '300px', objectFit: 'contain', marginBottom: '1em' }} /> }
                    {data?.post && <div className="text-md text-gray-800 mb-10">
                        {reactContent}
                    </div>}
                </div>
            </div>
    )
}