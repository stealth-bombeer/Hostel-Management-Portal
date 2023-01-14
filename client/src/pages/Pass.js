// import { useRef } from "react";
// import emailjs from '@emailjs/browser';
// import { useState,useEffect } from "react";


// const Pass = () => {

  
//    const form = useRef();
    
//    const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_dqb1cml', 'template_63fcbh6', form.current, 'nbKXSvwZTLrvPG3kW',)
//     .then((result) => {
//       console.log(result.text);
//   }, (error) => {
//       console.log(error.text);
//   });
//      e.target.reset()
//   };
 

// //console.log(values);





//     return ( 
//         <div
//         style={{
//           backgroundColor: '#BFEAF5',}}>
          
//             <form ref={form} onSubmit={handleSubmit}>
            
//                 <h3>Get your gate pass here</h3>
  
  
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
       
        
//      );
// }

// export default Pass;
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState,useEffect } from "react";


const Pass = () => {

  
  const form = useRef();
   
  const handleSubmit = (e) => {
   e.preventDefault();

   emailjs.sendForm('service_dqb1cml', 'template_63fcbh6', form.current, 'nbKXSvwZTLrvPG3kW',)
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
              'url("data:image/jpeg;base64,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")'
          }}
        />
        {/* Col */}
        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 className="pt-4 text-2xl text-center"><h3>Get your gate pass here</h3></h3>
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

export default Pass;