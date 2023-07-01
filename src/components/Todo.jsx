import React  from 'react';
import {AiTwotoneDelete} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
const Todo = ({text,updatemode,deletetodo}) => {
  return (
   <>
    <div className="todo">
        <div className="text">{text}
        </div>
        <div className="icons">
            <AiFillEdit className='icon' onClick={updatemode}/>
            <AiTwotoneDelete className='icon' onClick={deletetodo}/>
        </div>
    </div>
   </>
  );
}

export default Todo;
