import { useState } from "react";


const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {
        todo: ""
        }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(name, value);
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))};
    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">New Todo</label>
            <input type="text" 
            id="todo"
            name="todo" 
            placeholder="New Todo?"
            value={formData.todo}
            onChange={handleChange} />
           
            <input type="submit" value="Add Todo" />
            
        </form>
        
    )}

export default NewTodoForm;
