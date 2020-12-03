import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './TodoListSlice';

export default configureStore({
    reducer: {
        todo: todoReducer
    },
});
