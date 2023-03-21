import React from 'react';

const CountBtn = ({handleCount}) => {
    console.log('3-countbtn')

    return (
        <div>

            <button onClick={handleCount}>increment count</button>
            
        </div>
    );
} 

export default React.memo(CountBtn);
