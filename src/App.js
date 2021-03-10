import React, { useState, useEffect } from 'react';
import './App.css';
import LogoContainer from './component/LogoContainer';
import BookContainer from './component/BookContainer';
import SearchComponent from './component/SearchComponent';
import Header from './component/HeaderContainer';


function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  return (
    <div className="App">

      <div className="sidebar-nav">

      </div>

      <LogoContainer />

      <div className="main-container">
        <Header />
        <SearchComponent searchCb={handleSearch} />
        <BookContainer searchTerm={searchTerm} />
      </div>


    </div>
  );
}

export default App;
