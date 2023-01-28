import React from "react";
import logo from "../resources/logo.png";
import user from "../resources/user.png";
import linkedin from "../resources/linkedin.png";
import github from "../resources/github.png"
import meta from "../resources/meta.png"
import instagram from "../resources/instagram.png"
import blog from "../resources/blog.png"

export default function CompanyAboutUs() {
  return (
    <div className="row mx-0 mb-4" >
      <div className="col-md-4">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <img src={logo} alt="logo" style={{ objectFit: "none" }} />
          <h2>All in one Portal</h2>
          <h4>One destination for all your utilities</h4>
        </div>
      </div>
      <div
        className="col-md-5 mt-3"
        style={{
          textAlign: "start",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <h2>Links</h2>
        <ul className="list-unstyled">
          <li>
            <h4>
              <a href="/websearch" style={{ color: "black" }}>
                Websearch
              </a>
            </h4>
          </li>
          <li>
            <h4>
              <a href="/multiplex" style={{ color: "black" }}>
                Multiplex
              </a>
            </h4>
          </li>
        </ul>
      </div>
      <div
        className="col-md-3"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Developer</h2>
        <img
          src={user}
          alt="user"
          style={{ width: "50%", height: "auto", alignContent: "center" }}
        ></img>
        <h3>Gaurav Sharma</h3>
        <div >
          <a href="https://in.linkedin.com/in/gauravsharma97" rel="noreferrer"  target="_blank" className="mx-1">
            <img src={linkedin} alt="linkedin"></img>
          </a>
          <a href="https://github.com/gauravsharma97" rel="noreferrer"  target="_blank" className="mx-1">
            <img src={github} alt="github"></img>
          </a>
          <a href="https://www.facebook.com/gauravbhilwara/" rel="noreferrer"  target="_blank" className="mx-1">
            <img src={meta} alt="meta"></img>
          </a>
          <a href="https://www.instagram.com/iamgauravsharmaa/" rel="noreferrer"  target="_blank" className="mx-1">
            <img src={instagram} alt="insta"></img>
          </a>
          <a href="http://thebackgroundstories.blogspot.com/" rel="noreferrer"  target="_blank" className="mx-1">
            <img src={blog} alt="blog"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
