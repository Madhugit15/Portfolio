import "./about.css";
import aboutImage from '../images/img2.png'
export function About() {
  return (
    <section className="about" id="about">
      <div className="about__head" data-aos="fade-up" data-aos-duration="1000">
        <h1>ABOUT ME</h1>
      </div>
      <div className="about__details" data-aos="fade-up" data-aos-duration="1000"  >
      <div className="about__image" data-aos="fade-right" data-aos-duration="1000">
        <img src={aboutImage} alt="" />
      </div>
      <div className="about__content" data-aos="fade-left" data-aos-duration="1000">
        <p className="first__para">
          I’m a passionate front-end developer with a strong foundation in HTML,
          CSS, and JavaScript, complemented by my expertise in React. My focus
          is on creating responsive and user-friendly web designs 
          
        </p>
        <p className="sec__para">
          <ul>
            <li>
              Crafting semantic, accessible markup and styling for seamless
              layouts.
            </li>
            <li>Building interactive features that enhance user engagement.</li>
            <li>
              Ensuring that websites look great and function well on all
              devices.
            </li>
          </ul>
        </p>
        <div className="buttons" data-aos="fade-up" data-aos-duration="1000">
        <button className="hire"><a href="#Contact">Hire me</a></button>
        <button className="resume"><a href="https://drive.google.com/file/d/1BYAXlR-svCb6KOpAhWeG6paibzzx2BAS/view?usp=sharing" download="PDF" target="_blank">Resume</a></button>

        </div>
      </div>
      </div>
    </section>
  );
}
