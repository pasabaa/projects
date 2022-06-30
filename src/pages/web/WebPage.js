export default function WebPage() {
    return (
      <div className="container p-4">
          <div className="row justify-content-between">
              <div className="col-12">
                  <h1 className="fw-light">Web Tecnologies</h1>
                  <h3 className="fw-bold">HTML, CSS and JavaScript Projects</h3>
                  <div className="row justify-content-around gap-3 mt-4 py-4">

                      <div className="card border-0 p-0">
                          <div className="card-body d-flex flex-column justify-content-around p-0">
                              <div className='m-0'>
                                  <h6 className='fw-bold'>Timeline Creator</h6>
                                  <span className='badge text-bg-green'>Online</span>
                              </div>

                              <img className="rounded img-fluid my-3" src={process.env.PUBLIC_URL + "/img/projects/timeline.png"}
                                  alt="" />
                              <p className='fs-sm text-muted m-0'>Lorem ipsum dolor sit amet consectetur adipisicing
                                  elit. Provident dolor quisquam velit veritatis distinctio, reiciendis maiores.</p>
                              <hr className='m-0 my-2' />
                              <p className='fs-sm fw-bold'>Learn More</p>
                              <div className="d-flex gap-2">
                                  <a rel="noreferrer noopener" target={'_blank'} className='btn btn-sm fs-sm text-bg-green rounded-pill' href="https://pasabaa.github.io/timeline-vanilla/"><i
                                          className='bi bi-globe'></i></a>
                                  <a rel="noreferrer noopener" target={'_blank'} className='btn btn-sm fs-sm text-bg-blue rounded-pill' href="https://github.com/pasabaa/timeline-vanilla"><i
                                          className='bi bi-github'></i></a>
                              </div>
                          </div>
                      </div>

                      <div className="card border-0 p-0">
                          <div className="card-body d-flex flex-column justify-content-around">
                              <div className='m-0'>
                                  <h6 className='fw-bold'>Game with JavaScript</h6>
                                  <span className='badge text-bg-red'>In Process</span>
                              </div>

                              <img className="rounded img-fluid my-3"  src={process.env.PUBLIC_URL + "/img/projects/game-js.png"}
                                  alt="" />
                              <p className='fs-sm text-muted m-0'>Lorem ipsum dolor sit amet consectetur adipisicing
                                  elit. Provident dolor quisquam velit veritatis distinctio, reiciendis maiores.</p>
                              <hr className='m-0 my-2' />
                              <p className='fs-sm fw-bold'>Learn More</p>
                              <div className="d-flex gap-2">
                                  <a rel="noreferrer noopener" target={'_blank'} className='btn btn-sm fs-sm text-bg-red rounded-pill' href="https://pasabaa.github.io/clicker-game/"><i
                                          className='bi bi-globe'></i></a>
                                  <a rel="noreferrer noopener" target={'_blank'} className='btn btn-sm fs-sm text-bg-red rounded-pill' href="https://github.com/pasabaa/clicker-game"><i
                                          className='bi bi-github'></i></a>
                              </div>
                          </div>
                      </div>

                      <div className="card border-0 p-0">
                          <div className="card-body d-flex flex-column justify-content-around">
                              <div className='m-0'>
                                  <h6 className='fw-bold'>Google Message Generator</h6>
                                  <span className='badge text-bg-green'>Online</span>
                              </div>

                              <img className="rounded img-fluid my-3" src={process.env.PUBLIC_URL + "/img/projects/message-generator.png"}
                                  alt="" />
                              <p className='fs-sm text-muted m-0'>Lorem ipsum dolor sit amet consectetur adipisicing
                                  elit. Provident dolor quisquam velit veritatis distinctio, reiciendis maiores.</p>
                              <hr className='m-0 my-2' />
                              <p className='fs-sm fw-bold'>Learn More</p>
                              <div className="d-flex gap-2">
                                  <a rel="noreferrer noopener" target={'_blank'} className='btn btn-sm fs-sm text-bg-green rounded-pill' href="https://pasabaa.github.io/message-generator/"><i
                                          className='bi bi-globe'></i></a>
                                  <a rel="noreferrer noopener" target={'_blank'} className='btn btn-sm fs-sm text-bg-blue rounded-pill' href="https://github.com/pasabaa/message-generator"><i
                                          className='bi bi-github'></i></a>
                              </div>
                          </div>
                      </div>


                      <div className="card border-0 p-0">
                          <div className="card-body d-flex flex-column justify-content-around">
                              <div className='m-0'>
                                  <h6 className='fw-bold'>Background Generator</h6>
                                  <span className='badge text-bg-green'>Online</span>
                              </div>

                              <img className="rounded img-fluid my-3" src={process.env.PUBLIC_URL + "/img/projects/bg-blur.png"}
                                  alt="" />
                              <p className='fs-sm text-muted m-0'>Lorem ipsum dolor sit amet consectetur adipisicing
                                  elit. Provident dolor quisquam velit veritatis distinctio, reiciendis maiores.</p>
                              <hr className='m-0 my-2' />
                              <p className='fs-sm fw-bold'>Learn More</p>
                              <div className="d-flex gap-2">
                                  <a rel="noreferrer noopener" target={'_blank'} className='btn btn-sm fs-sm text-bg-green rounded-pill' href="https://pasabaa.github.io/bg-blur-generator/"><i
                                          className='bi bi-globe'></i></a>
                                  <a rel="noreferrer noopener" target={'_blank'} className='btn btn-sm fs-sm text-bg-blue rounded-pill' href="https://github.com/pasabaa/bg-blur-generator"><i
                                          className='bi bi-github'></i></a>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </div>
    )
  }
  