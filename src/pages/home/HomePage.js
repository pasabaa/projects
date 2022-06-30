import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="container p-4">
      <div className="row justify-content-between gap-4">
        <div className="col-lg-8 col-12">
          <div className="card border-0">
            <img src={process.env.PUBLIC_URL + "/img/projects/task-with-react.png" } className="card-img" alt="..." />
            <div className="card-img-overlay bg-overlay d-flex align-items-center justify-content-center">
              <div className="text-start">
                <h1 className="display-4 fw-bold">Last project</h1>
                <h4>Task with React</h4>
                <p className="fs-sm">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <h1 className="fw-bold">Main Projects</h1>
          <div className="row justify-content-around gap-3 mt-4 py-4">
            <div className="card border-0 p-0">
              <div className="card-body d-flex flex-column justify-content-around p-0">
                <div className='m-0'>
                  <h6 className='fw-bold'>Timeline Creator</h6>
                  <span className='badge text-bg-green'>Online</span>
                </div>

                <img className="rounded img-fluid my-3" src={process.env.PUBLIC_URL + "/img/projects/timeline.png" }
                  alt="" />
                <p className='fs-sm text-muted m-0'>Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Provident dolor quisquam velit veritatis distinctio, reiciendis maiores.</p>
                <hr className='m-0 my-2' />
                <p className='fs-sm fw-bold'>Learn More</p>
                <div className="d-flex gap-2">
                  <a rel="noreferrer noopener" target={'_blank'} className='btn btn-sm fs-sm text-bg-green rounded-pill'
                    href="https://pasabaa.github.io/timeline-vanilla/"><i className='bi bi-globe'></i></a>
                  <a rel="noreferrer noopener" target={'_blank'} className='btn btn-sm fs-sm text-bg-blue rounded-pill'
                    href="https://github.com/pasabaa/timeline-vanilla"><i className='bi bi-github'></i></a>
                </div>
              </div>
            </div>
            <div className="card border-0 p-0">
              <div className="card-body d-flex flex-column justify-content-around">
                <div className='m-0'>
                  <h6 className='fw-bold'>Game with JavaScript</h6>
                  <span className='badge text-bg-red'>In Process</span>
                </div>
                <img className="rounded img-fluid my-3" src={process.env.PUBLIC_URL + "/img/projects/game-js.png" }
                  alt="" />
                <p className='fs-sm text-muted m-0'>Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Provident dolor quisquam velit veritatis distinctio, reiciendis maiores.</p>
                <hr className='m-0 my-2' />
                <p className='fs-sm fw-bold'>Learn More</p>
                <div className="d-flex gap-2">
                  <a rel="noreferrer noopener" target={'_blank'} className='btn btn-sm fs-sm text-bg-red rounded-pill'
                    href="https://pasabaa.github.io/clicker-game/"><i className='bi bi-globe'></i></a>
                  <a rel="noreferrer noopener" target={'_blank'} className='btn btn-sm fs-sm text-bg-red rounded-pill'
                    href="https://github.com/pasabaa/clicker-game"><i className='bi bi-github'></i></a>
                </div>
              </div>
            </div>
            <div className="card border-0 p-0">
              <div className="card-body d-flex flex-column justify-content-around">
                <div className='m-0'>
                  <h6 className='fw-bold'>Google Message Generator</h6>
                  <span className='badge text-bg-green'>Online</span>
                </div>

                <img className="rounded img-fluid my-3" src={process.env.PUBLIC_URL
                  + "/img/projects/message-generator.png" } alt="" />
                <p className='fs-sm text-muted m-0'>Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Provident dolor quisquam velit veritatis distinctio, reiciendis maiores.</p>
                <hr className='m-0 my-2' />
                <p className='fs-sm fw-bold'>Learn More</p>
                <div className="d-flex gap-2">
                  <a rel="noreferrer noopener" target={'_blank'} className='btn btn-sm fs-sm text-bg-green rounded-pill'
                    href="https://pasabaa.github.io/message-generator/"><i className='bi bi-globe'></i></a>
                  <a rel="noreferrer noopener" target={'_blank'} className='btn btn-sm fs-sm text-bg-blue rounded-pill'
                    href="https://github.com/pasabaa/message-generator"><i className='bi bi-github'></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
