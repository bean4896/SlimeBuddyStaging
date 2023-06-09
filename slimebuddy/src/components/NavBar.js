import { Link } from "react-router-dom";
import "../index.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="flex items-center justify-center p-4">
        <div className="flex items-center">
          <ul className="font-bold text-l md:text-xl flex flex-row p-4 mt-4 space-x-10 md:space-x-[10rem] text-[#228e81]">
            <Link className="navlink" to="/">SLIMEBUDDY</Link>
            <Link className="navlink" to="/">DOWNLOAD APP</Link>
            <Link className="navlink" to="/">WHITEPAPER</Link>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
