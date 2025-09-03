import "../public/css/app.css";

function App() {
  return (

    <div className="resume-container">
      <div className="sidebar">
        <div className="contact">

          <img src="/assets/raj-1.jpg" alt="Raj Akoliya" className="profile-pic" />
          <h2>Raj Akoliya</h2>
          <h3>Man Stack Developer</h3>
          <p>📞 +91 7861821691</p>
          <a>📧 akoliyaraj62@gmail.com</a>
          <p>📍 Surat, Gujarat</p>
        </div>

        <div className="skills">
          <h3>SKILLS :</h3>
          <div className="skill-category">
            <h4>Technologies SKILLS</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap 5</li>
              <li>jQuery</li>
              <li>Media Query</li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>Backend & Frameworks :</h4>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>API & Integration :</h4>
            <ul>
              <li>RESTful APIs</li>
              <li>JWT Authentication</li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>Programming Languages :</h4>
            <ul>
              <li>C</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>

        <div className="language">
          <h3>LANGUAGES :</h3>
          <ul>
            <li>English</li>
            <li>Gujarati</li>
            <li>Hindi</li>
          </ul>
        </div>
      </div>

      <div className="main">
        <section className="about">
          <h2>Profile :</h2>
          <p>
            I am a  Full Stack Developer with a background in sales and communication. I specialize in building dynamic,
            responsive web applications using the MERN stack (HTML, CSS, JavaScript, Bootstrap, j-Query Media-Query And  Node.js Experience). I thrive on solving
            technical problems, creating seamless user experiences, and continuously learning modern development practices.
            With strong interpersonal skills from my sales background, I bring a unique blend of technical and people skills to every project.
          </p>
        </section>

        <section className="experience">
          <div className="education">
            <h3>EDUCATION :</h3>
            <ul>
              <li>Bachelor of Computer Applications</li>
              <li>Swarnim Startup & Innovation University</li>
              <li>Gandhinagar, India</li>
            </ul>
            <ul>
              <li>Higher Secondary Education (12th), GSEB</li>
              <li>M.N.J Patel School, Surat</li>
              <li>Surat, India</li>
            </ul>
          </div>
          <h2>Work Experience : </h2>
          <div className="job">
            <h4>Full Stack Project – E-commerce Web App</h4>
            <ul>
              <li>Developed a complete MERN stack e-commerce application with user authentication and cart functionality.</li>
              <li>Integrated payment gateways and managed product APIs.</li>
              <li>Used Redux for state management and responsive UI with Bootstrap 5.</li>
            </ul>
          </div>
          <div className="job">
            <h4>Full Stack Project</h4>
            <ul>
              <li>Led customer communication and closed B2B software deals.</li>
              <li>Coordinated with the technical team for custom requirements.</li>
              <li>Managed project timelines and ensured client satisfaction.</li>
            </ul>
          </div>
          <div class="section">
            <h2>Projects</h2>


            <div class="project">
              <strong>Html css Project:</strong> Fully functional cart feature using HTML, CSS, and JavaScript for an e-commerce UI.
            </div>

            <div class="project">
              <strong>Admin Panel in Node js:</strong> Built in Node.js, Express, MongoDB with full CRUD features and admin interface using Bootstrap.
              <a href="https://github.com/Raj6873/node-js/tree/main/Project-8-Adminpanel-panel" target="_blank" rel="noreferrer"> View Project</a>
            </div>

            <div class="project">
              <strong>Gaming Web:</strong> Gaming website using HTML, CSS, Node.js with game list and CRUD.
              <a href="https://github.com/Raj6873/node-js/tree/main/project-4%20gaming%20inventery" target="_blank" rel="noreferrer"> View Project</a>
            </div>
          </div>
          <div className="links">
            <h3>LINKS:</h3>
            <p>
              <a href="https://www.linkedin.com/in/raj-akoliya-3b591b2ba/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/Raj6873" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          </div>
        </section>
        <button className="download-btn" onClick={() => window.print()}>Download Resume</button>
      </div>
    </div>
  );
}

export default App;