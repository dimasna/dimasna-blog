import Card from "./Card";
export default function CardContainer({posts, updateShow}){
    
    return(
        <div className={`px-2 py-3 flex flex-row flex-wrap justify-between gap-4`}>
            {
            posts.map((item, index) => {
              const { name: categoryName, slug: categorySlug } = item.node.category;
              const { url: featuredImageUrl } = item.node.featuredImage;
              const { title, technologies, description, slug, createdAt } = item.node;
              return <Card key={index} category={categoryName} action={updateShow} date={createdAt} title={title} stack={technologies} imgUrl={featuredImageUrl} />
            })
          }
        </div>
    )
}