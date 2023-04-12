import { useState,useEffect } from "react";

import { useAuthContext } from "../hooks/useAuthContext";

const ComplainClerk = () => {
  const [block, setBlock] = useState("");
  const [roomno, setRoomno] = useState("");
  const [complain, setComplain] = useState("");
  const [error, setError] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [compdetail, setCompdetail] = useState("");
  const { user } = useAuthContext();
  // const name = user.name;
  // const number = user.number;
  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!user) {
    //   setError("You must be logged in");
    //   return;
    // }
    const name = user.name;
    const number =user.number
    const date = dateTime.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).slice(0,2)
    const details = {  name,number,block, roomno, complain ,date,compdetail};

    const response = await fetch("/api/user/complainclerk", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      // setIsLoading(false)
      setError(json.error);
      {
        alert(json.error);
      }
    }
    if (response.ok) {
      setBlock("");
      setComplain("");
      setRoomno("");
      setError("");
      setCompdetail("");
    }
  };

  // console.log(name, number);

  return (
    <div>
       <div>
      <p>Current date and time: {dateTime.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).slice(0,2)
}</p>
    </div>
      {/* component */}
      {/* Container */}
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          {/* Row */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* Col */}
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              //className="contact"
              style={{
                width: "600px",
                backgroundImage:
                  'url("https://www.targetadmission.com/img/colleges/newc/21811-309855.jpg")',
              }}
            />
            {/* Col */}
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">
                <h3 style={{ color: "black" }}>Hello,Contact us:</h3>
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="firstName"
                    >
                      Block
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="floating_first_name"
                      name="user_name"
                      type="text"
                      placeholder="Block"
                      required=" "
                      value={block}
                      onChange={(e) => setBlock(e.target.value)}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="lastName"
                    >
                      Room No.
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="floating_last_name"
                      name="floating_name"
                      type="text"
                      placeholder="Room no."
                      required=""
                      value={roomno}
                      onChange={(e) => setRoomno(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-6 text-center">
                  <div className="wrap-input100">
                    <label>complains:</label>
                    <br />

                    <select
                      value={complain}
                      onChange={(e) => setComplain(e.target.value)}
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected="">Choose complain about</option>
                      <option value="fan">fan</option>
                      <option value="light">light</option>
                      <option value="door">door</option>
                      <option value="lift">lift</option>
                      <option value="water">water</option>
                      <option value="electricity">electricity</option>
                    </select>
                  </div>
                  <div>
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="firstName"
                    >
                      Description about your complain
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="floating_first_name"
                      name="user_name"
                      type="text"
                      placeholder="Describe complain"
                      required=" "
                      value={compdetail}
                      onChange={(e) => setCompdetail(e.target.value)}
                    />
                  </div>
                  </div>
                  <button
                    type="submit"
                    className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onSubmit={handleSubmit}
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
};

export default ComplainClerk;
