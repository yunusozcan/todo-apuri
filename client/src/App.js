import React from 'react';
import Header from './components/header/Header';
import AddTodo from './components/addTodo/AddTodo';
import TodoList from './components/todoList/TodoList';
import './App.css';

function App() {
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
