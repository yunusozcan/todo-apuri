import {useSelector} from 'react-redux';
import {todos} from '../../store/TodoListSlice';
import TodoListItem from '../todoListItem/TodoListItem'
import './TodoList.css';

function TodoList() {
    const todoArray = useSelector(todos);

    return (
        <ul className="todos">
            {todoArray.map(todo =>
                <TodoListItem key={todo.id} todo={todo}/>
            )}
        </ul>
    );
}

export default TodoList;
