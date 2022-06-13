import React,{useState} from 'react';
import AddTages from './AddTages';
import Grades from "./grades";
function Student({s,average,index,setStudents,Students}) {
    const [showGrades,setShowGrades]=useState(false)
    const student= s;

    return ( <>
    <div>

   
    <div className="cont">
                <div>
                  <img className="img" src={student.pic} alt="" />
                </div>
                <div className="content">
                <div>
                <h1 className='name'>{student.firstName + " " + student.lastName} </h1>
                  <p className="discription">
                    Email: {student.email}
                    <br />
                    Company : {student.company} <br />
                    Skill: {student.skill}
                    <br />
                    Average : {average} %<br/>

                  </p>
                  
                  <AddTages  index={index} setStudents={setStudents} Students={Students}/>

                </div>
                
                   
                </div>
                
                <div id="plus-icon">
               
                  <button className={`icon ${!showGrades?"pluse":"minus"}`}  
                  onClick={()=>{showGrades? setShowGrades(false):setShowGrades(true)}} >
                    </button>
                  
                   
                </div>
              </div>
              <div className='grades'>

              {
                     showGrades?
                   <Grades grades={s.grades}/>:null
                    }
              </div>
              </div>
    </> );
}

export default Student;