import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
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
            <table>
                <tr>
                    <th>Student Name</th>
                </tr>
                <tr>

                    <td>
                        {documents.map(document => (
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
