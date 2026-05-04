function Projects() {
  return (
    <main className="projects-page">
      <h1>My Projects</h1>
      <p className="projects-intro">
        Here are some projects I have worked on while learning AI, Machine Learning,
        Deep Learning.
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Text Summarizer</h3>
          <p>
            A web app built using HuggingFace Transformers and T5 model to summarize
            long text into short meaningful summaries.
          </p>
          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>Fall Detection System</h3>
          <p>
            A deep learning project using IMU sensor data to detect human activities
            and fall events.
          </p>
          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>Sentiment Analysis</h3>
          <p>
            A neural network based NLP project for classifying movie reviews as
            positive or negative.
          </p>
          <button>View Project</button>
        </div>
      </div>
    </main>
  );
}

export default Projects;