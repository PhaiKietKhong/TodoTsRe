import Todo from './Todo';
import TodoForm from './TodoForm';
import './Wrapper.css';
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState } from 'react';
import EditTodoForm from './EditTodoForm';

type TodoType = {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
};

function Wrapper() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  
  const addTodo = (task: string) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: task,
        completed: false,
        isEditing: false,
      }
    ]);
  };

  const handleRemove = (id:string) :void =>{
    const IDremover:TodoType[] = todos.filter(idF => idF.id !== id);

    setTodos(IDremover)
  }

  const handleEdit = (id:string):void=>{
    const arrayEdit = todos.map(todo => 
      todo.id === id 
        ? { ...todo, isEditing: !todo.isEditing } 
        : todo 
    );
    setTodos(arrayEdit)
  }

  const editTodoForm = (id:string, task:string):void =>{
    if(task){
      const arrayEdit = todos.map(todo => 
        todo.id === id 
          ? { ...todo,task:task, isEditing: !todo.isEditing } 
          : todo 
      );
      setTodos(arrayEdit)
    }
  }

  const handleCompleted = (id:string):void=>{
    const arrayEdit = todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed } 
        : todo 
    );
    setTodos(arrayEdit)


  }
  return (
    <div className='container'>
      <h1 className='title'>Do The List</h1>
      <TodoForm addTodo={addTodo} />
      <div>
        {todos.map(todo => (
          !todo.isEditing ? ( 
          <Todo key={todo.id}
            id={todo.id}
            task={todo.task} 
            completed ={todo.completed} 
            isEditing={todo.isEditing}
            handleRemove={handleRemove}
            handleEdit = {handleEdit} 
            handleCompleted={handleCompleted}
          />
          ) : (
          <EditTodoForm 
            key={todo.id} id={todo.id} 
            task={todo.task} 
            editTodoForm = {editTodoForm}
          />
          ) 
        ))}
      </div>
    </div>
  );
}

export default Wrapper;
