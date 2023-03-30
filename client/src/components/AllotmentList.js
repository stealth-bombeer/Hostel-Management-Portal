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
    <div class="overflow-x-auto">
  <table class="table-auto min-w-full divide-y divide-gray-200 font-sans">
    <thead>
      <tr>
        <th class="px-6 py-3 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Names</th>
        <th class="px-6 py-3 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Merit Rank</th>
        <th class="px-6 py-3 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Branch</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {isBoys &&
        bys.map((date) => (
          <tr key={date._id}>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-left">{date.name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-center">{date.merit}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-right">{date.branch}</td>
          </tr>
        ))}
    </tbody>
  </table>

  <table class="table-auto min-w-full divide-y divide-gray-200 font-sans">
    <thead>
      <tr>
        <th class="px-6 py-3 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Names</th>
        <th class="px-6 py-3 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Merit Rank</th>
        <th class="px-6 py-3 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Branch</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {gls.map((date) => (
        <tr key={date._id}>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-left">{date.name}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-center">{date.merit}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-right">{date.branch}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>



   
  );
};

export default AllotmentList;
