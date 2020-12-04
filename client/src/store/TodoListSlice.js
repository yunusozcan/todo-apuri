import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { apiClient } from '../helpers/client';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await apiClient.get('/todos');
    return response.data;
})

export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async (todo) => {
        await apiClient.post('/todos/create', todo);
        return todo;
    }
)

export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async (todo) => {
        await apiClient.put('/todos/update', todo);
        return todo;
    }
)

export const removeTodo = createAsyncThunk(
    'todos/removeTodo',
    async (todo) => {
        await apiClient.delete('/todos/remove', {data: todo});
        return todo;
    }
)

export const slice = createSlice({
    name: 'TodoList',
    initialState: {
        todos: [],
        lastRemoved: null,
    },
    reducers: {
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
    extraReducers: {
        [fetchTodos.fulfilled]: (state, action) => {
            state.todos = action.payload;
        },
        [addTodo.fulfilled]: (state, action) => {
            console.log(action);
            state.todos = [
                ...state.todos,
                action.payload
            ]
        },
        [updateTodo.fulfilled]: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload.id ?
                    action.payload :
                    todo
            )
        },
        [removeTodo.fulfilled]: (state, action) => {
            state.lastRemoved = state.todos.filter(todo =>
                todo.id === action.payload.id
            )
            state.todos = state.todos.filter(todo =>
                todo.id !== action.payload.id
            )
        }
    }
});

export const { addLastRemoved, setLastRemoved } = slice.actions;

export const todos = state => state.todo.todos;
export const lastRemoved = state => state.todo.lastRemoved;

export default slice.reducer;
