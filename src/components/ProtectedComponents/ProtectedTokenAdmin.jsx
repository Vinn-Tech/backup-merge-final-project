import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthenticated } from "../../services/auth/get-authenticated";
import { CookieKeys, CookieStorage } from "../../utils/cookies";

const ProtectedTokenAdmin = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkAdminValidation = async () => {
      try {
        const tokenCheck = CookieStorage.get(CookieKeys.AuthToken);
        if (!tokenCheck) {
          navigate("/admin");
          return;
        }

        const response = await getAuthenticated();
        const adminRole = response?.data?.data?.user?.role;
        if (adminRole !== "ADMIN") {
          navigate("/admin");
          CookieStorage.remove(CookieKeys.AuthToken)
        }
      } catch (error) {
        console.error(error);
        navigate("/admin");
      }
    };

    checkAdminValidation();
  }, [navigate]);

  return children;
};

export default ProtectedTokenAdmin;
