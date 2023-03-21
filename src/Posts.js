import React ,{useEffect} from 'react';

const Posts = ({item,i}) => {

    useEffect(()=>{
        console.log('Post created')


        return ()=>{
            console.log("component exit")
        }
    },[])
    return (
       
      <div>
        <div>
          <div>Name: {item.name}</div>
          <div>Body: {item.body}</div>
          <hr />
        </div>
    </div>
    );
}

export default Posts;
