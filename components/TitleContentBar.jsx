import { useState } from "react";
import Icon from "./Icon";
import Select from "./Select";
export default function TitleContentBar ({options, selectTitle, setSelectTitle}){
  
    return (
        <div className="flex items-center mx-2 py-2 space-x-2 border-b">
            <Icon name="grid" width={20} height={20}/>
            <Select options={options} value={selectTitle} setValue={setSelectTitle}/>
        </div>
    )
}