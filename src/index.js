
import React from 'react';
import ReactDOM from 'react-dom';
// import Data from './components/exeercise2/exercise2';
import Apple from './components/exercise3/exercise3.jsx';
import Box4 from './components/exercise3/exercise33.jsx';
import Box3 from './components/exercise3/exercise333.jsx';
import Container from './components/exercise4/exercise4.jsx';
import Input from './components/exercise4/input.jsx';


//component
const App= ()=>{
    return ( 
    <div>
     <Container />
  
     

      
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
