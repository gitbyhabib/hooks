import React from 'react';

const Count = ({count}) => {
    console.log('2-count')

    return (
        <div>

            <h3>Count is :{count}</h3>
            
        </div>
    );
}

export default React.memo(Count);
