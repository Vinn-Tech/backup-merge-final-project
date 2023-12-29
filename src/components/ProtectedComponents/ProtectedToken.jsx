import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../utils/cookies";

function ProtectedToken({ children }) {
  const navigate = useNavigate();


  useEffect(() => {
    const tokenCheck = CookieStorage.get(CookieKeys.AuthToken);

    if (!tokenCheck) {
      navigate("/login");
    }
  }, [navigate]);

  return children;
}

export default ProtectedToken;
