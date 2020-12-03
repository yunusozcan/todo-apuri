import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../store/store';
import TodoListItem from './TodoListItem';

test('render TodoListItem', () => {
    const todo = {
        id: 3,
        text: 'Add 5 more Todo!',
        completed: true,
        deadline: "2021-11-11"
    };

    const {getByText} = render(
        <Provider store={store}>
            <TodoListItem todo={todo}/>
        </Provider>
    );

    expect(getByText(/Add 5 more Todo!/i)).toBeInTheDocument();
});
