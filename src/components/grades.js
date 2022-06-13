import React from 'react';

function Grades({grades}) {

    return (<>
     <ul className='grade-list'>

{grades.map((e,index)=><li>Test { index} : &nbsp;&nbsp;&nbsp; {e}%</li>)}
</ul>
    </>);

}

export default Grades;