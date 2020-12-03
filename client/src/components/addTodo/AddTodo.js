import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {add} from '../../store/TodoListSlice';
import arrow from '../../add.svg';
import './AddTodo.css';

function AddTodo() {
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = e => {
        const text = e.target.value.trim();
        if (e.which === 13 && text) {
            dispatch(add(text));
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
