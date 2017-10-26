import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers/reducer';
import ConCanvas from '../containers/ConCanvas';

const App = () => (
    <Provider store={createStore( reducer, applyMiddleware(thunk))}>
        <div>
            <ConCanvas />
        </div>
    </Provider>
);

export default App;