import Text from "./Text";
import Chip from "./Chip";
import moment from "moment";
export default function Card({ imgUrl, title, category, stack, date, action }) {
    return (
        <div className="flex flex-col flex-1 hover:bg-gray-100 cursor-pointer ring-gray-50 border rounded shadow min-w-50 max-w-40" onClick={() => action()}>
            <img className="object-cover rounded-t min-h-40" src={imgUrl} />
            <div className="py-2 px-3">
                <Text type="title" value={title} />
                <div className="mt-4">
                    <Chip iconName='github' text={category} />
                </div>
                <div className="flex space-x-2 mt-2">
                    {stack.map((item, index) => {
                        return <Chip key={index} text={item} background="#CCE7E1" />
                    })}
                </div>
                <div className="mt-3 mb-2">
                    <Text type="date" value={moment(date).format('MMM DD, YYYY')} />
                </div>
            </div>
        </div>
    )
}