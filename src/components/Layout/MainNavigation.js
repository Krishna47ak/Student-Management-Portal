import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import ProfileIcon from "../ProfileIconSVG";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className="w-full h-20 bg-white shadow-2xl flex justify-between items-center px-[1%]">
      <Link to="/">
        <div className="mr-auto w-64 ">
          <img
            src="https://newhorizonindia.edu/nhengineering/wp-content/uploads/2022/05/Logo-02.png"
            alt=""
          />
        </div>
      </Link>
      <nav>
        <ul className="flex mr-5 items-center">
          <li className="px-5 py-1 rounded-md  text-[rgb(135,206,250)] font-bold text-xl hover:scale-110 hover:duration-500">
            <a href="/">Home</a>
          </li>
          <li className="px-5 py-1 rounded-md  text-[rgb(135,206,250)] font-bold text-xl hover:scale-110 hover:duration-500">
            <a href="https://smarthubeducation.hdfcbank.com/SmartFees/Landing.action?instId=4816">Payment</a>
          </li>
          <li className="px-5 py-1 rounded-md  text-[rgb(135,206,250)] font-bold text-xl hover:scale-110 hover:duration-500">
            <a href="https://newhorizoncollegeofengineering.in/contact-new/">Contact Us</a>
          </li>
          <li className="px-5 py-1 rounded-md  text-[rgb(135,206,250)] font-bold text-xl hover:scale-110 hover:duration-500">
            <a href="https://newhorizoncollegeofengineering.in/about/">About</a>
          </li>

          {!isLoggedIn && (
            <li className="px-5 py-1 rounded-md  text-[rgb(135,206,250)] font-bold text-xl hover:scale-110 hover:duration-500 hover:text-green-400">
              <Link to="/auth">Login</Link>
            </li>
          )}
              {isLoggedIn && (
                <button onClick={logoutHandler}>
                  <li className="px-5 py-1 rounded-md  text-[rgb(135,206,250)] font-bold text-xl hover:scale-110 hover:duration-500 hover:text-red-400 ">
                    <a>Logout</a>
                  </li>
                </button>
              )}
          {isLoggedIn && (
            <li className="px-2 py-2 mx-2 rounded-3xl  text-[rgb(135,206,250)] font-bold text-xl hover:scale-110 hover:duration-500 hover:bg-gray-200">
              <Link to="/profile"><ProfileIcon/></Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
