import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import "./print.css";
import { useAuthContext3 } from "../hooks/useAuthContext3";
const Print = () => {
  const { clerk } = useAuthContext3();
  const [complains, setComplains] = useState("");
  const [error, setError] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    const fetchNotifi = async () => {
      const response = await fetch("http://localhost:4000/api/clerk/comp", {
        headers: { Authorization: `Bearer ${clerk.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        setComplains(json);
        console.log(complains);
      } else {
        setError(json.error);
        {
          alert(json.error);
        }
        console.log("inside else print.js");
      }
    };
    fetchNotifi();
  }, []);

  console.log(complains);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const filteredDat = date
    ? complains.filter((item) => item.date == date)
    : complains;

  return (
    <>
      <div className="wrap-input100">
        <label>Choose branch:</label>
        <br />

        <select
          value={date}
          onChange={(e) => setDate(e.target.value)}
          id="branches"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected="">Choose a Date</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
      </div>

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
                  <h1>Hostel Complains</h1>
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
                        <th>Date</th>
                        <th>Complain Description</th>
                      </tr>

                      {complains &&
                        filteredDat.map((com) => {
                          return (
                            <tr key={com._id}>
                              <td>{com.name} </td>
                              <td>{com.number}</td>
                              <td>{com.roomno}</td>
                              <td>{com.block}</td>
                              <td>{com.complain}</td>
                              <td>{com.date}</td>
                              <td>{com.compdetail}</td>
                            </tr>
                          );
                        })}
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
                style={{ marginLeft: "50%", marginRight: "50%" }}
                className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handlePrint}
              >
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
