function ProfileSkills() {
  return (
    <section className="profile my-6">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-uppercase fw-bold">Profile</h3>
            <p>
              Here is some more info about myself to help you get to know me
              better.
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item mb-3">
                <h5 className="text-transform">
                  <i className="bi bi-person-fill text-primary"></i> Full Name:
                </h5>
                <p>Kieran Price</p>
              </li>
              <li className="list-group-item mb-3">
                <h5 className="text-transform">
                  <i className="bi bi-calendar text-primary"></i> Birth Date:
                </h5>
                <p>November 16</p>
              </li>
              <li className="list-group-item mb-3">
                <h5 className="text-transform">
                  <i className="bi bi-building text-primary"></i> Current
                  Position:
                </h5>
                <p>Student</p>
              </li>
              <li className="list-group-item mb-3">
                <h5 className="text-transform">
                  <i className="bi bi-web text-primary"></i> Website:
                </h5>
                <p>null</p>
              </li>
              <li className="list-group-item mb-3">
                <h5 className="text-transform">
                  <i className="bi bi-envelope text-primary"></i> Email:
                </h5>
                <p>enquires.kieran@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3 className="text-uppercase fw-bold">Skills</h3>
            <p>
              Here is a list of my skills with my level of confindence in them
            </p>
            <h5>
              <i className="bi bi-check"></i> HTML 5
            </h5>
            <div
              className="progress mb-4"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar" style={{ width: "100%" }}>
                100%
              </div>
            </div>

            <h5>
              <i className="bi bi-check"></i> CSS
            </h5>
            <div
              className="progress mb-4"
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar" style={{ width: "90%" }}>
                90%
              </div>
            </div>

            <h5>
              <i className="bi bi-check"></i> JavaScript
            </h5>
            <div
              className="progress progress-animated mb-4"
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar" style={{ width: "90%" }}>
                90%
              </div>
            </div>

            <h5>
              <i className="bi bi-check"></i> Bootstrap
            </h5>
            <div
              className="progress mb-4"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar" style={{ width: "100%" }}>
                100%
              </div>
            </div>

            <h5>
              <i className="bi bi-check"></i> PHP
            </h5>
            <div
              className="progress mb-4"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar" style={{ width: "75%" }}>
                75%
              </div>
            </div>

            <h5>
              <i className="bi bi-check"></i> Python
            </h5>
            <div
              className="progress mb-4"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar" style={{ width: "70%" }}>
                70%
              </div>
            </div>

            <h5>
              <i className="bi bi-check"></i> UI/UX
            </h5>
            <div
              className="progress mb-4"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar" style={{ width: "70%" }}>
                70%
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 text-center">
          <div className="col-12">
            <a
              href="#"
              className="btn btn-outline-dark btn-lg text-uppercase px-5 mx-3 my-2"
            >
              Hire Me Now
            </a>
            <a
              href="#"
              className="btn btn-dark btn-lg text-uppercase px-5 mx-3 my-2"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSkills;
