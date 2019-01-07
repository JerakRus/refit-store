import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { createStore } from 'redux';
import rootReducer from './reducers'
import AppContainer from './containers/App';
import './index.css';




const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById('root')
);

