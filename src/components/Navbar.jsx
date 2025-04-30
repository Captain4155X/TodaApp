import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme='dark'>
            <div class="container-fluid">
                <Link class="navbar-brand" to="/todo-item-list">TodoApp</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" aria-current="page" to="/todo-item-list">Home</Link>
                        <Link class="nav-link active" aria-current="page" to="/my-items">My Items</Link>
                        <Link class="nav-link active" aria-current="page" to="/add-item">Add Item</Link>
                        <Link class="nav-link active" aria-current="page" to="/profile">Profile</Link>
                        <Link class="nav-link active" aria-current="page" to="/update-password">Update Password</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar