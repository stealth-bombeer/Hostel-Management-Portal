import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
const SeniorStudentInfo = () => {
    const [error, setError] = useState('')
    const [feeReceipt, setFeeReceipt] = useState(null);
    const [Allot, setAllot] = useState(null);
    const { id } = useParams();
    console.log(`id1: ${id}`)
    const navigate = useNavigate();
    const handleFeePreview = () => {
        if (feeReceipt) {
            setFeeReceipt(documentWithId2['feesReceipt']['url']);
            window.open(URL.createObjectURL(feeReceipt));
        }
    };
    const handleAllotmentPreview = () => {
        if (Allot) {
            setAllot(documentWithId2['prevAllot']['url']);
            window.open(URL.createObjectURL(Allot));
        }
    };
    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        const fetchDocuments = async () => {
            const response = await axios.get(`http://127.0.0.1:4000/api/get-pdfs`);
            setDocuments(response.data);
        };

        fetchDocuments();
    }, []);
    const documentWithId2 = documents.find((document) => document._id === id)
    if (documentWithId2) {


        return (
            <div>
                <h2 className="studentName">{documentWithId2.name}</h2>
                <p className="aadhar">  <button type="button" onClick={handleFeePreview}>Preview</button></p>
                <p className="allotment"> <button type="button" onClick={handleAllotmentPreview}>Preview</button></p>
                <label>
                    Message:
                    <textarea value={error} onChange={(e) => setError(e.target.value)} />
                </label>
                {/* <div>
                    <button type="button" onClick={() => handleAccept(documentWithId2)} className="acceptButton">Accept</button>
                    <button type="button" onClick={() => handleReject(documentWithId2)} className="rejectButton">Reject</button>
                </div> */}
            </div>
        )
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
}

export default SeniorStudentInfo;