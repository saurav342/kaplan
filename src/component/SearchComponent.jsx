import React, { useState } from 'react';

const SearchComponent = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const onInput = (e) => {
        props.searchCb(e.target.value);
    }
    return (<>
        <div className="search-container">
          <input placeholder="Search" type="text" onChange={(e) => onInput(e)} />
        </div>
    </>
    );
}

export default SearchComponent;