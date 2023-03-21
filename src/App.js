import React, {useState,useEffect} from 'react';

import Posts from './Posts';

const  App =({initialcount})=> {

  /* let [count, setCount] =useState(initialcount) */


  const [state,setState] = useState({
    count:initialcount,
    user:"Frea"
  })



  const addonepost=()=>{
    let newpost ={
      name: 'habibuiiii 3',
      body:' lorem lipsummajghsdfh kagsudfhaghsfd asdfg'
    }
    setposts([...posts,
    newpost])
  }

  let [posts,setposts] = useState([
    {
      name: 'habibuiiii',
      body:' lorem lipsummajghsdfh kagsudfhaghsfd asdfg'
    },
    {
      
      name: 'habibuiiii 2',
      body:' lorem lipsummajghsdfh kagsudfhaghsfd asdfg'

    }
  ])



  const removePosts=()=>{
    setposts([])
  }


  useEffect(()=>{
    console.log('Change on state')
  },[state])


    useEffect(()=>{
    console.log('Change on post')
  },[posts])



  useEffect(()=>{
console.log('mounted')
  },[])
  
  return (
    <div >
      <header >
  <h4>Count: {state.count}</h4>
  <h4>Count: {state.user}</h4>

  <button onClick={()=>setState({ ...state,count:state.count+1})} >Add one +1</button>
  <button onClick={()=>setState({ ...state,count:state.count-1})} >sub one -1</button>
  <button onClick={removePosts} >Remove Posts</button>
      
      <hr />


      <div>
        {posts.map((item,i)=>(
          <Posts item={item} key={i}/>
        ))}
      </div>


      <button onClick={addonepost}>Add One More</button>

      </header>
    </div>
  );
}

export default App;
