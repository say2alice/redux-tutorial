import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Provider from "react-redux/es/components/Provider";
import {store} from "./redux/reducers/store";

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

ReactDOM.render(
	<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
