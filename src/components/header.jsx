import { useState } from "react";
import "./header.css";
export function Header() {
  const[show,setShow]=useState(false);
  function showNav(){
    setShow(!show)
  }
  return (
   
    <header>
      <div className="my__name" data-aos="fade-right" data-aos-duration="1000">
        <h2>MADHUSHREE</h2>
      </div>
      <div className={show?"nav__links active":"nav__links"}>
        <ul>
          <li>
            <a href="/" onClick={showNav} >Home</a>
          </li>
          <li>
            <a href="#about" onClick={showNav}>About </a>
          </li>
          <li>
            <a href="#skills"onClick={showNav}>Skills</a>
          </li>
          
          <li>
            <a href="#project"onClick={showNav}>Projects</a>
          </li>
          <li>
            <a href="#Contact"onClick={showNav}>Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav__bar" onClick={showNav} data-aos="fade-left" data-aos-duration="1000">
        <i class="fa-sharp fa-solid fa-bars"></i>
      </div>
    </header>
  );
}
