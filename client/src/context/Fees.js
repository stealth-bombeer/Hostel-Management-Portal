import girls_fees from './fee_qr/girls_fees.jpeg.jpeg'
import boys_fees from './fee_qr/boys_fees.jpeg.jpeg'
import { useAuthContext } from "../hooks/useAuthContext"

const Fees = () => {
  const { user } = useAuthContext();
  console.log(user);
    return (
    <>


    <div className='feecard'>

       <div >
        
        <h3 className=" fees_card mrp text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">Hostel fees </h3> 
         <div className='fees_card'>
         
           
         { user.gender==='M'&& <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-20">
          <a href="#">
            <img className="p-8 rounded-t-lg" src={boys_fees} alt="product image" />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">scan the QR code to pay boys hostel fees</h5>
            </a>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">paid</a>
            </div>
          </div>
         </div>
         }
         
         

      
     

{ user.gender==='F' &&
          <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="p-8 rounded-t-lg" src={girls_fees} alt="product image" />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">scan the QR code to pay girls hostel fees</h5>
            </a>
            
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">paid</a>
            </div>
          </div>
        </div>
}

        </div>
        </div>
      
        </div>
    
       </> 
      );
    }
   export default Fees;