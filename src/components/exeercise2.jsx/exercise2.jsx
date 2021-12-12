import React from 'react';

function Data(){
    const data= ['hello', 'world'];
    const num1=5;
    const num2=6;
    const string='I love react';

    return (
        <div className='App'>
            <p>{data[0]} {data[1]}</p>
            <p>{num1}+{num2}={num1+num2}</p>
            <p>the string length is {string.length}</p>
        </div>
    )
}
export default Data