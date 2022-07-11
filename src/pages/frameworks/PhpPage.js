export default function PhpPage() {
  return (
    <div className="container p-4">
      <div className="row justify-content-between">
        <div className="col-12">
          <h1 className="fw-light">Frameworks</h1>
          <h3 className="fw-bold">PHP Projects</h3>
          <div className="row justify-content-start gap-3 mt-4 py-4">
            <div className="card card-lg border-0 p-0">
              <div className="card-body d-flex flex-column justify-content-around">
                <div className="m-0">
                  <h6 className="fw-bold">
                    Sitio para el {' '}
                    <abbr title="Sistema Municipal para el Desarrollo Integral de la Familia">
                      DIF
                    </abbr>
                    , Guanajuato, México
                  </h6>
                  <span className="badge text-bg-blue">No Implementado</span>
                </div>

                <img loading="lazy" className="rounded img-fluid my-3" src="https://picsum.photos/1920/1080?random=2" alt="" />
                <p className="fs-sm text-muted m-0">
                  Automatización de las diferentes secciones de su sitio web,
                  además de crear un apartado administrativo para gestionar
                  diferentes datos de dichas secci ones, por ejemplo, títulos,
                  imágenes y texto de las noticias que se presentan. Por otra
                  parte, se modificó completamente la UI/UX de todo el sitio,
                  para dar un salto a un diseño más contemporáneo. Se trabajo
                  principalmente con el framework de PHP: Laravel, y otras
                  herramientas y lenguajes más, Bootstrap, JavaScript, CSS y
                  HTML.
                </p>
                <hr className="m-0 my-2" />
                <p className="fs-sm fw-bold">Saber Más</p>
                <div className="d-flex gap-2">
                  <a className="btn btn-sm fs-sm text-bg-blue rounded-pill" href="/">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="card card-lg border-0 p-0">
              <div className="card-body d-flex flex-column justify-content-around">
                <div className="m-0">
                  <h6 className="fw-bold">
                    Sitio para Presidencia Municipal, Guanajuato, México
                  </h6>
                  <span className="badge text-bg-blue">No Implementado</span>
                </div>

                <img loading="lazy" className="rounded img-fluid my-3" src="https://picsum.photos/1920/1080?random=5" alt="" />
                <p className="fs-sm text-muted m-0">
                  Actualización del sitio web de la presidencia municipal,
                  enfocado principalmente en frontend y rediseñando la UI/UX
                  respectivamente, gestionado también, por la parte
                  administrativa en el backend, la edición, eliminación y
                  adición de diferentes datos para cada sección del sitio,
                  además de utilizar principalmente el framework de PHP:
                  Laravel, del mismo modo, Bootstrap como framework de diseño
                  responsivo, además de JavaScript, CSS y HTML.
                </p>
                <hr className="m-0 my-2" />
                <p className="fs-sm fw-bold">Saber más</p>
                <div className="d-flex gap-2">
                  <a className="btn btn-sm fs-sm text-bg-blue rounded-pill" href="/">
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
