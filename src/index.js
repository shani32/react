
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/13/main';
// import RandomUser from './components/api/api.jsx';
// import Data from './components/exeercise2/exercise2';
// import Apple from './components/exercise3/exercise3.jsx';
// import Box4 from './components/exercise3/exercise33.jsx';
// import Box3 from './components/exercise3/exercise333.jsx';
// import Container from './components/exercise4/exercise4.jsx';
// import Input from './components/exercise4/input.jsx';
// import Buttons from './components/4.1/4.1.jsx';
// import Card from './components/4.2/4.2.jsx';
// import Card2 from './components/4.3/4.3.jsx';
// import ApprovalCard from './components/4.3/AprovalCard.jsx';
// import Counter from './components/7.1/counter.jsx';
// import ShowBox from './components/7.2/7.2.jsx';
// import Colors2 from './components/7.33/7.33.jsx';
// import BoxColor from './components/7.2/7.2.jsx';
// import LifeCycle from './components/8.1/8.1.jsx';
// import LifeBoxes from './components/8.2/8.2.jsx';
// import ChangeColor from './components/8.3/8.3.jsx';
// import Box5 from './components/8.333/8.333.jsx';
// import InputChange from './components/practice/practice.jsx';

// import Check from './components/practice/check.jsx';
// import ValidForms from './components/practice/formValidate.jsx';
// import Game from './dice/game';
// import RandomUser from './components/api/api.jsx';
// import RandomJoke from './components/12/12.1';
// import ListRender from './components/13/data';
// import ReactRandomJoke from './components/practice/joke';
// import InputFocus from './components/14.1/14.1';
import Clipboard from './components/14.2/14.2';

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
    {/* <Colors2 /> */}
    {/* <BoxColor /> */}
    {/* <LifeCycle /> */}
    {/* <LifeBoxes /> */}
    {/* <ChangeColor /> */}
    {/* <Box5 /> */}
    {/* <InputChange/> */}
    {/* <Check /> */}
    {/* <ValidForms /> */}
    {/* <Game/> */}
    {/* <RandomUser /> */}
    {/* <RandomJoke /> */}
    {/* <ListRender /> */}
    {/* <Main /> */}
    {/* <ReactRandomJoke /> */}
    {/* <InputFocus /> */}
    <Clipboard />
   
    
      
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
