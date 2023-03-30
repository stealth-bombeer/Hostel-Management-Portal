import pic1 from "./hostelpics/vjtipic1.jpeg"
import pic2 from "./hostelpics/vjtipic2.jpeg"
import pic3 from "./hostelpics/vjtipic3.jpeg"
import { Link } from "react-router-dom";
const AdminHomeMain = () => {
    
    return (  
        < >


<div className="Home">
  <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Welcome to hostel Portal-Admin</h2>
  <h4 className="text-center text-base md:text-lg lg:text-xl mb-8"></h4>
  <div className="text-center mb-8">
    <a href="#" className="text-sm md:text-base text-gray-600 hover:text-gray-800 transition duration-300"></a>
  </div>
  <img className="homeBgImg w-full" src={pic1} alt="Background Image"/>
</div>


   

      

     


      </>
    );
}
 
export default AdminHomeMain;