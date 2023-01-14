import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState,useEffect } from "react";


const Complains = () => {

  
   const form = useRef();
    
   const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lm2qvne', 'template_kpmr2kn', form.current, 'mNdVg35iqS7y-chUY',)
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
     e.target.reset()
  };
 

//console.log(values);





    return ( 
//         <div>
          
//             <form ref={form} onSubmit={handleSubmit}>
            
//                 <h3>Register your complains here</h3>
  
  
//   <div className="grid md:grid-cols-2 md:gap-6">
//     <div className="relative z-0 w-full mb-6 group">
//       <input 
//         type="text"
//         name="user_name"
//         id="floating_first_name"
//         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//         placeholder=" "
//         required=""
//       />
//       <label
//         htmlFor="floating_first_name"
//         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//       >
//         First name
//       </label>
//     </div>
//     <div className="relative z-0 w-full mb-6 group">
//       <input
//         type="text"
//         name="floating_name"
//         id="floating_last_name"
//         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//         placeholder=" "
//         required=""
       
//       />
//       <label
//         htmlFor="floating_last_name"
//         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//       >
//         Last name
//       </label>
//     </div>
//   </div>
//   <div className="relative z-0 w-full mb-6 group">
    
//     <input  
//       type="email"
//       name="user_email"
//       id="floating_email"
//       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//       placeholder=" "
//       required=""
     
//     />
//     <label
//       htmlFor="floating_email"
//       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//     >
//       your Email address
//     </label>
//   </div>
//    <div className="grid md:grid-cols-2 md:gap-6">
    
//     <div className="relative z-0 w-full mb-6 group">
//       <input
//         type="text"
//         name="message"
//         id="floating_company"
//         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//         placeholder=" "
//         required=""
//       />
//       <label
//         htmlFor="floating_company"
//         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//       >
//         what is the issue?
//       </label>
//     </div>
//     <div className="relative z-0 w-full mb-6 group">
//       <input
//         type="text"
//         name="room_number"
//         id="floating_company"
//         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//         placeholder=" "
//         required=""
//       />
//       <label
//         htmlFor="floating_company"
//         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//       >
//        enter your room number
//       </label>
//     </div>
//     <div className="relative z-0 w-full mb-6 group">
//       <input
//         type="text"
//         name="block"
//         id="floating_company"
//         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//         placeholder=" "
//         required=""
//       />
//       <label
//         htmlFor="floating_company"
//         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//       >
//         enter your block
//       </label>
//     </div>
   
//   </div>
//   <button
//     type="submit"
//     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//   >
//     Submit
//   </button>
// </form>


//         </div>
<div>
  {/* component */}
  {/* Container */}
  <div className="container mx-auto">
    <div className="flex justify-center px-6 my-12">
      {/* Row */}
      <div className="w-full xl:w-3/4 lg:w-11/12 flex">
        {/* Col */}
        <div
          className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
          style={{
            backgroundImage:
              'url("https://static.zollege.in/public/college_data/images/campusimage/14388420336.PNG")'
          }}
        />
        {/* Col */}
        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 className="pt-4 text-2xl text-center">Complaint Form</h3>
          <form ref={form} onSubmit={handleSubmit}>

            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="floating_first_name"
                  name="user_name"
                  type="text"
                  placeholder="First Name"
                  required=""
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="floating_last_name"
                  name="floating_name"
                  type="text"
                  placeholder="Last Name"
                  required=""
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                What's the issue??
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="floating_company"
                type="text"
                name="message"
                placeholder=""
                required=""
              />
            </div>
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="floating_email"
                  type="email"
                  name="user_email"
                  placeholder=""
                  required=""
                />
              
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="c_password"
                >
                  Room Number
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="floating_company"
                  type="text"
                  name="room_number"
                  placeholder=""
                  required=""
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="c_password"
                >
                  Block Number
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="floating_company"
                  type="text"
                  name="block"
                  placeholder=""
                  required=""
                />
              </div>
            </div>
            <div className="mb-6 text-center">


              <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Submit
  </button>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

       
        
     );
}

export default Complains;