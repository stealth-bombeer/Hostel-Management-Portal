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
  


    return ( <>
    
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
                  <h1 >Rejected Boys List</h1>
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
                            <th>Reason</th>
                          </tr>

 {isBoys  && bys.map((rej) => {
                      return(
                        <tr key={rej._id}>
                          <td>{rej.name}</td>
                          <td>{rej.merit}</td>
                          <td>{rej.course}</td>
                          <td>{rej.category}</td>  
                          <td>{rej.gender}</td>  
                          <td>{rej.message}</td>  
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
                  <h1 >Rejected Girls List</h1>
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
                            <th>Reason</th>
                          </tr>
               {setGls} { gls.map((rej) =>  {
                      return(
                        <tr key={rej._id}>
                          <td>{rej.name}</td>
                          <td>{rej.merit}</td>
                          <td>{rej.course}</td>
                          <td>{rej.category}</td>  
                          <td>{rej.gender}</td>  
                          <td>{rej.message}</td>  
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
 
export default Rejected;