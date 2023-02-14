import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const StudentInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        const fetchDocuments = async () => {
            const response = await axios.get(`http://127.0.0.1:4000/api/collections/${id}`);
            setDocuments(response.data);
        };

        fetchDocuments();
    }, []);
    return (
        <div>

        </div>
    );
}

export default StudentInfo;