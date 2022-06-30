export default function JavaScriptPage() {
  return (
    <div className="container p-4">
        <div className="row justify-content-between">
            <div className="col-12">
                <h1 className="fw-light">Frameworks</h1>
                <h3 className="fw-bold">JavaScript Projects</h3>
                <div className="row justify-content-start gap-3 mt-4 py-4">
                    <div className="card border-0 p-0">
                        <div className="card-body d-flex flex-column justify-content-around">
                            <div className="m-0">
                                <h6 className="fw-bold">CRUD with NodeJS and MongoDB</h6>
                                <span className="badge text-bg-green">Online</span>
                            </div>

                            <img className="rounded img-fluid my-3" src={process.env.PUBLIC_URL + "/img/projects/crud-mongodb.png"}
                                alt="" />
                            <p className="fs-sm text-muted m-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Provident dolor quisquam velit veritatis distinctio,
                                reiciendis maiores.
                            </p>
                            <hr className="m-0 my-2" />
                            <p className="fs-sm fw-bold">Learn More</p>
                            <div className="d-flex gap-2">
                                <a rel="noreferrer noopener" target={'_blank'} className="btn btn-sm fs-sm text-bg-green rounded-pill" href="https://tasks-app-crud-pasabaa.herokuapp.com/">
                                    <i className="bi bi-globe"></i>
                                </a>
                                <a rel="noreferrer noopener" target={'_blank'} className="btn btn-sm fs-sm text-bg-blue rounded-pill" href="https://github.com/pasabaa/crud-mongodb">
                                    <i className="bi bi-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 p-0">
                        <div className="card-body d-flex flex-column justify-content-around">
                            <div className="m-0">
                                <h6 className="fw-bold">Tasks with React</h6>
                                <span className="badge text-bg-green">Online</span>
                            </div>

                            <img className="rounded img-fluid my-3" src={process.env.PUBLIC_URL + "/img/projects/task-with-react.png"}
                                alt="" />
                            <p className="fs-sm text-muted m-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Provident dolor quisquam velit veritatis distinctio,
                                reiciendis maiores.
                            </p>
                            <hr className="m-0 my-2" />
                            <p className="fs-sm fw-bold">Learn More</p>
                            <div className="d-flex gap-2">
                                <a rel="noreferrer noopener" target={'_blank'} className="btn btn-sm fs-sm text-bg-green rounded-pill" href="https://pasabaa.github.io/react-localstorage/">
                                    <i className="bi bi-globe"></i>
                                </a>
                                <a rel="noreferrer noopener" target={'_blank'} className="btn btn-sm fs-sm text-bg-blue rounded-pill" href="https://github.com/pasabaa/react-localstorage">
                                    <i className="bi bi-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
