// import { useState } from "react";
// import { useSignup } from "../hooks/useSignup";
// import axios from 'axios';
// const Signup = () => {
//   const { signup, error, isLoading } = useSignup();

//   const [branch, setBranch] = useState("");
//   const [category, setCategory] = useState("");
//   const [address, setAddress] = useState("");
//   const [gender, setGender] = useState("");
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [year, setYear] = useState("");
//   const [merit, setMerit] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [image, setImage] = useState(" ");

//   const imageUpload = (e) => {
//     const file = e.target.files[0];
//     setFileToBase(file);
//     console.log(file);
//   };

//   const setFileToBase = (file) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setImage(reader.result);
//     };
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // console.log(name,number,branch,category,year,merit,address,gender,email,password)
//     await signup(
//       name,
//       number,
//       branch,
//       category,
//       year,
//       merit,
//       address,
//       gender,
//       email,
//       password,
//       image
//     );
//   };

//   console.log(name);

//   return (
//     <>
//       <div className="registration">
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Document</title>
//         <link
//           href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.1/flowbite.min.css"
//           rel="stylesheet"
//         />

//         <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-white-800 dark:border-gray-700 mt-6">
//           <h1 className="text-center">Admit Form</h1>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid gap-6 mb-6 mt-6 md:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   value={name}
//                   type="text"
//                   onChange={(e) => setName(e.target.value)}
//                   id="name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="John Doe"
//                   required=""
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
//                 >
//                   Phone number
//                 </label>
//                 <input
//                   value={number}
//                   onChange={(e) => setNumber(e.target.value)}
//                   type="number"
//                   id="phone"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="123-45-678"
//                   required=""
//                 />
//               </div>

//               <>
//                 <label
//                   htmlFor="branches"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Select your branch
//                 </label>
//                 <select
//                   value={branch}
//                   onChange={(e) => setBranch(e.target.value)}
//                   id="branches"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 >
//                   <option selected="">Choose your branch</option>
//                   <option value="cs">cs</option>
//                   <option value="mech">mech</option>
//                   <option value="civil">civil</option>
//                   <option value="electrinics">electronics</option>
//                   console.log("hi");
//                 </select>
//               </>

//               <>
//                 <label
//                   htmlFor="categories"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Select your category
//                 </label>
//                 <select
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   id="branch"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 >
//                   <option selected="">Choose your category</option>
//                   <option value="open">open</option>
//                   <option value="obc">obc</option>
//                   <option value="sc">st</option>
//                   <option value="nt">nt</option>
//                 </select>
//               </>

//               <div>
//                 <label
//                   htmlFor="year"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
//                 >
//                   Academic Year
//                 </label>
//                 <input
//                   value={year}
//                   onChange={(e) => setYear(e.target.value)}
//                   type="text"
//                   id="year"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Branch"
//                   required=""
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="merit"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
//                 >
//                   Merit Number
//                 </label>
//                 <input
//                   value={merit}
//                   onChange={(e) => setMerit(e.target.value)}
//                   type="text"
//                   id="merit"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Branch"
//                   required=""
//                 />
//               </div>
//             </div>
//             <>
//               <label
//                 htmlFor="branches"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Select your address
//               </label>
//               <select
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 id="branches"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               >
//                 <option selected="">Choose </option>
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Outside Mumbai">Outside Mumbai</option>
//               </select>
//             </>
//             <>
//               <label
//                 htmlFor="branches"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Select your gender
//               </label>
//               <select
//                 value={gender}
//                 onChange={(e) => setGender(e.target.value)}
//                 id="branches"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               >
//                 <option selected="">Choose your gender</option>
//                 <option value="M">M</option>
//                 <option value="F">F</option>
//               </select>
//             </>

