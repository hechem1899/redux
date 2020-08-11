import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

import {CountUp ,InCount,CountDown} from './actions/action';

function App(props) {
 
  return (<div>
      <button onClick={props.increment} >+</button>
      <input type="text" value={props.count}placeholder="0" onChange={(e)=>props.setCount(e.target.value)} />
      <button onClick={props.decrement}>-</button>
    </div>
  );
}
const mapDispatchToProps=(dispatch)=>{
  return{
    setCount:(a)=>dispatch(()=>InCount(a)),
    increment:()=>dispatch(CountUp()),
    decrement:()=>dispatch(CountDown()),
  }
  
}
const mapStateToProps =(state)=> {
  return {
    count:state.count,
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
