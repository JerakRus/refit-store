import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers'
import AppContainer from './containers/App';

import 'semantic-ui-css/semantic.min.css';



const devtoolMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
   /* compose(

        devtoolMiddleware,
    ),*/
);

ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById('root')
);