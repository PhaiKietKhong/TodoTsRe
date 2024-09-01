import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare as faPenToSquareRegular } from '@fortawesome/free-regular-svg-icons';
import { faTrash as faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Todo.css"
import { useRef } from 'react';
type TodoType = {
  id?: string;
  task?: string;
  completed?: boolean;
  isEditing?: boolean;
  handleRemove :(id:string)=>void;
  handleEdit :(id:string)=>void;
  handleCompleted : (id:string)=>void;
};

function Todo({id, task,handleRemove,completed, handleEdit,handleCompleted}: TodoType ) {
  const myRef = useRef<HTMLLIElement>(null);
  const handleCompleted1=():void=>{
    handleCompleted(id!)

  }

  return (
    <div  className='Todo'>
      <li ref={myRef} style={{textDecoration: completed? "line-through" : "none"}} onClick={()=>handleCompleted1()}>{task}</li>
      <FontAwesomeIcon className='edit' icon={faPenToSquareRegular} onClick ={()=> handleEdit(id!)} />    
      <FontAwesomeIcon className='trash' icon={faTrash} onClick={()=> handleRemove(id!)}  />
    </div>
  )
}

export default Todo
