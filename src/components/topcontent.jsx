import "./topcontent.css";
import image from "../images/img3.png";

function TopContent() {
  return (
    <div className="body">
      
      <div className="body__content">
        <h3 data-aos="fade-up" data-aos-duration="1000">
          Hi, Iam <span>Madhu</span>
        </h3>
        <p className="role" data-aos="fade-up" data-aos-duration="1000">Front-End Developer</p>
        <p className="para" data-aos="fade-up" data-aos-duration="1000">
          A passionate front-end developer with focus on creating user-friendly
          web designs
        </p>
        <div className="button" data-aos="fade-up" data-aos-duration="1000">
          <button className="hire">
            <a href="#Contact">Hire me</a>
          </button>
          <button className="resume">
            <a href="https://drive.google.com/file/d/1BYAXlR-svCb6KOpAhWeG6paibzzx2BAS/view?usp=sharing" download="PDF" target="_blank">Resume</a>
          </button>
        </div>
      </div>
      <div className="body__image"data-aos="fade-up" data-aos-duration="1000">
        <img src={image} alt="ldk" />
      </div>
    </div>
  );
}
export default TopContent;
