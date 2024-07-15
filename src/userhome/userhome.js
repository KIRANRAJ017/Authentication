import "./userhome.css";
import { IoIosLogOut } from "react-icons/io";
import img from "../mine.jpg"

function Userhome({ onLogout, name, picture}) {
    return (
        <div className="user-home">
            <div className="user">
                <img src={img} alt={name} className="user-img" />
                <span className="user-name">{name}</span>
                <button onClick={onLogout} className="user-logout-btn">Logout <IoIosLogOut className="logout-icon"/></button>
            </div>
        </div>
    );
}

export default Userhome;
