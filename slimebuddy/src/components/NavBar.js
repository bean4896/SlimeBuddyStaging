import { Link } from 'react-router-dom';
import '../index.css';
const NavBar = () => {
    return (
        <nav className="relative select-none bg-grey lg:flex lg:items-stretch w-full">
          <div className="flex flex-no-shrink items-stretch h-12">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
            <button className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
              <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
            </button>
          </div>
          <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
            <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
                <Link to="/mint">Products</Link>
            </div>
          </div>
        </nav>
    );
   };
   
   export default NavBar;