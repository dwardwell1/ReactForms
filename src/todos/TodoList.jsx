import {useState} from "react";
import {v4 as uuid} from "uuid"; 
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";


const TodoList = () => {
    const INITIAL_STATE = [
        {id:uuid(), todo:"Walk The Dog"},
        {id:uuid(), todo:"Take a Bath"}]
    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (newTodo) => { 
        setTodos(todos => [...todos, {...newTodo, id:uuid()}]);
    }
    const removeTodo = (TodoId) => {
        setTodos(todos => todos.filter(t => t.id !== TodoId));
    }
    
    return (    
        <div>
            <h3>My Todo List</h3>
            <NewTodoForm addTodo={addTodo} />
            <div>
                <ul>
                {todos.map(({id,todo}) => (<li> <Todo id={id} todo={todo} removeTodo={removeTodo}/></li>))}
                </ul>
            </div>
        </div>
)}

export default TodoList;
