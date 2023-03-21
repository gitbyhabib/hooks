import React,{useState,useCallback} from 'react';
import Title from './components/Title';
import Count from './components/Count';
import Age from './components/Age';
import AgeBtn from './components/AgeBtn';
import CountBtn from './components/CountBtn';

const  App =()=> {
  const [count,setCount] =useState(0);
  const [age,setAge] =useState(10);

  /* let [count, setCount] =useState(initialcount) */
  
const incrementCount = useCallback(()=>{
  setCount(prevcount=>prevcount+1)
},[])
const incrementAge=useCallback(()=>{

  setAge(prevage=>prevage+1)
},[])
  return (
    <div >
      <Title/>
      <Count count={count}/>
      <CountBtn handleCount={incrementCount}/>
      <Age age={age}/>
      <AgeBtn handleAge={incrementAge}/>
    </div>
  );
}

export default App;
