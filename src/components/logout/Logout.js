import { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { logoutUser } from "../../services/userService";

function Logout() {
  const logout = () => {
    setTimeout(() => {
      logoutUser();
      window.location = "/";
    }, 100);
  };

  useEffect(logout);

  return (
    <main>
      <div className="center">
        <RotatingLines strokeColor="#00c2ff" width="50" />
      </div>
    </main>
  );
}

export default Logout;
