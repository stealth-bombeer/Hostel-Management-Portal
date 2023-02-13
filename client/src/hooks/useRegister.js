import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const register = async (
    name,
    course,
    category,
    semester,
    merit,
    academicYear_institute,
    academicYear_hostel,
    pname,
    address,
    stu_Number,
    parent_Number,
    email,
    gname,
    gaurdian_address,
    gaurdian_Number,
    gender,
    aadhar,
    allotment,
    sundertaking,
    pundertaking
  ) => {
    setIsLoading(true);
    setError(null);
    console.log(
      name,
      course,
      category,
      semester,
      merit,
      academicYear_institute,
      academicYear_hostel,
      pname,
      address,
      stu_Number,
      parent_Number,
      email,
      gname,
      gaurdian_address,
      gaurdian_Number,
      gender,
      aadhar,
      allotment,
      sundertaking,
      pundertaking
    );

    const response = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        course,
        category,
        semester,
        merit,
        academicYear_institute,
        academicYear_hostel,
        pname,
        address,
        stu_Number,
        parent_Number,
        email,
        gname,
        gaurdian_address,
        gaurdian_Number,
        gender,
        aadhar,
        allotment,
        sundertaking,
        pundertaking,
      }),
    });
    console.log(response);
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      {alert(json.error)}
      console.log("error inside usesignup");
    }
    if (response.ok) {
      // save the user to local storage
      // localStorage.setItem('user', JSON.stringify(json))

      // // update the auth context
      // dispatch({type: 'LOGIN', payload: json})

      {
        alert("sucess");
      }
      navigate("/login");

      // update loading state
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};
