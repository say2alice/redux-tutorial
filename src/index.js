import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import Provider from "react-redux/es/components/Provider";


// 결과는 state에 저장
// const reducer = (state, action) => {
// 	console.log('state ', state);
// 	console.log('action ', action);
//
// 	if(action.type === 'changeState') {
// 		return action.payLoad;
// 	}
//
// 	return 'State 1';
// }

const productReducer = (state = [], action) => {
	return state;
}

const userReducer = (state = '', action) => {
	switch (action.type) {
		case 'updateUser':
			return action.payLoad
		default :
			return state
	}
	// return state;
}

const allReducer = combineReducers(	{
			productReducer,
		  userReducer
	});

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const store = createStore(reducer);

console.log(store)

const action = {
	type: 'updateUser',
	payLoad: {
		user: 'Tom'
	}
}

store.dispatch(action);

console.log(store.getState())


ReactDOM.render(
	<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
