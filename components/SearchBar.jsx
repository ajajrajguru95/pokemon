
const SearchBar = ({value, onChange, onSearch}) => {
    
    return (
        <div className="search-bar md:max-w-[400px] w-full flex rounded-lg overflow-hidden">
            <input 
            type="search" 
            className="flex-1 p-2 focus-visible:outline-[#120291] overflow-hidden" 
            value={value}
            onChange={onChange}
             />
            <button className="text-white p-2 bg-[#120291]" onClick={onSearch}>Search</button>
        </div>
    )
}

export default SearchBar