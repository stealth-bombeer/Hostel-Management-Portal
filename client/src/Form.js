import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext2 } from "./hooks/useAuthContext2";

const ImagePreview = ({ imageUrl }) => {
  const [showImage, setShowImage] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShowImage(!showImage)}
        className="preview-button"
      >
        Preview
      </button>
      {showImage && (
        <div>
          <img src={imageUrl} alt="Preview" />
          {/* <button onClick={() => setShowImage(false)}>Close</button> */}
        </div>
      )}
    </div>
  );
};
const App = () => {
  const { admin } = useAuthContext2();
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);
  const handleAccept = async (e) => {
    const data = {
      name: e["name"],
      aadhar: {
        public_id: e["aadhar"]["public_id"],
        url: e["aadhar"]["url"],
      },
      allotment: {
        public_id: e["allotment"]["public_id"],
        url: e["allotment"]["url"],
      },
      sundertaking: {
        public_id: e["sundertaking"]["public_id"],
        url: e["sundertaking"]["url"],
      },
      pundertaking: {
        public_id: e["pundertaking"]["public_id"],
        url: e["pundertaking"]["url"],
      },
    };

    const response = await fetch(
      "http://localhost:4000/api/admin/submitAccepted",
      {
        method: "POST",
        headers: { "Content-Type": "application/json",Authorization: `Bearer ${admin.token}` },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.reload(true);
      })
      .catch((error) => console.error(error));
    console.log("Accepted");
    console.log(e);

    fetch(`http://localhost:4000/api/admin/delete/${e["_id"]}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${admin.token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);

        window.location.reload(true);
      })
      .catch((error) => {
        console.error(error);
      });

    navigate("/verify");
  };

  const handleReject = (e) => {
    const data = {
      name: e["name"],
      aadhar: {
        public_id: e["aadhar"]["public_id"],
        url: e["aadhar"]["url"],
      },
      allotment: {
        public_id: e["allotment"]["public_id"],
        url: e["allotment"]["url"],
      },
      sundertaking: {
        public_id: e["sundertaking"]["public_id"],
        url: e["sundertaking"]["url"],
      },
      pundertaking: {
        public_id: e["pundertaking"]["public_id"],
        url: e["pundertaking"]["url"],
      },
    };

    fetch("http://localhost:4000/api/admin/submitRejected", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",Authorization: `Bearer ${admin.token}`
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    console.log("Rejected");
    console.log(e);

    fetch(
      `http://localhost:4000/api/admin/delete/${e["_id"]}`,
      {
        method: "DELETE",
      },
      { headers: { Authorization: `Bearer ${admin.token}` } }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        window.location.reload(true);
      })
      .catch((error) => {
        console.error(error);
      });
    navigate("/verify");
  };

  useEffect(() => {
    const config = {
      headers: {  "Content-Type": "application/json",Authorization: `Bearer ${admin.token}` },
    };
    const fetchDocuments = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/admin/collections",
        config
      );

      setDocuments(response.data);
    };

    fetchDocuments();
  }, []);

  return (
    <div>
      <h1>Documents</h1>
      <table>
        <tr>
          <th>Student Name</th>
        </tr>
        <tr>
          <td>
            {documents.map((document) => (
              <div key={document._id} className="doc-content">
                <Link to={`/student-info/${document._id}`}>
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

export default App;