//             <div className="mb-6">
//               <label
//                 htmlFor="email"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
//               >
//                 Email address
//               </label>
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 id="email"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="jjdoe@gmail.com"
//                 required=""
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="Password"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
//               >
//                 Password
//               </label>
//               <input
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 id="email"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="**"
//                 required=""
//               />
//             </div>
//             <div className="mb-3">
//               <div className="form-file custom-file">
//                 <label
//                   htmlFor="image"
//                   className="form-file-text custom-file-label block mb-2 text-sm font-medium text-gray-900 dark:text-black"
//                 >
//                   Choose Image...
//                 </label>
//                 <input
//                   type="file"
//                   className="form-file-input  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   id="image"
//                   name="image"
//                   placeholder="Choose Image"
//                   required=""
//                   onChange={imageUpload}
//                 />
//                 <label for="image" class="btn btn-primary">
//                   Browse
//                 </label>
//                 /
//               </div>
// //             </div>
//             <div className="flex items-start mb-6">
//               <div className="flex items-center h-5">
//                 <input
//                   id="remember"
//                   type="checkbox"
//                   defaultValue=""
//                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
//                   required=""
//                 />
//               </div>
//               <label
//                 htmlFor="remember"
//                 className="ml-2 text-sm font-medium text-black-900 dark:text-black-300"
//               >
//                 I agree with the{" "}
//                 <a
//                   href="#"
//                   className="text-blue-600 hover:underline dark:text-blue-500"
//                 >
//                   terms and conditions
//                 </a>
//               </label>
//             </div>
//             <button
//               onSubmit={handleSubmit}
//               type="submit"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;









import { useState } from "react";
import  {useRegister} from "../hooks/useRegister"

