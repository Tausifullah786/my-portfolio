import protfile from "../assets/portfolio.jpeg";

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-text">
          <h1>Hey, I am Tausif Ullah</h1>
          <h3>AI & Machine Learning Engineer</h3>
          <p>
              I design and build AI-powered applications using <span>Machine Learning</span>,
              <span>Deep Learning</span>, and <span>Transformer models (T5)</span>. I have
              developed projects like a Text Summarizer and deployed models using.
              <span>FastAPI</span>
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="secondary-btn">View Projects</a>
            <a href="/contact" className="secondary-btn">Contact Me</a>
            <a href="/cv.pdf" download className="secondary-btn">Download CV</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={protfile} alt="Tausif ullah profile" />
        </div>
      </section>
    </main>
  );
}

export default Home;