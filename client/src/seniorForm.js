import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext2 } from "./hooks/useAuthContext2";
const PdfViewer = () => {
  const { admin } = useAuthContext2();
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // const config = {
    //   headers: {Authorization: `Bearer ${admin.token}` },
    // };
    const fetchDocuments = async () => {
      console.log("inside seniorform");

      const response = await fetch("http://localhost:4000/api/admin/get-pdfs", {
        method: "GET",
        headers: { Authorization: `Bearer ${admin.token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // window.location.reload(true);
          setDocuments(data);
        })
        .catch((error) => console.error(error));

      // const response = await axios.get(
      //   "http://localhost:4000/api/admin/get-pdfs",
      //   config
      // );
      
    };

    fetchDocuments();
  }, [admin]);



  return (
    <div>
      <h1>Documents</h1>
      <table>
        <tr>
          <th>Student Name</th>
        </tr>
        <tr>
          <td>
            {documents && documents.map((document) => (
              <div key={document._id} className="doc-content">
                <Link to={`/senior-student-info/${document._id}`}>
                  <h2 className="studentName">{document.name}</h2>
                </Link>
              </div>
            ))}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PdfViewer;
