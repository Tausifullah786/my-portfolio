function Skills() {
  return (
    <main className="skills-page">
      <h1>My Skills</h1>
      <p className="skills-intro">
        I have learned and practiced Machine Learning and Deep Learning concepts, and I am continuously improving my skills by building real-world AI projects and exploring modern tools used in AI engineering
      </p>

      <div className="skills-grid">
        <div className="skill-card-pro">
          <h3>Programming</h3>
          <p>Python</p>
        </div>

        <div className="skill-card-pro">
          <h3>Machine Learning</h3>
          <p>Data Preprocessing,Feature Engineering, Model Training, Evaluation</p>
        </div>

        <div className="skill-card-pro">
          <h3>Deep Learning</h3>
          <p>ANN, CNN,LSTM,FNN, Transformers,RAG,OpenAi API's, PyTorch</p>
        </div>

        <div className="skill-card-pro">
          <h3>Data Tools</h3>
          <p>Pandas, NumPy,Seaborn, Matplotlib, Scikit-learn</p>
        </div>

        <div className="skill-card-pro">
          <h3>Backend & APIs</h3>
          <p>FastAPI, Flask</p>
        </div>
      </div>
    </main>
  );
}

export default Skills;