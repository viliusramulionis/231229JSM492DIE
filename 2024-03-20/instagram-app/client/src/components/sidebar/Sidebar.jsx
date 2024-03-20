import { Link } from 'react-router-dom';
import logo from './logo.svg';
import style from './Sidebar.module.css';

const Sidebar = ({ setShowNewPost }) => {
    
    return (
        <aside className={style.sidebar}>
            <div className={style.logo}>
                <img src={logo} alt="Instagram" />
            </div>
            <nav className={style.navigation}>
                <ul>
                    <li>
                        <Link to="/" className={style.link}>
                            <i className="bi bi-house-door"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={style.link} onClick={() => setShowNewPost(true)}>
                            <i className="bi bi-plus-square"></i>
                            <span>Create</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;