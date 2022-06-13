import React from "react";

function Search({ setStudents, data }) {
  // search by student name callback

  const filterStudents = (ev) => {
    try {
      const e = ev.trim().toLowerCase();
      const newStudents = data.filter(
        (student) =>
          student.firstName.toLowerCase().includes(e) ||
          student.lastName.toLowerCase().includes(e)
      );
      setStudents(newStudents);
    } catch (err) {
      console.log(err);
    }
  };

  // search by tages callback
  const filterTages = (ev) => {
    try {
      const e = ev.trim().toLowerCase();

      const newStudents = data.filter((student) => {
        if (student.tages) {
          const index = student.tages.findIndex((t) => t.includes(e));
          if (index !== -1) {
            return student;
          }
        }
      });

      newStudents.length !== 0 && e !== ""
        ? setStudents(newStudents)
        : setStudents(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <input
        className="search"
        type="search"
        onChange={(event) => filterStudents(event.target.value)}
        placeholder="Search by name"
      />
      <input
        className="search"
        type="search"
        onChange={(event) => filterTages(event.target.value)}
        placeholder="Search by Tage"
      />
    </>
  );
}

export default Search;
