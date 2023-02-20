import React, { useRef, useState, useEffect } from "react";

const Accepted = () => {
    const [accepted, setAccepted] = useState("");
  const [error, setError] = useState("");
  const [students, setstudents] = useState([]);
  const [filter,setFilter]= useState([]);
  const [branch, setBranch]=useState('');
  const[temp,setTemp]=useState(false);
  const[dat,setDat]=useState([]);
  const[loading,setLoading]=useState(true);
  //for filtering
  let [bys, setBys] = useState([""]);
  let [isSetBys, setSetBys] = useState(false);
  let [gls,setGls] = useState([]);
  let [isSetGls, setSetGls] = useState(false);
  let [isBoys, setisBoys] = useState(false);
  let [isGirls, setisGirls] = useState(false);


  useEffect(() => {
    // const fetchAccepted = async () => {
    //   const response = await fetch("http://localhost:4000/api/admin/acceptedstuds");
    //   const json = await response.json();

    //   if (response.ok) {
    //     setAccepted(json);
    //     console.log(accepted);
    //   } else {
    //     setError(json.error);
    //     {
    //       alert(json.error);
    //     }
    //   }
      



      
    // };



    
    //   fetchAccepted();
      
    fetch("http://localhost:4000/api/admin/acceptedstuds", {
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
        setAccepted([...data]);
        setDat([...data])
        console.log("hello")
        console.log(accepted);
        setLoading(false);

        
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
            return student.gender == "Female"  ;
          }),
        ];
        console.log(st1);
        setGls (st1);

        setSetGls(true);
        setBys([...st2.sort((a, b) => a.merit - b.merit)]);        setisBoys(true);
        setGls([...st1.sort((a, b) => a.merit - b.merit)]);
        console.log(gls);
        console.log(students);
        console.log(branch);
      });


  }, []);

  console.log(branch)
 
  const filteredDat = branch
  ? gls.filter((item) => item.course == branch)
  : gls;

  const filteredDat1 = branch
  ? bys.filter((item) => item.course == branch)
  : bys;
    return ( <>

{/* { !loading &&<form className="form" id="form1" onSubmit={handleSubmit}> */}
      
      <div className="wrap-input100">
                            <label>Choose branch:</label>
                            <br/>
                            
                            <select
                                  value={branch}
                                  onChange={(e) => setBranch(e.target.value)}
                                    id="branches"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  >
                                    <option selected="">Choose a branch</option>
                                    <option value="COMPS">Computer</option>
                                    <option value="EXTC">EXTC</option>
                                    <option value="IT">IT</option>
                                    <option value="TEXT">Textile</option>
                                    <option value="MECH">Mechanical</option>
                                    <option value="PROD">Production</option>
                                    <option value="TRONICS">Electronics</option>
                                    <option value="TRICAL">Electrical</option>
                                    <option value="CIVIL">Civil</option>
                
                
                            </select>
                          </div>
                         
                          
                          


                            

                            {/* <button
                            onClick={handleSubmit}
                            type="submit"
                            className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                            Submit
                            </button>
                                            

                          

   </form>} */}
    
    <div class="print__section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              {/* <button onClick={handlePrint} className="print__button">
                {" "}
                Print{" "}
              </button> */}
              <div  className="card">
                <div class="float__start">
                  <h1 >Accepted Boys List</h1>
                </div>
                <hr />
                <div class="float__infoss">
                  
                      <div className="App">
                        <table className="center">
                          <tr>
                            <th>Name </th>
                            <th>Merit No.</th>
                            <th>Course</th>
                            <th>Category</th>
                            <th>Gender</th>
                          </tr>

                  {/* {accepted &&
                    accepted.map((acc) => {
                       */}
                   {isBoys  && filteredDat1.map((acc) => {
                //    {temp && filter.map((acc) => {
                      return(
                        <tr key={acc._id}>
                          <td>{acc.name}</td>
                          <td>{acc.merit}</td>
                          <td>{acc.course}</td>
                          <td>{acc.category}</td>  
                          <td>{acc.gender}</td>  
                        </tr> 

                        )  
                       
                       } )
                 }
                        </table>

                        </div>   


                </div>
              </div>

              <div  className="card">
                <div class="float__start">
                  <h1 >Accepted Girls List</h1>
                </div>
                <hr />
                <div class="float__infoss">
                  
                      <div className="App">
                        <table className="center">
                          <tr>
                            <th>Name </th>
                            <th>Merit No.</th>
                            <th>Course</th>
                            <th>Category</th>
                            <th>Gender</th>
                          </tr>

                  {/* {accepted &&
                    accepted.map((acc) => {
                       */}
      {setGls} { filteredDat.map((acc) =>  {
                      return(
                        <tr key={acc._id}>
                          <td>{acc.name}</td>
                          <td>{acc.merit}</td>
                          <td>{acc.course}</td>
                          <td>{acc.category}</td>  
                          <td>{acc.gender}</td>  
                        </tr> 

                        )  
                       
                       } )
                 }
                        </table>

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
 
export default Accepted;