import { useEffect, useState } from "react";
import { useAuthContext2 } from "../hooks/useAuthContext2";
const Notification = () => {
  const { admin } = useAuthContext2();
  const [notifi, setNotifi] = useState("");
  useEffect(() => {
    const fetchNotifi = async () => {
      const response = await fetch(
        "http://localhost:4000/api/admin/notification",
        {
          headers: { Authorization: `Bearer ${admin.token}` },
        }
      );

      const json = await response.json();

      if (response.ok) {
        setNotifi(json);
        console.log(notifi);
      }
    };
    fetchNotifi();
  }, []);
  const handleClick = async (not) => {
    console.log("Inside handleclick", not);
    const response = await fetch(
      "/api/admin/delnotification/" + not._id,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${admin.token}` },
      }

     
    
    );
    const json = await response.json();

    if (response.ok) {
      alert("Success");
      window.location.reload(true);
      //   dispatch({type: 'DELETE_WORKOUT', payload: json})
    } else {
      alert(json.error);
    }
  };

  return (
    <>
      {/* <div className="bgColour"> */}
      <div
        className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span className="fontmedium">Notification alert!</span> Behold!!!
        <br />
        <br />
        <div>
          {notifi &&
            notifi.map((not) => (
              <div key={not._id}>
                <div>{not.announcement}</div>
                <button
                  className="material-symbols-outlined"
                  onClick={() => handleClick(not)}
                >
                  delete
                </button>
                <br />
                <br />
              </div>
            ))}
        </div>
      </div>
      {/* <div className="cards">
  <div className="mohatsavcard1"> 
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img
        className="rounded-t-lg"
        src="https://scontent-pnq1-2.xx.fbcdn.net/v/t39.30808-6/279519413_3169374966670473_5580664543657353802_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=zn1UPHwCW0IAX8cqsAZ&_nc_ht=scontent-pnq1-2.xx&oh=00_AfDgYI_a8UrA9NBSaqKd_icIS5yf1oY6HjtfIgqKoTUxYA&oe=63C53808"
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          VJTI Hostel Mohotsava 2022
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Hola, 👋 We've come so far from one home to another home carrying huge
        luggage filled with abundant dreams💫 and mixed emotions of nervousness,
        excitement and grief of leaving our beloved ones. Now it's time to know
        about your second home <b>#HOSTEL</b> 😀😀
      </p>
      <a
        href="https://www.facebook.com/vjtihostelmahotsava/"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
  </div>

  <div className="mohatsavcard2"> 
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img
        className="rounded-t-lg"
        src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/69494292_2399713686969942_8958018846954881024_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=plSZLbCPaWAAX-CSuFr&_nc_ht=scontent-bom1-1.xx&oh=00_AfCxe9EuuvRG2DsqZhLUVdF566ft2LDtr60XzA9I8zd57w&oe=63E8F0A7"
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          VJTI Ganesh utsava 2022
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Unity shows it all.
Get ready for a Grand Festival.💥
VJTI Hostel Mahotsav'19 Committee presents
*VJTI Ganeshotsav 2019*🚩💥
      </p>
      <a
        href="https://www.facebook.com/vjtihostelmahotsava/"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
  </div>

  <div className="mohatsavcard3"> 
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img
        className="rounded-t-lg"
        src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-9/44219802_2195951980679448_6856745598201102336_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9267fe&_nc_ohc=h883jKmnhg4AX9E25R3&_nc_ht=scontent-bom1-2.xx&oh=00_AfBXosc5unZYFo-yUZNXSy8Uw1liad5k2mezsjVgFCLFoA&oe=63E8D87F"
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          VJTI Navratri Festival 2022
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      VJTI HOSTEL MAHOTSAVA presents you the significance of NAVRATRI Day 9 ✨
DAY 9 - Navami
 The last among the nine Avtar of Maa Durga, Maa Siddhidatri, is worshipped on the 9th day of Navaratri. Maa Siddhidatri grants Her devotees all sorts of achievements and is capable of giving all sorts of occult powers. She is the possessor of 26 different wishes (Siddhis) which She grants Her worshipers. 
      </p>
      <a
        href="https://www.facebook.com/vjtihostelmahotsava/"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
  </div>
  </div>
</div>
   */}
    </>
  );
};

export default Notification;
