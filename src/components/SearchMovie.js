import React from "react";
const SearchMovie = ({setNameSearch, setRateSearch}) => {

  


    return (
      <div className="search-bar">
        <input
          className="search"
          type="text"
          placeholder="Search_Title"
          onChange={(e)=> setNameSearch(e.target.value)}
          
        />
         <input
          className="search"
          type="text"
          placeholder="Search_Rate"
          onChange={(e)=> setRateSearch(e.target.value)}
          
        /> 
  
      
      </div>
    );


};
export default SearchMovie
