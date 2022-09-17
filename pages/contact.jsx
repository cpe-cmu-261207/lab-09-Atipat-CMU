import MainLayout from "../layouts/MainLayout";

export default function contact() {
  return (
    <MainLayout page="Contact">
      <div className="my-container center">
        <h2>My Contact</h2>
        <hr />
        <div className="rounded contact-box">
          <div>
            <img
              className="img-profile rounded-circle"
              src="images/profile.jpg"
              alt="person"
            />
          </div>
          <div className="contact-lists">
            <div className="contact-list">
              <span className="contact-list-lable">Name</span>
              <span className="contact-list-d">Atipat Daowraeng</span>
            </div>
            <div className="contact-list">
              <span className="contact-list-lable">Nickname</span>
              <span className="contact-list-d">Bond</span>
            </div>
            <div className="contact-list">
              <span className="contact-list-lable">Address</span>
              <span className="contact-list-d">
                73/2 Thanon Rama VI, Thung Phaya Thai, Ratchathewi, Bangkok
                10400
              </span>
            </div>
            <div className="contact-list">
              <span className="contact-list-lable">Facebook</span>
              <a
                className="contact-list-d"
                href="https://www.facebook.com/ball.atipat/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.facebook.com/ball.atipat/
              </a>
            </div>
            <div className="contact-list">
              <span className="contact-list-lable">Email</span>
              <a className="contact-list-d" href="mailto:atipat_d@cmu.ac.th">
                atipat_d@cmu.ac.th
              </a>
            </div>
            <div className="contact-list">
              <span className="contact-list-lable">Phone</span>
              <span className="contact-list-d">088-991-4205</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
