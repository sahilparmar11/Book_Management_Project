import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">Navbar</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/">Home</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/books">Books</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/books/add">AddBook</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/books/:id">DetailsOfBook</Link>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col m-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;