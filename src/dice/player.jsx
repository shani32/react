import React from "react";
import Counter from "./counter";

const Player=(props)=>{
const {playernumber,tempScorePlayer, totalScore }=props
  
        return(
            <div className={`player ${playernumber}`}>
                <h4>player- {playernumber}</h4>
                <Counter playernumber={playernumber} isTemp={false} score={totalScore}/>
                <Counter playernumber={playernumber} isTemp={true} score={tempScorePlayer}/>
                

            </div>
        )
    
}
export default Player