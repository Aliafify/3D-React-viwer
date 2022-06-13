import React, { useState } from "react";

function AddTages({ index, Students, setStudents }) {
  const [tage, setTage] = useState(null);

  // adding tages into student data

  const handelTages = (event) => {
    try {
      event.preventDefault();
      let newStudents = Students;
      if (!newStudents[index].tages && tage) {
        newStudents[index].tages = [tage];
        setStudents(newStudents);
      } else if (tage) {
        const tages = newStudents[index].tages;
        newStudents[index].tages = [...tages, tage];
        setStudents(newStudents);
      }
      setTage(null);
    } catch (err) {
      console.log(err);
    }
  };

  // set Tage state
  const onChange = (e) => {
    setTage(e);
  };

  return (
    <div >
      {Students[index].tages ? (
        <div className="tages-cont">{
        Students[index].tages.map((tage) => {
          return (
            <span className="tage" key={tage}>
              {tage}
            </span>
          );
        })
}
        </div>) : (
        <></>
      )}
      <form className="form" onSubmit={handelTages}>
        <input className="add-tage" type="text" placeholder="add tages" onChange={(event) => onChange(event.target.value)} />
      </form>
    </div>
  );
}

export default AddTages;
