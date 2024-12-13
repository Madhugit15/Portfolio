import "./skills.css";
export function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__head" data-aos="fade-up" data-aos-duration="1000">
        <h1>SKILLS</h1>
      </div>
      <div className="skills__content" data-aos="fade-up" data-aos-duration="1000">
        <div className="skills__content__head" data-aos="fade-up" data-aos-duration="1000">
          <h3>Programming Skills</h3>
        </div>
        <div className="skills__list" data-aos="fade-up" data-aos-duration="1000">
          <li>
            <h3>HTML 5</h3>
          </li>
          <span className="bar">
            <span className="html"></span>
          </span>
          <li>
            <h3>CSS 3</h3>
          </li>
          <span className="bar">
            <span className="css"></span>
          </span>
          <li>
            <h3>Javascript</h3>
          </li>
          <span className="bar">
            <span className="javascript"></span>
          </span>
          <li>
            <h3>React Js</h3>
          </li>
          <span className="bar">
            <span className="React"></span>
          </span>
        </div>
      </div>
    </section>
  );
}
