import "./contact.css";
export function Contact() {
  return (
    <div className="Contact" id="Contact">
      <div
        className="contact__head"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1>CONTACT ME</h1>
      </div>
      <div
        className="Contact__details"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="socials" data-aos="fade-up" data-aos-duration="1000">
          <h3 data-aos="fade-up" data-aos-duration="1000">Get In Touch</h3>
          <a href="mailto:madhushree1530@gmail.com" data-aos="fade-up" data-aos-duration="1000">
            {" "}
            <i class="fa-brands fa-google"></i>
          </a>
         <a href="https://www.linkedin.com/in/madhushree026" data-aos="fade-up" data-aos-duration="1000" ><i class="fa-brands fa-linkedin-in"></i></a> 
        </div>
        <div className="map" data-aos="fade-up" data-aos-duration="1000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5511614624297!2d78.33317237403938!3d10.997211889165262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa49a6d8d98c0b%3A0x4e0a852c7c8e1310!2sKosavampatti%20Rd%2C%20Tamil%20Nadu%20621215!5e0!3m2!1sen!2sin!4v1729937388797!5m2!1sen!2sin"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
