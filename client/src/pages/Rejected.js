import React, { useRef, useState, useEffect } from "react";

const Rejected = () => {
    const [rejected, setRejected] = useState("");
  const [error, setError] = useState("");
  const [students, setstudents] = useState([]);



  //for filtering
  let [bys, setBys] = useState([""]);
  let [isSetBys, setSetBys] = useState(false);
  let [gls,setGls] = useState([]);
  let [isSetGls, setSetGls] = useState(false);
  let [isBoys, setisBoys] = useState(false);
  let [isGirls, setisGirls] = useState(false);
  useEffect(() => {
    // const fetchRejected = async () => {
    //   const response = await fetch("http://localhost:4000/api/admin/rejectedstuds");
    //   const json = await response.json();

    //   if (response.ok) {
    //     setRejected(json);
    //     console.log(rejected);
    //   } else {
    //     setError(json.error);
    //     {
    //       alert(json.error);
    //     }
    //   }
      



      
    // };



    // fetchRejected();

    fetch("http://localhost:4000/api/admin/rejectedstuds", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log([...data]);
        setRejected([...data]);
        console.log(rejected);

        
        let st = [...data];
        console.log(st);
         const st2=[
          ...st.filter((student) => {
            return student.gender == "Male" ;
          }),
        ];
        setSetBys(true);
        console.log(st2);
        console.log(st)
        const st1=[
          ...st.filter((student) => {
            return student.gender == "Female" ;
          }),
        ];
        console.log(st1);
        setGls (st1);

        setSetGls(true);
        setBys([...st2.sort((a, b) => a.merit - b.merit)]);        setisBoys(true);
        setGls([...st1.sort((a, b) => a.merit - b.merit)]);
        console.log(gls);
        console.log(students);
      });

  }, []);

  console.log(Rejected);
  


    return ( 
      <>
    
    {/* <div class="print__section">
  <div class="container mx-auto">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="float__start">
            <h1 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl">Rejected Boys List</h1>
          </div>
          
          <div class="float__infoss">
            <div class="App">
              <table class="w-full table-fixed">
                <thead>
                  <tr class="text-center">
                    <th class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">Name</th>
                    <th class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">Merit No.</th>
                    <th class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">Course</th>
                    <th class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">Category</th>
                    <th class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">Gender</th>
                    <th class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {isBoys && bys.map((rej) => (
                    <tr key={rej._id}>
                      <td class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">{rej.name}</td>
                      <td class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">{rej.merit}</td>
                      <td class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">{rej.course}</td>
                      <td class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">{rej.category}</td>
                      <td class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">{rej.gender}</td>
                      <td class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">{rej.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="float__start">
            <h1 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl">Rejected Girls List</h1>
          </div>
          
          <div class="float__infoss">
            <div class="App">
              <table class="w-full table-fixed">
                <thead>
                  <tr class="text-center">
                  <th class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">Name</th>
                    <th class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">Merit No.</th>
                    <th class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">Course</th>
                    <th class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">Category</th>
                    <th class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">Gender</th>
                    <th class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">Reason</th>
                  </tr>
                </thead>
                <tbody>
                {setGls}  {gls.map((rej) => (
                    <tr key={rej._id}>
                      <td class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">{rej.name}</td>
                      <td class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">{rej.merit}</td>
                      <td class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">{rej.course}</td>
                      <td class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">{rej.category}</td>
                      <td class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">{rej.gender}</td>
                      <td class="w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/5">{rej.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
                    

    </> */}
    
<div>
    <div class="print__section">
  <div class="container mx-auto px-4">
    <div class="flex flex-col">
      <div class="my-4">
        
      </div>
      <div class="my-4">
        <div class="card bg-white shadow-md">
          <div class="float__start">
            <h1 class="text-2xl font-bold text-gray-700 py-2 px-4">Rejected Boys List</h1>
          </div>
          {/* <hr class="border-gray-300 my-2"> */}
          <div class="float__infoss p-4">
            <div class="App">
              <table class="table-auto w-full">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Merit No.</th>
                    <th class="px-4 py-2">Course</th>
                    <th class="px-4 py-2">Category</th>
                    <th class="px-4 py-2">Gender</th>
                    <th class="px-4 py-2">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {isBoys && bys.map((rej) => (
                    <tr key={rej._id}>
                      <td class="border px-4 py-2">{rej.name}</td>
                      <td class="border px-4 py-2">{rej.merit}</td>
                      <td class="border px-4 py-2">{rej.course}</td>
                      <td class="border px-4 py-2">{rej.category}</td>  
                      <td class="border px-4 py-2">{rej.gender}</td> 
                      <td class="border px-4 py-2">{rej.message}</td>  
                    </tr>  
                
                  ))}
                </tbody>
              </table>
            </div>   
          </div>
        </div>
      </div>
      <div class="my-4">
        <div class="card bg-white shadow-md">
          <div class="float__start">
            <h1 class="text-2xl font-bold text-gray-700 py-2 px-4">Rejected Girls List</h1>
          </div>
          {/* <hr class="border-gray-300 my-2"> */}
          <div class="float__infoss p-4">
            <div class="App">
              <table class="table-auto w-full">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Merit No.</th>
                    <th class="px-4 py-2">Course</th>
                    <th class="px-4 py-2">Category</th>
                    <th class="px-4 py-2">Gender</th>
                    <th class="px-4 py-2">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {setGls && gls.map((rej) => (
                    <tr key={rej._id}>
                       <td class="border px-4 py-2">{rej.name}</td>
                      <td class="border px-4 py-2">{rej.merit}</td>
                      <td class="border px-4 py-2">{rej.course}</td>
                      <td class="border px-4 py-2">{rej.category}</td>  
                      <td class="border px-4 py-2">{rej.gender}</td> 
                      <td class="border px-4 py-2">{rej.message}</td> 
                      </tr> 
                  ))}
                </tbody>
              </table>
            </div>   
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
</div>
</>

);
    
   
}
 
export default Rejected;