import React from 'react'
import horse from "../resources/horse.jpg"

import banner2 from "../resources/banner.jpg"

export default function Carousal() {
  return (
  //   <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" style={{height:"40vh"}}>
  //   <div className="carousel-inner" style={{height:"40vh"}}>
  //     <div className="carousel-item active" data-interval="1000"  style={{height:"40vh"}}>
  //         <img src={horse} className="d-block w-100" style={{height:"40vh"}}  alt="..."/>
  //     </div>
  //     <div className="carousel-item" data-interval="1000"  style={{height:"40vh"}}>
  //         <img src={banner2} className="d-block w-100" style={{height:"40vh"}}  alt="..."/>
  //     </div>
  //     <div className="carousel-item" data-interval="1000"  style={{height:"40vh"}}>
  //         <img src={horse} className="d-block w-100" style={{height:"40vh"}}  alt="..."/>
  //     </div>
  //   </div>
  // </div>

//   <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img className="d-block w-100" src={horse} alt="First slide"/>
//     </div>
//     <div className="carousel-item">
//       <img className="d-block w-100" src={banner2} alt="Second slide"/>
//     </div>
//     <div className="carousel-item">
//       <img className="d-block w-100" src={horse} alt="Third slide"/>
//     </div>
//   </div>
// </div>

<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" style={{height:"40vh"}}>
  <div class="carousel-inner" style={{height:"40vh"}}>
    <div class="carousel-item active" data-bs-interval="1000" >
      <img src={horse} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={banner2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={horse} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}
