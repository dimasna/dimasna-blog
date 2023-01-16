import Card from "../Card";

export default function CardContainer({ posts, setSlug }) {

  return (
    <div className={`px-2 py-3 grid xxs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2`}>
      {
        posts.map((item, index) => {
          return <Card key={index} action={() => {
            setSlug(item.node.slug);
          }} post={item.node} />
        })
      }
    </div>
  )
}