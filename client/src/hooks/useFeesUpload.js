import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const useFeesUpload = () => {
  const { user } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();

  const uploads = async (feesReceipt, prevAllot) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch("/api/user/feesupload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.name,
        feesReceipt,
        prevAllot,
      }),
    });
    console.log(response);
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      {
        alert(json.error);
      }
      console.log("error inside useFeesUpload");
    }
    if (response.ok) {
      {
        alert("sucess");
      }
      navigate("/");

      // update loading state
      setIsLoading(false);
    }
  };

  return { uploads, isLoading, error };
};
