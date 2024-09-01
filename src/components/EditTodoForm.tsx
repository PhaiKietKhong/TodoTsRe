
import { useState } from 'react';
import './EditTodoform.css'
type handleEdit ={
    id: string;
    task: string;
    completed?: boolean;
    isEditing?: boolean;
    handleRemove? :(id:string)=>void;
    editTodoForm : (id:string, task:string)=>void
}
function EditTodoForm({id,task,editTodoForm}:handleEdit) {

  const [valueEdit,setValueEdit] = useState<string>(task)
  function handleOnchange(e:any):any{
    setValueEdit(e.target.value);
  }

  const handleEditForm = ():void=>{

    editTodoForm(id,valueEdit)
  }
  return (
  <div  className='Todo'>
    <input onChange={(e)=>handleOnchange(e)} placeholder={task} type="text" className=' editTodo' />
    <button className='editBtn' onClick ={()=>{handleEditForm()}}>Done!!!</button>
  </div>
  )
}

export default EditTodoForm
