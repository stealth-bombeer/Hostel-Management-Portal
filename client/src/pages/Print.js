import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";

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
              <button onClick={handlePrint} className="print__button">
                {" "}
                Print{" "}
              </button>
              <div ref={componentRef} className="card">
                <div class="float__start">
                  <h3 class="card-title mb-0">Information</h3>
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
                  {complains &&
                    complains.map((com) => (
                      <div key={com._id}>
                        <div>{com.name}</div>
                        <div>{com.number}</div>
                        <div>{com.roomno}</div>
                        <div>{com.bloc}</div>
                        <div>{com.complain}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Print;
