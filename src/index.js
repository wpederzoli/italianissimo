import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './Reducers'
import ReduxThunk from 'redux-thunk'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
