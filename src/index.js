
import React from 'react';
import ReactDOM from 'react-dom';
// import Data from './components/exeercise2/exercise2';
import Apple from './components/exercise3/exercise3.jsx';


//component
const App= ()=>{
    return ( 
    <div>
      
       <Apple />
    </div>
    )
};
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
if (module.hot) {
    module.hot.accept();
}
