import "./home.css"
import { RiUserLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Navbar({ isAuthenticated, onLogout }) {
    const navigate = useNavigate(); 


    const handleUserIconClick = () => {
        if (isAuthenticated) {
            navigate('/user');
        } else {
            navigate('/login');
        }
    };

    const handleLogout = () => {
        onLogout(); 
        navigate('/');
    };

    return (
        <div className="nav">
            <header>
                <div className="nav_comp">
                    <a href="#" onClick={handleUserIconClick}><RiUserLine /></a><br/>
                    <p style={{fontSize:'18px'}}>Login</p>
                </div>
                {isAuthenticated && (
                    <button className="nav-btn" onClick={handleLogout}>
                        Log out
                    </button>
                )}
            </header>
        </div>
    );
}

export default Navbar;
