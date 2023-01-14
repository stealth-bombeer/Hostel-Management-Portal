import { useState, useEffect } from "react";

const AllotmentList = () => {
  let [bys, setBys] = useState([]);
  let [isSetBys, setSetBys] = useState(false);
  let [gls, setGls] = useState([]);
  let [isSetGls, setSetGls] = useState(false);
  let [isBoys, setisBoys] = useState(false);
  let [isGirls, setisGirls] = useState(false);
  // const data = [
  //   { name: "Anom", age: 19, gender: "Male" },
  //   { name: "Megha", age: 19, gender: "Female" },
  //   { name: "Subham", age: 25, gender: "Male" },
  // ];
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
        // console.log(res.json());
        return res.json();
      })
      .then((data) => {
        console.log([...data]);
        setstudents([...data]);
        console.log(students);

        //  for(let i=0;i<students.length;i++)
        //  {
        //     if(students[i].gender==='M'&& students[i].address!=="Mumbai")
        //     {
        //         setCombinedBoys=[...students[i]]
        //     }
        //     if(students[i].gender==='F'&& students[i].address!=="Mumbai")
        //     {
        //         setCombinedGirls=[...students[i]]
        //     }
        //  }
        let st = [...data];
        console.log(st);
        setBys([
          ...st.filter((student) => {
            return student.gender == "M" && student.address != "Mumbai";
          }),
        ]);
        setSetBys(true);

        console.log(bys);
        setGls([
          ...st.filter((student) => {
            return student.gender == "F" && student.address != "Mumbai";
          }),
        ]);
        setSetGls(true);
        setBys([...bys.sort((a, b) => a.merit - b.merit)]);
        setisBoys(true);
        setGls([...gls.sort((a, b) => a.merit - b.merit)]);
        setisGirls(true);
        console.log(gls);
        console.log(students[0]);
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
        {isBoys &&
          bys.map((date) => (
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
        { isGirls &&
        gls.map((date) => (
          <tr key={date._id}>
            <td>{date.name}</td>
            <td>{date.merit}</td>
            <td>{date.branch}</td>
          </tr>
        ))}
      </table>
      <h2> Alloted Below 10000</h2>
    </div>
  );
};

export default AllotmentList;
