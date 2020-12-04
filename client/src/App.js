import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/header/Header';
import AddTodo from './components/addTodo/AddTodo';
import TodoList from './components/todoList/TodoList';
import { fetchTodos } from './store/TodoListSlice'

import './App.css';

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <div className="app">
            <Header/>
            <div className="content-container">
                <AddTodo/>
                <TodoList/>
            </div>
        </div>
    );
}

export default App;
