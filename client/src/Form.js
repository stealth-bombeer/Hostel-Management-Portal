import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const ImagePreview = ({ imageUrl }) => {
    const [showImage, setShowImage] = useState(false);
    return (
        <div>
            <button onClick={() => setShowImage(!showImage)} className="preview-button">Preview</button>
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
    const navigate = useNavigate();
    const [documents, setDocuments] = useState([]);
    const handleAccept = async (e) => {
        const data = {
            name: e['name'],
            aadhar: {
                public_id: e['aadhar']['public_id'],
                url: e['aadhar']['url']
            },
            allotment: {
                public_id: e['allotment']['public_id'],
                url: e['allotment']['url']
            },
            sundertaking: {
                public_id: e['sundertaking']['public_id'],
                url: e['sundertaking']['url']
            },
            pundertaking: {
                public_id: e['pundertaking']['public_id'],
                url: e['pundertaking']['url']
            },
        }

        fetch('http://127.0.0.1:4000/api/submitAccepted', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.reload(true);;
            })
            .catch(error => console.error(error));
        console.log("Accepted")
        console.log(e)


        fetch(`http://127.0.0.1:4000/api/delete/${e['_id']}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.message);

                window.location.reload(true);
            })
            .catch(error => {
                console.error(error);
            });

        navigate('/verify')
    };

    const handleReject = (e) => {
        const data = {
            name: e['name'],
            aadhar: {
                public_id: e['aadhar']['public_id'],
                url: e['aadhar']['url']
            },
            allotment: {
                public_id: e['allotment']['public_id'],
                url: e['allotment']['url']
            },
            sundertaking: {
                public_id: e['sundertaking']['public_id'],
                url: e['sundertaking']['url']
            },
            pundertaking: {
                public_id: e['pundertaking']['public_id'],
                url: e['pundertaking']['url']
            },
        }

        fetch('http://127.0.0.1:4000/api/submitRejected', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        console.log("Rejected")
        console.log(e)

        fetch(`http://127.0.0.1:4000/api/delete/${e['_id']}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.message);
            })
            .catch(error => {
                console.error(error);
            });
        navigate('/verify')
    };

    useEffect(() => {
        const fetchDocuments = async () => {
            const response = await axios.get("http://127.0.0.1:4000/api/collections");
            setDocuments(response.data);
        };

        fetchDocuments();
    }, []);

    return (
        <div>
            <h1>Documents</h1>
            {documents.map(document => (
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
            ))}
        </div>
    );
};

export default App;
