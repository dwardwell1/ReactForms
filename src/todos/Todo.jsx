const Todo = ({id,todo, removeTodo}) => {
    const _removeTodo = () => { 
        removeTodo(id);
      };
      
    return ( <div>
        <h4> {todo}  <button onClick={_removeTodo}> x </button></h4>
        </div> )
    }

    export default Todo;