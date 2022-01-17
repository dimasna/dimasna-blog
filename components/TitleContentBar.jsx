import { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import Select from "./Select";
export default function TitleContentBar ({options, selectTitle, setSelectTitle}){
  
    return (
        
        <div className="flex justify-between mx-2 py-2 border-b">
            <div className="flex items-center space-x-2 ">
            <Icon name="grid" width={20} height={20}/>
            <Select options={options} value={selectTitle} setValue={setSelectTitle}/>
            </div>
            <Button variant="outline" size="small" iconName="arrow-up">Latest</Button>
        </div>
    )
}