const Register = () => {
const{register,error,isLoading}=useRegister();
  // /personal info/
  const [pname , setpName ]= useState ('');
  const [gname , setgName ]= useState ('');
  const [merit , setMerit ]= useState ('');
  const [name , setName ]= useState ('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');
  const [category, setCategory] = useState('');
  const [semester , setSemester ]= useState ('');
  const [academicYear_institute , setAcademicYear_institute ]= useState ('');
  const [academicYear_hostel , setAcademicYear_hostel ]= useState ('');
  //parent info/
  const [address , setAddress ]= useState ('');
  const [stu_Number , setStu_Number ]= useState ('');
  const [parent_Number , setParent_Number ]= useState ('');
  const [email , setEmail ]= useState ('');
  const [tel_Number,setTel_Number]=useState('');
  //Gaurdian info/
  const [gaurdian_address , setGaurdian_address ]= useState ('');
  const [gaurdian_Number , setGaurdian_Number ]= useState ('');
  const [gaurdianTel_Number, setGaurdianTel_Number]=useState('');
  const [aadhar,setAadhar]=useState('');
  const [allotment,setAllotment]=useState('');
  const [sundertaking,setSundertaking]=useState('');
  const [pundertaking,setPundertaking]=useState('');


  const aadharUpload = (e) => {
    const file = e.target.files[0];
    setAadharToBase(file);
    console.log(file);
  };
  const allotmentUpload = (e) => {
    const file = e.target.files[0];
    setAllotmentToBase(file);
    console.log(file);
  };
  const sundertakingUpload = (e) => {
    const file = e.target.files[0];
    setSundertakingToBase(file);
    console.log(file);
  };
  const pundertakingUpload = (e) => {
    const file = e.target.files[0];
    setPundertakingToBase(file);
    console.log(file);
  };

  const setAadharToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAadhar(reader.result);
    };
  };
  const setPundertakingToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPundertaking(reader.result);
    };
  };
  const setAllotmentToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAllotment(reader.result);
    };
  };
  const setSundertakingToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSundertaking(reader.result);
    };
  };

    const handleSubmit =async( event) => {
      event.preventDefault()

    // console.log(name,number,branch,category,year,merit,address,gender,email,password)
      await register(name,course,category,semester,merit,academicYear_institute,academicYear_hostel,pname,address,stu_Number,parent_Number,email,gname,gaurdian_address,gaurdian_Number,gender,aadhar,allotment,sundertaking,pundertaking)

  };

  // console.log(name,course,category,semester,merit,academicYear_institute,academicYear_hostel,pname,address,stu_Number,parent_Number,email,gname,gaurdian_address,gaurdian_Number,gender,merit,pname,aadhar,allotment,sundertaking,pundertaking)



 
  return ( 
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.1/flowbite.min.css"
    rel="stylesheet"
  />
  <div style={{ padding: "10%" }}>
    <h1 style={{ fontSize: "200%", textAlign: "center", marginBottom: "4%" }}>
      Registration Form
    </h1>
    <form onSubmit={handleSubmit}>
      <h1>Personal Info:-</h1>
      <div className="relative z-0 w-full mb-6 group">
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
         
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Full Name in Capital(Begining with Surname)
        </label>
      </div>
      {/* <div className="relative z-0 w-full mb-6 group">
        <input
         value={category}
         type="text"
         onChange={(e) => setCategory(e.target.value)}
        
         id="category"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
        />
        <label
          htmlFor="category"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Category
        </label>
      </div> */}


                      <div className="wrap-input100">
                            <label>category:</label>
                            <br/>
                            
                            <select
                                  value={category}
                                  onChange={(e) => setCategory(e.target.value)}
        
                                    id="category"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  >
                                    <option selected="">Choose category</option>
                                    <option value="OPEN">OPEN</option>
                                    <option value="OBC">OBC</option>
                                    <option value="SC">SC</option>
                                    <option value="ST">ST</option>
                                    <option value="NT">NT</option>
                                    <option value="VJ">VJ</option>
                                    <option value="DT">DT</option>
                                    <option value="SBC">SBC</option>
                                    <option value="PH">PH</option>
                                    <option value="DEF">DEF</option>
                
                            </select>
                          </div>
      {/* <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            value={course}
            type="text"
            onChange={(e) => setCourse(e.target.value)}
           
            id="course"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="course"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Course:- Diploma(e.g: DME), Degree(e.g: B.Tech.Mechanical)
          </label>
        </div> */}
                            <div className="wrap-input100">
                            <label>Course:</label>
                            <br/>
                            
                            <select
                                  value={course}
                                  onChange={(e) => setCourse(e.target.value)}
        
                                    id="course"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  >
                                    <option selected="">Choose course</option>
                                    <option value="COMPS">COMPS</option>
                                    <option value="IT">IT</option>
                                    <option value="MECH">MECH</option>
                                    <option value="EXTC">EXTC</option>
                                    <option value="CIVIL">CIVIL</option>
                                    <option value="TEXT">TEXT</option>
                                    <option value="PROD">PROD</option>
                                    <option value="TRONICS">TRONICS</option>
                                    <option value="TRICAL">TRICAL</option>
                                   
                
                            </select>
                          </div>

                          
                          <div className="wrap-input100">
                            <label>gender:</label>
                            <br/>
                            
                            <select
                                  value={gender}
                                  onChange={(e) => setGender(e.target.value)}
        
                                    id="gender"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  >
                                    <option selected="">Choose Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                   
                
                            </select>
                          </div>


        <div className="relative z-0 w-full mb-6 group">
          <input
            value={semester}
            type="number"
            onChange={(e) => setSemester(e.target.value)}
           
            id="semester"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="semester"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Present Semester
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            value={merit}
            type="number"
            onChange={(e) => setMerit(e.target.value)}
           
            id="semester"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="semester"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Merit no.
          </label>
        </div>

      {/* </div> */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            value={academicYear_institute}
            type="number"
            onChange={(e) => setAcademicYear_institute(e.target.value)}
           
            id="academicYear_institute"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="academicYear_institute"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Academic Year in which admitted to institute
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
           value={academicYear_hostel}
           type="number"
           onChange={(e) => setAcademicYear_hostel(e.target.value)}
          
           id="academicYear_hostel"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="academicYear_hostel"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Academic Year in which admitted to Hostel
          </label>
        </div>
        <div className="mb-3">
              <div className="form-file custom-file">
                <label
                  htmlFor="image"
                  className="form-file-text custom-file-label block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Upload Aadhar Card
                </label>
                <input
                  type="file"
                  className="form-file-input  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="image"
                  name="aadhar"
                  placeholder="Choose Image"
                  required=""
                  onChange={aadharUpload}
                />
                <label for="image" class="btn btn-primary">
                  
                </label>
              </div>
              <div className="form-file custom-file">
                <label
                  htmlFor="image"
                  className="form-file-text custom-file-label block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Upload Allotment Letter
                </label>
                <input
                  type="file"
                  className="form-file-input  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="image"
                  name="allotment"
                  placeholder="Choose Image"
                  required=""
                  onChange={allotmentUpload}
                />
                <label for="image" class="btn btn-primary">
                  
                </label>
              </div>
              <div className="form-file custom-file">
                <label
                  htmlFor="image"
                  className="form-file-text custom-file-label block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Upload Student's Undertaking
                </label>
                <input
                  type="file"
                  className="form-file-input  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="image"
                  name="sundertaking"
                  placeholder="Choose Image"
                  required=""
                  onChange={sundertakingUpload}
                />
                <label for="image" class="btn btn-primary">
                </label>
              </div>
             </div>
      </div>
      <h1>Parent Info:-</h1>

      <div className="relative z-0 w-full mb-6 group">
        <input
          value={pname}
          type="text"
          onChange={(e) => setpName(e.target.value)}
         
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Full Name 
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          value={address}
          type="text"
          onChange={(e) => setAddress(e.target.value)}
         
          id="address"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
        />
        <label
          htmlFor="address"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Address of Parent/Guardian
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            value={stu_Number}
            type="number"
            onChange={(e) => setStu_Number(e.target.value)}
           
            id="stu_Number"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="stu_Number"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Student Mob. No.
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
           value={parent_Number}
           type="number"
           onChange={(e) => setParent_Number(e.target.value)}
            id="parent_Number"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="parent_Number"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Parent Mob. No.
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        {/* <div className="mb-3"> */}
              <div className="form-file custom-file">
                <label
                  htmlFor="image"
                  className="form-file-text custom-file-label block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Upload Parent's Undertaking
                </label>
                <input
                  type="file"
                  className="form-file-input  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="image"
                  name="pundertaking"
                  placeholder="Choose Image"
                  required=""
                  onChange={pundertakingUpload}
                />
                <label for="image" class="btn btn-primary">
                </label>
              </div>
              {/* </div> */}

        {/* <div className="relative z-0 w-full mb-6 group">
          <input
            value={tel_Number}
            type="number"
            onChange={(e) => setTel_Number(e.target.value)}
            id="tel_Number"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="tel_Number"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Tel No.
          </label>
        </div> */}
      </div>
      <h1>Local Gaurdian Info:-</h1>
      <div className="relative z-0 w-full mb-6 group">
        <input
          value={gname}
          type="text"
          onChange={(e) => setgName(e.target.value)}
         
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Full Name 
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          value={gaurdian_address}
          type="text"
          onChange={(e) => setGaurdian_address(e.target.value)}
          id="gaurdian_address"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
        />
        <label
          htmlFor="gaurdian_address"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Address of Local Gaurdian
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            value={gaurdian_Number}
            type="number"
            onChange={(e) => setGaurdian_Number(e.target.value)}
            id="gaurdian_Number"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="gaurdian_Number"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mob. No.
          </label>
        </div>
        {/* <div className="relative z-0 w-full mb-6 group">
          <input
            value={gaurdianTel_Number}
            type="number"
            onChange={(e) => setGaurdianTel_Number(e.target.value)}
            id="gaurdianTel_Number"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="gaurdianTel_Number"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Tel No.
          </label>
        </div> */}
      </div>
      <button
         onSubmit={handleSubmit}
         type="submit"
       disabled={isLoading}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
    <div>
    {isLoading &&<div> <i class="fa fa-circle-o-notch fa-spin"></i> <span>Loading </span></div>}
    
</div>
  </div>
</>
  );
}

export default Register ;











