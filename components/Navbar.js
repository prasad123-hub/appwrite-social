import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { account } from "../api/appwrite";

const Navbar = () => {
  const [user, setUser] = React.useState(null);
  const router = useRouter();

  const clearSession = () => {
    const logout = account.deleteSession("current");
    logout.then(
      function (response) {
        window.location.reload();
      },
      function (error) {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    const promise = account.get();

    promise.then(
      function (response) {
        console.log(response);
        setUser(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <nav className="bg-gray-900 h-20 flex items-center justify-start">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <h1 className="text-blue-500 font-semibold text-2xl">.Social</h1>
        {user ? (
          <div className="flex items-center space-x-4">
            <h1 className="text-white font-semibold m-0 p-0">
              Welcome, {user.email}
            </h1>
            <button
              onClick={() => clearSession()}
              className="bg-white text-gray-900 font-semibold rounded-md px-3 py-2"
            >
              Log Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => router.push("/login")}
            className="bg-white text-gray-700 p-2 rounded-md"
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
