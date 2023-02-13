import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate, useParams } from "react-router-dom";

export const useResetPassword = () => {
  const params = useParams();
  console.log("params", params.newToken);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const resetPassword = async (newpassword, confirmpassword) => {

    
    const response = await fetch(
      `http://localhost:4000/api/user/resetPassword/${params.newToken}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newpassword, confirmpassword }),
      }
    );

    const json = await response.json();
    console.log("inside useforgotpass", response);
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      {
        alert(json.error);
      }
    }
    if (response.ok) {
      console.log("Success");
      {
        alert("Credentials updated");
      }
      navigate('/login')
      setIsLoading(false);
    }
  };

  return { resetPassword, error, isLoading };
};
