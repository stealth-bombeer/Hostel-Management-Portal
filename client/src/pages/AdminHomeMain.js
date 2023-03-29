import pic1 from "./hostelpics/vjtipic1.jpeg"
import pic2 from "./hostelpics/vjtipic2.jpeg"
import pic3 from "./hostelpics/vjtipic3.jpeg"
import { Link } from "react-router-dom";
const AdminHomeMain = () => {
    
    return (  
        < >


<div className="Home">
            
            <h2 id="pulsefit">Welcome to hostel Portal-Admin</h2>
            <h4 id="pulsefit2"></h4>
            <div>
            {/* <Link to="./aboutus" is="aboutus">about us</Link> */}
            </div>
            <img className="homeBgImg" src={pic1}/>
          </div>



   

      

     


      </>
    );
}
 
export default AdminHomeMain;