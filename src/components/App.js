import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';

const App = () => (
    <Provider store={createStore( reducer, applyMiddleware(thunk))}>
        <div>
        </div>
    </Provider>
);

export default App;