import React, {  useEffect, useState } from "react";
import Search from "./Search";

import Student from "./Student";

function Students() {
  

  
  const [Students, setStudents] = useState(null);
  const [data ,setData] = useState(null) ;
  useEffect(() => {
    async function fetchStudents(){
      let response = await fetch("https://api.hatchways.io/assessment/students");
      let data = await response.json();
      setStudents(data.students);
      setData(data.students)
    }
    fetchStudents();
  }, []);

  // find array avarage value callback
  const avg = (test) => {
    let averag = 0;
    for (let t of test) {
      averag += parseInt(t);
    }
    return averag / test.length;
  };
 
  return (
    <>

      <div className="container">
        <Search  setStudents={setStudents} data={data}/>
        {Students ? (
          Students.map((s,index) => {
            const average = avg(s.grades);
            return (
              <>
              <div key={s.id}>

              <Student key={index} average={average} s={s} index={index} setStudents={setStudents} Students={Students} />
              </div>
              </>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Students;
