import React from 'react'
import MovieCard from './MovieCard'
import data from "../data/movieData.json";
import movieIcon from "../resources/film.png"

export default function Multiplex() {
  return (
    <div style={{marginTop:"55px"}}>
    <h1 style={{textAlign:"center"}}><i><strong>Multiplex</strong> </i><img  src={movieIcon} alt="Card cap" /></h1>
      <div className='container'>
      <div className='row'>
        {data.map((movie)=>{
        return ( <div className='col-md-3 my-2' key={movie.url}><MovieCard title={movie.title} url={movie.url}/></div>)
      })} 
      </div>
      
      </div>
      
      
    </div>
      

  )
}
