import profile from "../assets/portfolio.jpeg";

function About() {
  return (
    <main className="about-page">
      <div className="about-hero">
        <div className="about-img-box">
          <img src={profile} alt="Tausif Ullah" />
        </div>

        <div className="about-text">
          <span className="section-label">About Me</span>
          <h1>AI & Machine Learning Engineer</h1>

          <p>
            I am a Computer Science student passionate about building intelligent
            systems using Machine Learning, Deep Learning, and modern AI tools.
            I enjoy turning real-world problems into practical AI-based solutions.
          </p>

          <p>
            My work includes projects in NLP, Transformer-based models like T5,
            FastAPI-based deployment, and deep learning model development.
          </p>

        </div>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <h3>🎓 Education</h3>
          <p>BS Computer Science  currently building strong foundations in AI, software development, and problem solving.</p>
        </div>

        <div className="about-card">
          <h3>🤖 AI Interests</h3>
          <p>Machine Learning, Deep Learning, NLP, Transformers, model evaluation, and intelligent applications.</p>
        </div>

        <div className="about-card">
          <h3>🚀 Career Goal</h3>
          <p>To grow as an AI Engineer and build useful AI systems that solve real-world problems.</p>
        </div>
      </div>
    </main>
  );
}

export default About;