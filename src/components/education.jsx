import "./education.css";

export function Education() {
  return (
    <section className="education">
      <div
        className="education__head"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1>EDUCATION</h1>
      </div>
      <div className="Edu-Content" data-aos="fade-up" data-aos-duration="1000">
        <div
          className="Edu-details"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            className="edu-section"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4>
              Vivekanandha College of Arts and Sciences for Women, Tiruchengode.
            </h4>
            <p className="degree">Bsc Biotechnology</p>
            <p>percentage - 84%</p>
          </div>
          <div className="year" data-aos="fade-up" data-aos-duration="1000">
            <button>2021 - 2024</button>
          </div>
        </div>
        <div
          className="Edu-details"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            className="edu-section"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4>Sowdambikaa Matric Higher Secondary School, Balasamuthiram.</h4>
            <p className="degree">HSC - TN State Board</p>
            <p>percentage - 92.5%</p>
          </div>
          <div className="year" data-aos="fade-up" data-aos-duration="1000">
            <button>2019 - 2021</button>
          </div>
        </div>
        <div
          className="Edu-details"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            className="edu-section"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4>Dr.V.Gengusamy Naidu Matric High School, Thottiyam.</h4>
            <p className="degree">SSLC-TN State Board</p>
            <p>percentage - 89.4%</p>
          </div>
          <div className="year" data-aos="fade-up" data-aos-duration="1000">
            <button>2018 - 2019</button>
          </div>
        </div>
      </div>
    </section>
  );
}
