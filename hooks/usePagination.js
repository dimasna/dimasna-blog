import { useState } from "react";

function usePagination(data, filter, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    if(filter != 'Show All'){
      let filtered = data.filter(post => post.node.category.name === filter);
      return filtered.slice(null, end);
    }else{
      return data.slice(null, end);
    }
    
  }

  function next() {
    setTimeout(()=>{
      setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    },1000)
   
  }

  return { next, currentData, currentPage, maxPage };
}

export default usePagination;