export default function JavaScriptPage() {
  return (
    <div className="container p-4">
    <div className="row justify-content-between">
        <div className="col-12">
            <h1 className="fw-light">Frameworks</h1>
            <h3 className="fw-bold">JavaScript Projects</h3>
            <div className="row justify-content-between gap-3">

            <div className="card border-0 p-0">
                        <div className="card-body d-flex flex-column justify-content-around">
                            <div className='m-0'>
                            <h6 className='fw-bold'>Tasks with NodeJS and MongoDB</h6>
                                <span className='badge text-bg-green'>Online</span>
                            </div>
                            
                                <img className="rounded img-fluid my-3" src="https://picsum.photos/1920/1080?random=2" alt=""/>
                                <p className='fs-sm text-muted m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolor quisquam velit veritatis distinctio, reiciendis maiores.</p>
                                <hr className='m-0 my-2'/>
                                <p className='fs-sm fw-bold'>Learn More</p>
                            <div className="d-flex gap-2">
                                <a className='btn btn-sm fs-sm text-bg-green rounded-pill' href="/"><i className='bi bi-globe'></i></a>
                                <a className='btn btn-sm fs-sm text-bg-blue rounded-pill' href="/"><i className='bi bi-github'></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 p-0">
                        <div className="card-body d-flex flex-column justify-content-around">
                            <div className='m-0'>
                            <h6 className='fw-bold'>Tasks with React</h6>
                                <span className='badge text-bg-green'>Online</span>
                            </div>
                            
                                <img className="rounded img-fluid my-3" src="https://picsum.photos/1920/1080?random=5" alt=""/>
                                <p className='fs-sm text-muted m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolor quisquam velit veritatis distinctio, reiciendis maiores.</p>
                                <hr className='m-0 my-2'/>
                                <p className='fs-sm fw-bold'>Learn More</p>
                            <div className="d-flex gap-2">
                                <a className='btn btn-sm fs-sm text-bg-green rounded-pill' href="/"><i className='bi bi-globe'></i></a>
                                <a className='btn btn-sm fs-sm text-bg-blue rounded-pill' href="/"><i className='bi bi-github'></i></a>
                            </div>
                        </div>
                    </div>

                <div className="card border-0 p-0">
                    <div className="card-body d-flex flex-column justify-content-around">
                        <div className='m-0'>
                        <h6 className='fw-bold'>Google Message Generator</h6>
                            <span className='badge text-bg-green'>Online</span>
                        </div>
                        
                            <img className="rounded img-fluid my-3" src="https://picsum.photos/1920/1080?random=4" alt=""/>
                            <p className='fs-sm text-muted m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolor quisquam velit veritatis distinctio, reiciendis maiores.</p>
                            <hr className='m-0 my-2'/>
                            <p className='fs-sm fw-bold'>Learn More</p>
                        <div className="d-flex gap-2">
                            <a className='btn btn-sm fs-sm text-bg-green rounded-pill' href="/"><i className='bi bi-globe'></i></a>
                            <a className='btn btn-sm fs-sm text-bg-blue rounded-pill' href="/"><i className='bi bi-github'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
