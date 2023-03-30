import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import "./print.css";
const Print = () => {
  const [complains, setComplains] = useState("");
  const [error, setError] = useState("");
  const [date, setDate]=useState("");
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
  const filteredDat = date
  ? complains.filter((item) => item.date == date)
  : complains;

  return (
    <>
    <div className="wrap-input100">
                            <label>Choose branch:</label>
                            <br/>
                            
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
  <div class="container mx-auto">
    <div class="row">
      <div class="col-md-12">
        <div ref={componentRef} class="card">
          <div class="float__start">
            <h1 class="text-3xl sm:text-4xl">Hostel Complains</h1>
          </div>
          <hr class="my-4" />
          <div class="float__infoss">
            <div class="App">
              <table class="w-full text-left whitespace-no-wrap">
                <thead>
                  <tr class="bg-gray-100 border-b">
                    <th class="px-4 py-2 font-medium text-sm text-gray-700">Name</th>
                    <th class="px-4 py-2 font-medium text-sm text-gray-700">Phone Number</th>
                    <th class="px-4 py-2 font-medium text-sm text-gray-700">Room No.</th>
                    <th class="px-4 py-2 font-medium text-sm text-gray-700">Block No.</th>
                    <th class="px-4 py-2 font-medium text-sm text-gray-700">Complain</th>
                    <th class="px-4 py-2 font-medium text-sm text-gray-700">Date</th>
                    <th class="px-4 py-2 font-medium text-sm text-gray-700">Complain Description</th>
                  </tr>
                </thead>
                <tbody>
                  {complains &&
                    filteredDat.map((com) => {
                      return (
                        <tr key={com._id} class="border-b">
                          <td class="px-4 py-3 text-sm">{com.name}</td>
                          <td class="px-4 py-3 text-sm">{com.number}</td>
                          <td class="px-4 py-3 text-sm">{com.roomno}</td>
                          <td class="px-4 py-3 text-sm">{com.block}</td>
                          <td class="px-4 py-3 text-sm">{com.complain}</td>
                          <td class="px-4 py-3 text-sm">{com.date}</td>
                          <td class="px-4 py-3 text-sm">{com.compdetail}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="block mx-auto mt-8 px-6 py-2 text-white bg-blue-700 rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
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