import { useState } from "react";
// import { createannouncement } from "../../../Backend/controllers/notificationController";
//import { create } from "../../../Backend/models/workoutModel";

const AdminHome = () => {
  const [announcement, setAnnouncement] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hii")
    // await createannouncement(announcement);
    const ann = { announcement };

    fetch('http://localhost:4000/api/admin/ad', {
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
      <h2>Make an announcement</h2>
      <form >
      
        <textarea
          required
          rows="5" cols="80"
          value={announcement}
          onChange={(e) => setAnnouncement(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>Done</button>
      </form>
    </div>
  );
}
 
export default AdminHome;