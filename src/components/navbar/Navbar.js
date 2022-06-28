import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='container py-4'>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({isActive}) => (isActive ? 'active nav-link' : 'nav-link')} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => (isActive ? 'active nav-link' : 'nav-link')} to="/web">Web Tecnologies</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Frameworks
                            </a>
                            <ul className="dropdown-menu border-0 bg-light" aria-labelledby="navbarDropdown">
                                <li><NavLink className={({isActive}) => (isActive ? 'active nav-link' : 'nav-link')} to="/frameworks/javascript">JavaScript</NavLink></li>
                                <li><NavLink className={({isActive}) => (isActive ? 'active nav-link' : 'nav-link')} to="/frameworks/php">PHP</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" target={'_blank'} href="https://pasabaa.github.io/portafolio/">Portfolio</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href=""><i class="bi bi-moon-stars-fill"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
