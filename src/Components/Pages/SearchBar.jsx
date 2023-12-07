import React, { createContext, useContext, useState } from 'react'

const SearchContext = createContext();
const SearchProvider = ({children}) => {
    const [search, setSearch] = useState({
        title: "",
        results: [],
    })
  return (
    <div>
        <SearchContext.Provider value={[search, setSearch]}>
            {children}
        </SearchContext.Provider>
    </div>
  )
}
const useSearchBox = ()=> useContext(SearchContext)
export {useSearchBox, SearchProvider};