
import React from 'react';
import ReactDOM from 'react-dom';
// import Data from './components/exeercise2/exercise2';
import Apple from './components/exercise3/exercise3.jsx';
import Box4 from './components/exercise3/exercise33.jsx';
import Box3 from './components/exercise3/exercise333.jsx';
import Container from './components/exercise4/exercise4.jsx';
import Input from './components/exercise4/input.jsx';
import Buttons from './components/4.1/4.1.jsx';
import Card from './components/4.2/4.2.jsx';
import Card2 from './components/4.3/4.3.jsx';
import ApprovalCard from './components/4.3/AprovalCard.jsx';
import Counter from './components/7.1/counter.jsx';
import ShowBox from './components/7.2/7.2.jsx';
import Colors2 from './components/7.33/7.33.jsx';

//component
const App= ()=>{
    return ( 
    <div>
     {/* <Container /> */}
     {/* <Buttons button="important"/>
     <Buttons button="not-important" /> */}
     {/* <ApprovalCard>
     <Card2 title="music" description="new song" link="no one" href="http://youtube.com" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQpNyAkvB7yWU-_rDRwn2sNyaZURoZDqXzS390t1ZDRrVXNRs2O"/>
     <Card2 title="cinema" description="new movie" link="ocean11" href="http://netflix.com" src="https://i.ytimg.com/vi/MJuFdpVCcsY/movieposter_en.jpg"/>
     <Card2  title="sport" description="new player" link="one" href="http://one.com" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQpNyAkvB7yWU-_rDRwn2sNyaZURoZDqXzS390t1ZDRrVXNRs2O"/>
    </ApprovalCard> */}
    {/* <Counter /> */}
    <Colors2 />
      
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
