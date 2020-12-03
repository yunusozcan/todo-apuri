import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from './store/store';
import App from './App';

test('render todo app', () => {
    const {getByText} = render(
        <Provider store={store}>
            <App/>
        </Provider>
    );

    expect(getByText(/tõdõs/i)).toBeInTheDocument();
});
