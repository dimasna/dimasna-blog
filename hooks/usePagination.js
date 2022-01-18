import { useState } from "react";

function usePagination(data, filter, sorted, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    let result = (sorted === 'Latest') ? data.slice(null, data.length).sort((a, b) => new Date(b.node.createdAt).getTime() - new Date(a.node.createdAt).getTime())
      :
      data.slice(null, data.length).sort((a, b) => new Date(a.node.createdAt).getTime() - new Date(b.node.createdAt).getTime());

    if (filter != 'Show All') {
      let filtered = result.filter(post => post.node.category.name === filter);
      return filtered.slice(null, end);
    }
    return result.slice(null, end)
  }

  function next() {
    setTimeout(() => {
      setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    }, 1000)

  }

  return { next, currentData, currentPage, maxPage };
}

export default usePagination;