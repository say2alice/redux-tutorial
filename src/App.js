import React from 'react';
import './App.css';
import connect from "react-redux/es/connect/connect";
import {updateUser} from "./redux/reducers/actions";

function App(props) {

  console.log("props : ", props);
  return (
    <div className="App">
      <p> user: {props.user}</p>
      <button onClick={() => props.updateUser('Jane')} title="Change Name"/>
    </div>
  );
}
// store에 props에 연결 subscribe
const mapStateToProps = (state) => ({
  products: state.products,
  user: state.user
})

// publish
// props : function
const mapActionToProps = (dispatch) => ({
  updateUser: (name) => dispatch(updateUser(name))
})

// 커링펑션, HoC 
// 컴포지션 기법
export default connect(mapStateToProps, mapActionToProps)(App);
// export default App;
