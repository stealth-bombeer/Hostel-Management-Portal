import { useState, useEffect } from "react";

const AllotmentList = () => {
  let [bys, setBys] = useState([""]);
  let [isSetBys, setSetBys] = useState(false);
  let [gls,setGls] = useState([]);
  let [isSetGls, setSetGls] = useState(false);
  let [isBoys, setisBoys] = useState(false);
  let [isGirls, setisGirls] = useState(false);

  const [students, setstudents] = useState([]);
  const [combinedGirls, setCombinedGirls] = useState([]);
  const [combinedBoys, setCombinedBoys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/allotment", {
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
        setstudents([...data]);
        console.log(students);

        
        let st = [...data];
        console.log(st);
         const st2=[
          ...st.filter((student) => {
            return student.gender == "M" && student.address != "Mumbai";
          }),
        ];
        setSetBys(true);
        console.log(st2);
        console.log(st)
        const st1=[
          ...st.filter((student) => {
            return student.gender == "F" && student.address != "Mumbai";
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
  return (
    <div>
      <table>
        <tr>
          <th> Names</th>
          <th> Merit Rank</th>
          <th> Branch</th>
          </tr>
       {isBoys  && bys.map((date) => (
        <tr key={date._id}>
          
          <td>{date.name}</td>
          <td>{date.merit}</td>
          <td>{date.branch}</td>
        </tr>
      ))}
    </table>
    <table>
    <tr>
          <th> Names</th>
          <th> Merit Rank</th>
          <th> Branch</th>
          </tr>
      {setGls} { gls.map((date) => (
       <tr key={date._id}>
         
         <td>{date.name}</td>
         <td>{date.merit}</td>
         <td>{date.branch}</td>
       </tr>
     ))}
     </table>
     
   </div>
   
  );
};

export default AllotmentList;
