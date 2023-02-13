import React, { useState, useEffect } from "react";
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
            .then(data => console.log(data))
            .catch(error => console.error(error));
        console.log("Accpeted")
        console.log(e)
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
