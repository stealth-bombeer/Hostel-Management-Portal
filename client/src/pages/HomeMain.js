import pic1 from "./hostelpics/vjtipic1.jpeg"
import pic2 from "./hostelpics/vjtipic2.jpeg"
import pic3 from "./hostelpics/vjtipic3.jpeg"
import { Link } from "react-router-dom";

const HomeMain = () => {
    return (
< >


<div className="Home">
            
            <h2 id="pulsefit">Welcome to VJTI hostel Portal...</h2>
            <h4 id="pulsefit2">"Divided by cities, United by Hostel".....
So come with lots of curiosity and zeal to have a sight of our hostel fam!!</h4>
            <div>
            {/* <Link to="./aboutus" is="aboutus">about us</Link> */}
            </div>
            <img className="homeBgImg" src={pic1}/>
          </div>


<div className="homecards">
  <div className="homecard1">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <Link to ="/chatapp">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
  Chat Room
    </h5>
    </Link>
  
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
  Interactive technology helps create opportunities for communication. It can encourage students to communicate more.

  </p>
  <Link to ="/chatapp"
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  
    Enter
   
    <svg
      aria-hidden="true"
      className="w-4 h-4 ml-2 -mr-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
    </Link>
</div>

</div>

<div className="homecard2">
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
 <Link to ="/home">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Room selection
    </h5>
  </Link>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    Choose your room and roommates SY onwards
  </p>
  <Link to ="/home"
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Enter
    <svg
      aria-hidden="true"
      className="w-4 h-4 ml-2 -mr-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
</Link>
</div>
</div>



<div className="homecard3">
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <Link to="/notification">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Notifications
    </h5>
  </Link>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    get notifications of upcoming events 
  </p>
  <Link to="/notification"
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Read more
    <svg
      aria-hidden="true"
      className="w-4 h-4 ml-2 -mr-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
 </Link>
</div>
</div>
</div>          

   

      

     


      </>
        );
}
 
export default HomeMain;