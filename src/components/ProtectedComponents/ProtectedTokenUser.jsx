import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthenticated } from "../../services/auth/get-authenticated";
import { CookieKeys, CookieStorage } from "../../utils/cookies";

function ProtectedTokenUser({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserValidation = async () => {
      try {
        const tokenCheck = CookieStorage.get(CookieKeys.AuthToken);
        if (!tokenCheck) {
          navigate("/login");
          return;
        }

        const response = await getAuthenticated();
        const userRole = response?.data?.data?.user?.role;
        if (userRole !== "USER") {
          navigate("/login");
          CookieStorage.remove(CookieKeys.AuthToken)
        }
      } catch (error) {
        console.error(error);
        navigate("/login");
      }
    };

    checkUserValidation();
  }, [navigate]);

  return children;
}

export default ProtectedTokenUser;
