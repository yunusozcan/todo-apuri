import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'TodoList',
    initialState: {
        todos: [
            {
                id: 0,
                text: 'Add 5 more Todo!',
                completed: false,
                deadline: null
            },
            {
                id: 1,
                text: 'Add 5 more Todo!',
                completed: false,
                deadline: "2020-11-11"
            },
            {
                id: 2,
                text: 'Add 5 more Todo!',
                completed: false,
                deadline: "2021-11-11"
            },
            {
                id: 3,
                text: 'Add 5 more Todo!',
                completed: true,
                deadline: "2021-11-11"
            },
        ],
        lastRemoved: null,
    },
    reducers: {
        add: (state, action) => {
            state.todos = [
                ...state.todos,
                {
                    id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    text: action.payload,
                    completed: false,
                    deadline: null
                }
            ]
        },
        remove: (state, action) => {
            state.lastRemoved = state.todos.filter(todo =>
                todo.id === action.payload
            )
            state.todos = state.todos.filter(todo =>
                todo.id !== action.payload
            )
        },
        done: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload ?
                    {...todo, completed: true} :
                    todo
            )
        },
        undone: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload ?
                    {...todo, completed: false} :
                    todo
            )
        },
        addDeadline: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload.id ?
                    {...todo, deadline: action.payload.deadline} :
                    todo
            )
        },
        addLastRemoved: (state, action) => {
            state.todos = [
                ...state.todos,
                {
                    id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    text: action.payload.text,
                    completed: action.payload.completed,
                    deadline: action.payload.deadline
                }
            ]
        },
        setLastRemoved: (state, action) => {
            state.lastRemoved = action.payload;
        },
    },
});

export const {add, remove, done, undone, addDeadline, addLastRemoved, setLastRemoved} = slice.actions;

export const todos = state => state.todo.todos;
export const lastRemoved = state => state.todo.lastRemoved;

export default slice.reducer;
