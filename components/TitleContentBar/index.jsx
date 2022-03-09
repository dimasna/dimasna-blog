import { useState } from "react";
import Button from "../Button";
import Icon from "../Icon";
import Select from "../Select";
export default function TitleContentBar({ options, selectTitle, setSelectTitle, sortedBy, setSortedBy }) {
    const handleSort = () => {
        sortedBy === 'Latest' ? setSortedBy('Oldest') : setSortedBy('Latest');
    }
    return (

        <div className="flex justify-between mx-2 py-2 border-b dark:border-gray-600">
            <div className="flex items-center space-x-2 ">
                <Icon className="dark:stroke-gray-400 stroke-gray-500" name="grid" width={20} height={20} />
                <Select options={options} value={selectTitle} setValue={setSelectTitle} />
            </div>
            <Button variant="outline" size="small" iconName={sortedBy === 'Latest' ? 'arrow-down' : 'arrow-up'} onClick={handleSort}>{sortedBy}</Button>
        </div>
    )
}