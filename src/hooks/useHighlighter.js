const useHighlighter = (text, searchQuery, highlightClass) => {
  return searchQuery
    ? text.replace(new RegExp(searchQuery, 'gi'), match => {
        return `<span data-cy='search_${searchQuery}' class="${highlightClass}">${match}</span>`
      })
    : text
}

export default useHighlighter
