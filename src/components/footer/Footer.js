export default function Footer() {
  return (
    <div className="row justify-content-center py-4 text-bg-light m-0 mt-4">
      <div className="col-lg-8 col-12 mt-4">
        <div className="row gap-4">
          <div className="col">
            <h4 className="fw-bold">Company</h4>
            <div className="d-flex flex-column gap-3 mt-3 fs-sm">
              <a className="nav-link" href="/">
                Terms of service
              </a>
              <a className="nav-link" href="/">
                Privacy policy
              </a>
              <a className="nav-link" href="/">
                Cookie policy
              </a>
              <a className="nav-link" href="/">
                Contact
              </a>
            </div>
          </div>
          <div className="col">
            <h4 className="fw-bold">Social Media</h4>
            <div className="d-flex gap-3 mt-3">
              <a
                rel="noreferrer noopener"
                title="GitHub Profile"
                target={"_blank"}
                className="nav-link"
                href="https://github.com/pasabaa"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                rel="noreferrer noopener"
                title="Instagram Profile"
                target={"_blank"}
                className="nav-link"
                href="https://www.instagram.com/pasabaaa/"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                rel="noreferrer noopener"
                title="Reddit Profile"
                target={"_blank"}
                className="nav-link"
                href="https://www.reddit.com/user/PaSaball"
              >
                <i className="bi bi-reddit"></i>
              </a>
              <a
                rel="noreferrer noopener"
                title="Youtube Channel"
                target={"_blank"}
                className="nav-link"
                href="https://www.youtube.com/channel/UC6HfZKd1Z8LvET3wBKelDEA/featured"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
            <h4 className="fw-bold mt-4">Portfolio</h4>
            <div className="d-flex gap-3 mt-3 fs-sm">
              <a className="nav-link" href="/">
                See all projects
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="card bg-transparent border-0 h-100 d-flex align-items-center justify-content-center p-2">
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/favicon/favicon-32x32.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-12 my-2">
        <hr />
      </div>
      <div className="col-lg-8 col-12">
        <p className="fs-sm">
          <b>pasabaa</b> &copy; Copyright - 2022
        </p>
      </div>
    </div>
  );
}
