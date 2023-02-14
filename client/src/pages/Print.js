import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import "./print.css";
const Print = () => {
  const [complains, setComplains] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchNotifi = async () => {
      const response = await fetch("http://localhost:4000/api/admin/comp");
      const json = await response.json();

      if (response.ok) {
        setComplains(json);
        console.log(complains);
      } else {
        setError(json.error);
        {
          alert(json.error);
        }
      }
    };
    fetchNotifi();
  }, []);

  console.log(complains);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div class="print__section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              {/* <button onClick={handlePrint} className="print__button">
                {" "}
                Print{" "}
              </button> */}
              <div ref={componentRef} className="card">
                <div class="float__start">
                  <h1 >Hostel Complains</h1>
                </div>
                <hr />
                <div class="float__infoss">
                  {/* <ul>
                <li> Name : <span> Dr Andrew C S Koh </span> </li>
                <li> Email : <span> Andrew@gmail.com </span> </li>
                <li> Gender : <span> Male </span> </li>
                <li> Date of Birth : <span> 07-24-1982</span> </li>
                <li> Phone No: <span> </span> 9856231456 </li>
                <li> Address : <span> 26 Wyle Cop, Shrewsbury, Shropshire, SY1 1XD </span> </li>
                <li> Website : <span> www.Andrew.com </span> </li>
                <li> Country : <span> United states </span> </li> 
              </ul> */}
              {/* <table>
                          <tr>
                            <th>Name </th>
                            <th>phone number</th>
                            <th>Room No.</th>
                            <th>Block No.</th>
                            <th>Complain</th>
                          </tr> */}
              {/* </table> */}
                  {/* {complains &&
                    complains.map((com) => (
                      <div key={com._id}> */}
                      <div className="App">
                        <table className="center">
                          <tr>
                            <th>Name </th>
                            <th>phone number</th>
                            <th>Room No.</th>
                            <th>Block No.</th>
                            <th>Complain</th>
                          </tr>

                  {complains &&
                    complains.map((com) => {
                      
                      return(
                        <tr key={com._id}>
                          <td>{com.name}          </td>
                          <td>{com.number}</td>
                          <td>{com.roomno}</td>
                          <td>{com.block}</td>
                          <td>{com.complain}</td>
                        </tr> 

                        )  
                       
                       } )
                 }
                        </table>

                        </div>   

             {/* <button onClick={handlePrint} className="print__button">
                {" "}
                Print{" "}
              </button>
 */}

                {/* <button
                   type="submit"
                   style={{marginLeft: "50%",
                  marginRight:"50%"}}
                   className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   onClick={handlePrint} >
                   Print
                   </button> */}
                </div>
              </div>
              <button
                   type="submit"
                   style={{marginLeft: "50%",
                  marginRight:"50%"}}
                   className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   onClick={handlePrint} >
                   Print
                   </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Print;