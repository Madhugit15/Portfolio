import './projects.css'
export function Project(){
    return (
        <section className="project" id="project">
            <h1 data-aos="fade-up" data-aos-duration="1000">PROJECTS</h1>

           <div className="project__content" data-aos="fade-up" data-aos-duration="1000">
            <div className="project__details" data-aos="fade-up" data-aos-duration="1000">
                 <h3>Personal Portfolio Website</h3>
                  <h4>Technology Used : React Js</h4>
                <p>A Portfolio website to showcase my skills and knowledge </p>
                 <button data-aos="fade-up" data-aos-duration="1000"><a href="">Link</a></button>
                </div>
                <div className="project__details" data-aos="fade-up" data-aos-duration="1000">
                 <h3>Simple Coffee Shop Website</h3>
                  <h4>Technology Used : Javascript</h4>
                <p>A Simple coffee shop website using javascript with responsive nav bar</p>
                 <button data-aos="fade-up" data-aos-duration="1000" ><a href="https://beancoffee.netlify.app">Link</a></button>
                </div>
                <div className="project__details" data-aos="fade-up" data-aos-duration="1000">
                 <h3>Book Search Website</h3>
                  <h4>Technology Used : React Js</h4>
                <p>A book website using ReactJS, fetching book data from a JSON file to display a dynamic, filterable
                book list.</p>
                 <button data-aos="fade-up" data-aos-duration="1000"><a href="https://booksearches.netlify.app">Link</a></button>
                </div>
                </div> 
        </section>
    )
}