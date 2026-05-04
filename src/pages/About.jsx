import profile from "../assets/portfolio.jpeg";

function About() {
  return (
    <main className="about-page">
      <div className="about-container">
        <div className="about-content">
          <h1>About Me</h1>

          <p>
            I am a passionate Machine Learning and AI Engineering learner with a
            strong interest in building intelligent systems and solving real-world
            problems.
          </p>

          <p>
            I enjoy working with Python, data preprocessing, deep learning,
            model training, and evaluation. My goal is to become a skilled AI
            engineer and create impactful solutions.
          </p>

          <div className="about-info">
            <div>
              <h3>Education</h3>
              <p>BS Computer Science (In Progress)</p>
            </div>

            <div>
              <h3>Interests</h3>
              <p>AI, Machine Learning, Deep Learning</p>
            </div>

            <div>
              <h3>Goals</h3>
              <p>Become a professional AI Engineer</p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}

export default About;