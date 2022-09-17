import Hero from "../components/Hero";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout page="Home" isHome={true}>
      <Hero />
      <div className="my-container center">
        <h2>About me</h2>
        <div className="my-row-colum gap-4 pt-1">
          <div className="personal-box rounded">
            <img
              className="img-profile rounded-circle img-hidden"
              src="images/profile.jpg"
              alt="person"
            />
            <p>
              Hi! My name is Atipat. I am studying Computer Engineering at
              Chiang Mai University. I familiar with sotfware development and
              NLP. I interested in AI technology and Quantum Computing.
            </p>
          </div>
          <div className="fill-box rounded">
            <h4>Education</h4>
            <hr />
            <div>
              <div className="d-flex">
                <div className="me-auto">
                  <span className="text-h">
                    Bachelor of Engineering in Computer Engineering
                  </span>
                  <span>(Second year)</span>
                </div>
                <div>2021 - present</div>
              </div>
              <div>Chiang Mai University, Thailand</div>
              <div>GPA: 3.92</div>
            </div>
            <br />
            <div>
              <div className="d-flex">
                <div className="me-auto">
                  <span className="text-h">
                    High school, Mathematics and Science
                  </span>
                </div>
                <div>2018 - 2021</div>
              </div>
              <div>The Prince Royal`s College, Chiang Mai, Thailand</div>
              <div>Gifted Computer program</div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-container center">
        <h2>What can I do for you</h2>
        <div className="my-cards mt-5">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Full-Stack Developer</h5>
              <p className="card-text">
                Developed full-stack web applications which processed, analyzed,
                and rendered data visually.
              </p>
              <div className="my-skills">
                <span className="me-2">Skills: </span>
                <div className="skills-list">
                  <img
                    className="skill-icon"
                    src="images/icon/html-5.png"
                    alt=""
                  />
                  <img
                    className="skill-icon"
                    src="images/icon/css.png"
                    alt=""
                  />
                  <img
                    className="skill-icon"
                    src="images/icon/php.png"
                    alt=""
                  />
                  <img
                    className="skill-icon"
                    src="images/icon/mysql.png"
                    alt=""
                  />
                  <img
                    className="skill-icon"
                    src="images/icon/react.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <img
              src="images/programming.jpg"
              className="card-img-bottom"
              alt="Homer Simpson"
            />
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Data Scientist</h5>
              <p className="card-text">
                Designed and built statistical analysis models on large data
                sets. Familiar with Computer Vison and NLP.
              </p>
              <div className="my-skills">
                <span className="me-2">Skills: </span>
                <div className="skills-list">
                  <img
                    className="skill-icon"
                    src="images/icon/python.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <img
              src="images/data_analysis.jpg"
              className="card-img-bottom"
              alt="Homer Simpson"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
