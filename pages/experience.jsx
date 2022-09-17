import MainLayout from "../layouts/MainLayout";

export default function experience() {
  return (
    <MainLayout page="Experience">
      <div className="my-container">
        <h2>Work Experience</h2>
        <hr />
        <div className="list-column">
          <div className="my-row gap-4 pt-1">
            <div className="fill-box rounded">
              <div className="d-flex">
                <div className="me-auto">
                  <h5>Denso International Asia (Thailand) Co., Ltd.</h5>
                </div>
                <div>Jun, 2022 - Aug, 2022</div>
              </div>
              <div className="text-h">
                Sotfware Developer - Internship (Part-time)
              </div>
              <ul className="mt-2">
                <li>
                  Collaborated with product team members to implement new
                  feature developments.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-row gap-4 pt-1">
            <div className="fill-box rounded">
              <div className="d-flex">
                <div className="me-auto">
                  <h5>Feedback180 Co., Ltd.</h5>
                </div>
                <div>Mar, 2021 - May, 2021</div>
              </div>
              <div className="text-h">Data Scientist - Internship</div>
              <ul className="mt-2">
                <li>
                  Remodeled Thai text spelling correction for improving Thai
                  text NLP performance. Accuracy was increased from 55% to 68%.
                </li>
                <li>
                  Performed Co-occurrence analysis to extract and display the
                  co-occurrence word from the text corpus.
                </li>
                <li>
                  Optimized and evaluated sentiment analysis and text
                  classification models Achieved 10% better returns.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-container center">
        <h2>My Project</h2>
        <div className="my-cards mt-5">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="images/QuizDungeon.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Quiz Dungeon</h5>
                  <p className="card-text">
                    My first year project in Basic Computer Engineering class.
                    Developed game with scratch
                  </p>
                  <a
                    href="https://scratch.mit.edu/projects/558050357/"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row sh100 g-0">
              <div className="col-md-4">
                <img
                  src="images/HEXAWAR.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">HEXA WAR</h5>
                  <p className="card-text">
                    My first year project in Computer programming class.
                    Developed game with c++
                  </p>
                  <a
                    href="https://github.com/pitipat9029/CUBIC-WAR-project-grop10-CPP"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
