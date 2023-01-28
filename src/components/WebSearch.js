import React from "react";
import SearchBar from "./SearchBar";
import WebResult from "./WebResult";
import { useSelector } from "react-redux";

export default function Base() {
  const data = useSelector((state) => state.searchResult);
  return (
    <div className="row" style={{marginTop:"55px"}}>
      <SearchBar />
      {data.map((a) => (
        <div className="col-12 my-3 " key={a.id}>
          <WebResult title={a.title} url={a.url} desc={a.snippet} />
        </div>
      ))}
    </div>
  );
}
