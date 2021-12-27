import Chip from "./Chip";
export default function Content({data, loading, error, reactContent}){
    
    return(
        loading || error ?
            <p>loading...</p>
            :
            <div>
                <h2 className="text-2xl leading-6 font-medium text-gray-900">{data.post && data.post.title}</h2>
                <div className="mt-4">
                    <Chip iconName='github' text="Career" />
                </div>
                <hr className="mt-4" />
                <div className="mt-2 py-3">
                    <img src={data.post && data.post.featuredImage.url} style={{ width: '100%', height: '300px', objectFit: 'contain', marginBottom: '1em' }} />
                    <div className="text-md text-gray-800 mb-10">
                        {reactContent}
                    </div>
                </div>
            </div>
    )
}