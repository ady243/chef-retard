import './component.css';




const SearchBar = () => {



    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div class="input-wrapper">
            <button class="icon"> 
               
            </button>
            <input placeholder="search.." class="input" name="text" type="text"/>
        </div>
    )
}

export default SearchBar;