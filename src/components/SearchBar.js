import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { setResult } from "../state/searchSlice";

export default function SearchBar() {
  const [suggestion, setSuggestion] = useState([]);
  const dispatch = useDispatch();
//   const s = useSelector((state) => state.searchResult);

  const searchAutocomplete = async (e) => {
    const a = e.target.value;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6395d28a90msh8e49707926cf556p16bfb7jsn1016d7e8146f",
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    };
    const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/spelling/AutoComplete?text=${a}`;
    const data = await fetch(url, options);
    const parsedData = await data.json();
    setSuggestion(parsedData);
  };

  const websearch = async (searchKeyword) => {
    
    const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "6395d28a90msh8e49707926cf556p16bfb7jsn1016d7e8146f",
          "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        },
      };
    const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${searchKeyword}&pageNumber=1&pageSize=10&autoCorrect=true`;
    const data = await fetch(url, options);
    const parsedData = await data.json();
    return parsedData.value;
    
  };
  const debounceFunction = (func, delay) => {
    let timer;
    return function (...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  const searchWeb = async(a) => {
    document.getElementById('searchInput').value=a
    setSuggestion([]);
    let returnedResult = await websearch(a);
    await dispatch(setResult(returnedResult))
   
  };
 
  return (
    <nav className="navbar navbar-light bg-light my-2 p-0">
      <div className="ms-auto me-auto" style={{display:"flex", position:"relative"}}>
      <div className="autcomplete ">
        <input
          className="form-control mr-sm-2"
          type="search"
          autoComplete="off"
          placeholder="Search"
          aria-label="Search"
          id="searchInput"
          onChange={debounceFunction(searchAutocomplete, 1000)}
          
        />
        {suggestion.length > 0 && (
          <div className="autocomplete-items">
            {suggestion.map((a) => (
              <div
                key={a}
                onClick={() => {
                  searchWeb(a);
                }}
              >
                {a}
              </div>
            ))}
          </div>
        )}
      </div>

      <button className="btn btn-outline-success my-2 my-sm-0 ml-1"  onClick={()=>{searchWeb(document.getElementById('searchInput').value)}}>
        Search
      </button>
      </div>
  </nav>
 
    
  );
}
