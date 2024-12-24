import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "./Provider";
import app from "../firebase";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  const handleSignout = async () => {
    try {
      const auth = getAuth(app);

      await signOut(auth); // Logs out the user
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="navbar bg-[#FB9EC6] rounded font-pacifico">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">FurryFables</a>
      </div>
      <div>
        <ul className="flex gap-6">
          <Link
            to={"/"}
            className="   hover:bg-customBg cursor-pointer p-2 rounded"
          >
            Home
          </Link>
          <Link
            to={"/myproducts"}
            className="   hover:bg-customBg cursor-pointer p-2 rounded"
          >
            My Products
          </Link>

          {user ? (
            <>
              {" "}
              <button
                onClick={handleSignout}
                className="   hover:bg-customBg cursor-pointer p-2 rounded"
              >
                sign out
              </button>
              <div className="w-10 rounded-full">
                <img
                className="w-10 rounded-full"
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                  alt="User Profile"
                />
              </div>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="   hover:bg-customBg cursor-pointer p-2 rounded"
              >
                Login
              </Link>
              <Link
                to={"/signup"}
                className="   hover:bg-customBg cursor-pointer p-2 rounded"
              >
                Signup
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
