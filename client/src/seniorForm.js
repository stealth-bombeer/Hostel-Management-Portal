import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
const PdfViewer = () => {
    const navigate = useNavigate();
    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        const fetchDocuments = async () => {
            const response = await axios.get("http://127.0.0.1:4000/api/get-pdfs");
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
