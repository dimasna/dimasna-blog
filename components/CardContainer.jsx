import Card from "./Card";

export default function CardContainer({ posts, updateShow, setSlug }) {

  return (
    <div className={`px-2 py-3 flex flex-wrap gap-4`}>
      {
        posts.map((item, index) => {
          return <Card key={index} action={() => {
            setSlug(item.node.slug);
            updateShow();
          }} post={item.node} />
        })
      }
    </div>
  )
}