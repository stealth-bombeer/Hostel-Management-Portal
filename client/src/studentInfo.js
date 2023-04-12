import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
const StudentInfo = () => {
  const { admin } = useAuthContext2();
  const [error, setError] = useState("");
  const { id } = useParams();
  console.log(`id1: ${id}`);
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);
  const handleAccept = async (e) => {
    console.log(`e: ${e}`);
    const data = {
      name: e["name"],
      course: e["course"],
      category: e["category"],
      semester: e["semester"],
      merit: e["merit"],
      academicYear_institute: e["academicYear_institute"],
      academicYear_hostel: e["academicYear_hostel"],
      pname: e["pname"],
      address: e["address"],
      stu_Number: e["stu_Number"],
      parent_Number: e["parent_Number"],
      email: e["email"],
      gname: e["gname"],
      gaurdian_address: e["gaurdian_address"],
      gaurdian_Number: e["gaurdian_Number"],
      gender: e["gender"],
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

    fetch("http://localhost:4000/api/admin/submitAccepted", {
      method: "POST",
      headers: {  "Content-Type": "application/json",Authorization: `Bearer ${admin.token}` },
      body: JSON.stringify(data),
    })
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

        // window.location.reload(true);
      })
      .catch((error) => {
        console.error(error);
      });

    navigate("/verify");
  };

  const handleReject = (e) => {
    const data = {
      name: e["name"],
      course: e["course"],
      category: e["category"],
      semester: e["semester"],
      merit: e["merit"],
      academicYear_institute: e["academicYear_institute"],
      academicYear_hostel: e["academicYear_hostel"],
      pname: e["pname"],
      address: e["address"],
      stu_Number: e["stu_Number"],
      parent_Number: e["parent_Number"],
      email: e["email"],
      gname: e["gname"],
      gaurdian_address: e["gaurdian_address"],
      gaurdian_Number: e["gaurdian_Number"],
      gender: e["gender"],
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
      message: error,
    };

    fetch("http://localhost:4000/api/admin/submitRejected", {
      method: "POST",
      headers: {  "Content-Type": "application/json",Authorization: `Bearer ${admin.token}` },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    console.log("Rejected");
    console.log(e);

    fetch(`http://localhost:4000/api/admin/delete/${e["_id"]}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${admin.token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
    navigate("/verify");
  };
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${admin.token}` },
    };
    const fetchDocuments = async () => {
      const response = await axios.get(
        `http://127.0.0.1:4000/api/collections/${id}`,
        config
      );
      setDocuments(response.data);
    };

    fetchDocuments();
  }, []);
  const documentWithId2 = documents.find((document) => document._id === id);
  if (documentWithId2) {
    return (
      <div>
        <h2 className="studentName">{documentWithId2.name}</h2>
        <p className="fields">Course: {documentWithId2.course}</p>
        <p className="fields">Category: {documentWithId2.category}</p>
        <p className="fields">Semester: {documentWithId2.semester}</p>
        <p className="fields">Merit: {documentWithId2.merit}</p>
        <p className="fields">
          Academic Year (Institute): {documentWithId2.academicYear_institute}
        </p>
        <p className="fields">
          Academic Year (hostel): {documentWithId2.academicYear_hostel}
        </p>
        <p className="fields">Parent Name: {documentWithId2.pname}</p>
        <p className="fields">Address: {documentWithId2.address}</p>
        <p className="fields">STU_Number: {documentWithId2.stu_Number}</p>
        <p className="fields">Parent Number: {documentWithId2.parent_Number}</p>
        <p className="fields">Email: {documentWithId2.email}</p>
        <p className="fields">Guardian Name: {documentWithId2.gname}</p>
        <p className="fields">
          Guardian Address: {documentWithId2.gaurdian_address}
        </p>
        <p className="fields">
          Guardian Number: {documentWithId2.gaurdian_Number}
        </p>
        <p className="fields">Gender: {documentWithId2.gender}</p>
        <p className="aadhar">
          {" "}
          Aadhar Card:{" "}
          <ImagePreview imageUrl={documentWithId2["aadhar"]["url"]} />
        </p>
        <p className="allotment">
          Allotment:{" "}
          <ImagePreview imageUrl={documentWithId2["allotment"]["url"]} />
        </p>
        <p className="sundertaking">
          Student Undertaking:{" "}
          <ImagePreview imageUrl={documentWithId2["sundertaking"]["url"]} />
        </p>
        <p className="pundertaking">
          Parent Undertaking:{" "}
          <ImagePreview imageUrl={documentWithId2["pundertaking"]["url"]} />
        </p>
        <label>
          Message:
          <textarea value={error} onChange={(e) => setError(e.target.value)} />
        </label>
        <div>
          <button
            type="button"
            onClick={() => handleAccept(documentWithId2)}
            className="acceptButton"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => handleReject(documentWithId2)}
            className="rejectButton"
          >
            Reject
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* {documents.map(document => (
                <div key={document._id} className="doc-content">
                    <h2 className="studentName"> Student Name: {document.name}</h2>
                    <p className="fields">Course: {document.course}</p>
                    <p className="fields">Category: {document.category}</p>
                    <p className="fields">Semester: {document.semester}</p>
                    <p className="fields">Merit: {document.merit}</p>
                    <p className="fields">Academic Year (Institute): {document.academicYear_institute}</p>
                    <p className="fields">Academic Year (hostel): {document.academicYear_hostel}</p>
                    <p className="fields">Parent Name: {document.pname}</p>
                    <p className="fields">Address: {document.address}</p>
                    <p className="fields">STU_Number: {document.stu_Number}</p>
                    <p className="fields">Parent Number: {document.parent_Number}</p>
                    <p className="fields">Email: {document.email}</p>
                    <p className="fields">Guardian Name: {document.gname}</p>
                    <p className="fields">Guardian Address: {document.gaurdian_address}</p>
                    <p className="fields">Guardian Number: {document.gaurdian_Number}</p>
                    <p className="fields">Gender: {document.gender}</p>
                    <p className="aadhar"> Aadhar Card:  <ImagePreview imageUrl={document['aadhar']['url']} /></p>
                    <p className="allotment">Allotment: <ImagePreview imageUrl={document['allotment']['url']} /></p>
                    <p className="sundertaking">Student Undertaking: <ImagePreview imageUrl={document['sundertaking']['url']} /></p>
                    <p className="pundertaking">Parent Undertaking: <ImagePreview imageUrl={document['pundertaking']['url']} /></p>
                    <div>
                        <button type="button" onClick={() => handleAccept(document)} className="acceptButton">Accept</button>
                        <button type="button" onClick={() => handleReject(document)} className="rejectButton">Reject</button>
                    </div>
                </div>
            ))} */}
    </div>
  );
};

export default StudentInfo;
