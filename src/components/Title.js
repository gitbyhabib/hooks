import React from 'react';

const Title = () => {
    console.log('1-title')
    return (
        <div>
            <h1>My App</h1>
        </div>
    );
}

export default React.memo(Title);
 