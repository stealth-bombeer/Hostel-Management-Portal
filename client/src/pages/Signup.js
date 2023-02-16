import { useEffect, useState } from "react";
import  {useSignup} from "../hooks/useSignup"

const Signup = () => {
const{signup,error,isLoading,success,setSuccess}=useSignup();

  const [branch, setBranch] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [name , setName ]= useState ('');
  const [number , setNumber ]= useState ('');
  const [year , setYear ]= useState ('');
  const [regid , setRegid ]= useState ('');
  const [email , setEmail ]= useState ('');
  const[password,setPassword]=useState('');
 

    const handleSubmit =async( event) => {
      event.preventDefault()

    // console.log(name,number,branch,category,year,merit,address,gender,email,password)
      await signup(name,number,branch,category,year,regid,address,gender,email,password,setAddress,setBranch,setCategory,setEmail,setGender,setRegid,setName,setNumber,setPassword,setYear)
      // await suc(success)

  };



useEffect(() => {
  console.log("UseEffect msg")
  setName("")
  setBranch("")
  setCategory("")
  setEmail("")
  setPassword("")
  setRegid("")
  setNumber("")
  setAddress("")
  setYear("")
  setGender("")
  setGender("")
  
}, [success]);
  // const handleChange1 = event => {
  //   console.log('Label 👉️', event.target.selectedOptions[0].label);
  //   console.log(event.target.value);
  //   setBranch(event.target.value);

  // };
  
  // const handleChange2 = event => {
  //   console.log('Label 👉️', event.target.selectedOptions[0].label);
  //   console.log(event.target.value);
  
  //   setCategory(event.target.value);
  // };
  // const handleChange3 = event => {
  //   console.log('Label 👉️', event.target.selectedOptions[0].label);
  //   console.log(event.target.value);
    
  //   setAddress(event.target.value);
  // }; 
  // const handleChange4 = event => {
  //   console.log('Label 👉️', event.target.selectedOptions[0].label);
  //   console.log(event.target.value);
  
  //   setGender(event.target.value);
  // };
  
  
  
  
  // function handleChange5(evt) {
    
  //   setNumber({ number: evt.target.value });
    
  //   console.log("new value", evt.target.value);
  // }
  // function handleChange6(evt) {
    
  //   setYear({ year: evt.target.value });
    
  //   console.log("new value", evt.target.value);
  // }
  // function handleChange7(evt) {
    
  //   setMerit({ merit: evt.target.value });
    
  //   console.log("new value", evt.target.value);
  // }
  // function handleChange8(evt) {
    
  //   setEmail({ email: evt.target.value });
  //   console.log("new value", evt.target.value);
  // }

console.log(name);
  
 
    return ( 
        < >
        <div className="registration">
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.1/flowbite.min.css"
    rel="stylesheet"
  />
  

  
  <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-white-800 dark:border-gray-700 mt-6">
    <h1 className="text-center">Admit Form</h1>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 mb-6 mt-6 md:grid-cols-2">
        <div>
          <label
            
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Full Name
          </label>
          <input
            //value={name} onChange={handleChange1 }
           value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
           
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Doe"
            required=""
          />
        </div>
      
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Phone number
          </label>
          <input
           value={number}
           onChange={(e) => setNumber(e.target.value)}
            type="number"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123-45-678"

            required=""
          />
        </div>
        
        <>
  <label
    htmlFor="branches"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Select your branch
  </label>
  <select
  value={branch}
  onChange={(e) => setBranch(e.target.value)}
    id="branches"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option selected="">Branch</option>
                                    <option value="COMPS">COMPS</option>
                                    <option value="IT">IT</option>
                                    <option value="MECH">MECH</option>
                                    <option value="EXTC">EXTC</option>
                                    <option value="CIVIL">CIVIL</option>
                                    <option value="TEXT">TEXT</option>
                                    <option value="PROD">PROD</option>
                                    <option value="TRONICS">TRONICS</option>
                                    <option value="TRICAL">TRICAL</option>
    console.log("hi");
  </select>
</>


         <>
  <label
    htmlFor="categories"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Select your category
  </label>
  <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
    id="branch"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option selected="">Category</option>
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
</>

        <div>
          <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Academic Year
          </label>
          <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
            type="text"
            id="year"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Year"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="merit"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Reg ID
          </label>
          <input
          value={regid}
          onChange={(e) => setRegid(e.target.value)}
            type="number"
            id="merit"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ID"
            required=""
          />
        </div>
      </div>
     

{/* <>
  <label
    htmlFor="categories"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Select your address
  </label>
  <div className="flex items-center mb-4">
  
    <input
      id="default-radio-1"
      type="radio"
      defaultValue=""
      name="default-radio"
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      htmlFor="default-radio-1"
      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Mumbai
    </label>
  </div>
  <div className="flex items-center">
    <input
      defaultChecked=""
      id="default-radio-2"
      type="radio"
      defaultValue=""
      name="default-radio"
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      htmlFor="default-radio-2"
      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Outside Mumbai
    </label>
  </div>
</> */}
<>
  <label
    htmlFor="branches"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Select your address
  </label>
  <select
  value={address} 
  onChange={(e) => setAddress(e.target.value)}
    id="branches"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option selected="">Choose </option>
    <option value="Mumbai">Mumbai</option>
    <option value="Outside Mumbai">Outside Mumbai</option>
    
  </select>
</>
<>
  <label
    htmlFor="branches"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Select your gender
  </label>
  <select
  value={gender}
  onChange={(e) => setGender(e.target.value)}
    id="branches"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option selected="">Choose your gender</option>
    <option value="M">M</option>
    <option value="F">F</option>
    
  </select>
</>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Email address
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="jjdoe@gmail.com"
          required=""
        />
      </div>
      <div>
      <label
          htmlFor="Password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="**"
          required=""
        />
      </div>
      {/* <div className="mb-3">
        <div className="form-file custom-file">
          <label
            htmlFor="image"
            className="form-file-text custom-file-label block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Choose Image...
          </label>
          <input
            type="file"
            className="form-file-input  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="image"
            name="image"
            placeholder="Choose Image"
            required=""
          />
          <label for="image" class="btn btn-primary">Browse</label>/
        </div>
      </div> */}
      <div className="flex items-start mb-6">
        {/* <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required=""
          />
        </div> */}
        {/* <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-black-900 dark:text-black-300"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
          
        </label> */}
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
    {/* {success ? <h2> Success</h2>:<div></div>} */}
  </div>

  {isLoading &&<div> <i class="fa fa-circle-o-notch fa-spin"></i> <span>Loading </span></div>}
    
  </div>
</>


     );
  }

export default Signup ;