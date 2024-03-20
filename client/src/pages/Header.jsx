import { FaCog, FaSignOutAlt } from "react-icons/fa";
import "./Login.css";

export const Header = () =>{
    return(

        <header className="header">
        <div className="header-icons">
          <FaCog className="icon" />
          <FaSignOutAlt className="icon" />
        </div>
      </header>

    )
};