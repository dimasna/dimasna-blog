import Icon from "./Icon";
import Select from "./Select";
export default function TitleContentBar (){
    return (
        <div className="flex items-center mx-2 py-2 space-x-2 border-b">
            <Icon name="grid" width={20} height={20}/>
            <p>Sort by</p>
            <Select/>
        </div>
    )
}