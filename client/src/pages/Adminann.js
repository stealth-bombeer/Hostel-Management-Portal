import { useState } from "react";
// import { createannouncement } from "../../../Backend/controllers/notificationController";
//import { create } from "../../../Backend/models/workoutModel";

const Adminann = () => {
  const [announcement, setAnnouncement] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hii")
    // await createannouncement(announcement);
    const ann = { announcement };

    fetch('http://localhost:4000/api/admin/ann', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        announcement: ann.announcement
      })
    }).then((res) => {
        console.log("announcement made")
        setAnnouncement('')
        return res.json()
     })
  }

  return (
    <div className="announcement-box">
  <form className="flex flex-col items-center">
    <h3 className="text-lg font-medium mb-4">Make an announcement</h3>
    <textarea
      required
      rows="5" 
      className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      value={announcement}
      onChange={(e) => setAnnouncement(e.target.value)}
    ></textarea>
    <button 
      className="px-4 py-2 mt-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
      onClick={handleSubmit}
    >
      Done
    </button>
  </form>
</div>

  );
}
 
export default Adminann;