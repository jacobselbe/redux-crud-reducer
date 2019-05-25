import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import {Provider} from 'react-redux';
import Board from './components/board';
import store from './store'; 

ReactDOM.render(
    <Provider store={store}>
        <Board />
    </Provider>,
    document.getElementById('root')
);