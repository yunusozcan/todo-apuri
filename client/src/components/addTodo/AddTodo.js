import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, todos} from '../../store/TodoListSlice';
import arrow from '../../add.svg';
import './AddTodo.css';

function AddTodo() {
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();

    const todoArray = useSelector(todos);

    const handleSubmit = e => {
        const text = e.target.value.trim();
        if (e.which === 13 && text) {
            dispatch(addTodo({
                id: todoArray.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                text: text,
                completed: false,
                deadline: null
            }));
            setInputValue("");
        }
    }

    const handleChange = e => {
        setInputValue(e.target.value);
    }

    return (
        <div className="add-todo-container">
            <img src={arrow} className="add" alt="add"/>
            <input className="input"
                   type="text"
                   placeholder="What you think needs to be done?"
                   autoFocus={true}
                   onKeyDown={handleSubmit}
                   onChange={handleChange}
                   value={inputValue}
            />
        </div>
    );
}

export default AddTodo;
