import React, { useState } from 'react'
import './TodoForm.css'

type TodoFormProps = {
  addTodo: (task: string) => void; // Định nghĩa kiểu cho addTodo
};

function TodoForm({ addTodo }: TodoFormProps) {

  const [value, setValue] = useState<string>(""); 
  function handleOnchange(e:any):any{
    setValue(e.target.value);
  }

  const handleCLick = (e: React.MouseEvent<HTMLButtonElement>):void =>{
    e.preventDefault()
    if (value.trim()) {
      addTodo(value);
      setValue(''); 
    }
  }

  return (
    <form className='TodoForm'>
      <input value={value} onChange={(e)=> handleOnchange(e)} type="text" placeholder='enter your todo!' />
      <button  onClick={(e)=>handleCLick(e)}>Add Todo</button>
    </form>
  )
}

export default TodoForm
