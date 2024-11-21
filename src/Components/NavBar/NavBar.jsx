import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';


const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign out successfully");
      })
      .catch((error) => {
        console.error("ERROR:", error.message);
      });
  };

  const links = (
    <>
<a href=""><NavLink to="/" className="hover:text-yellow-400 p-3 rounded ">Home</NavLink></a>
<a><NavLink to="/lessons" className="hover:text-yellow-400 rounded p-3">Start Learning</NavLink></a>
     
      <a><NavLink to="/tutorials" className="hover:text-yellow-400 rounded p-3">Tutorials</NavLink></a>
      {user && (
        <>
           <a><NavLink to="/learning" className="hover:text-yellow-400 rounded p-3">Lessons</NavLink></a>
          <a><NavLink to="/profile" className="hover:text-yellow-400 rounded p-3">Profile</NavLink></a>
        </>
      )}
      <a><NavLink to="/about" className="hover:text-yellow-400 rounded p-3">About Us</NavLink></a>
      
      
    </>
  );

  return (
    <div className="bg-gradient-to-l from-pink-800 to-[#23085a]">
      {/* Navbar */}
      <div className="navbar container mx-auto text-white h-24">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown for Mobile */}
          <div className="dropdown">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="bg-[#23085a] menu menu-sm dropdown-content text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          {/* Logo */}
          <Link to="/">
            <img
              className="w-20 h-20"
              src="https://i.ibb.co/y85mJY9/bingo-lingo.jpg"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Navbar Center for Large Screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center space-x-4">
          {/* User Info */}
          {user && (
            <div className="flex items-center space-x-2 mr-10">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full border border-white"
                />
              )}
              <p className="text-sm lg:text-md text-white ">
                Welcome, <span className="font-bold  ">{user.email || "User"}</span>
              </p>
             
            </div>
          )}

          {/* Auth Buttons */}
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn  btn-primary bg-[#23085a]   rounded-md text-white">
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary bg-[#23085a] rounded-md text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
