import React from "react";
import Player from "./player";
import Dice from "./dice";


export default class Game extends React.Component{

    state= {
tempScore1:0,
tempScore2:0,
totalScore1:0,
totalScore2:0,
playerTurn:1,
playerwinner:0,
pointsToWin:100,
input:0,
display:'none'  
    };

    scoreChange=(sum)=>{
        if(this.state.playerTurn===1){
            if(sum===0){
                this.setState(
                    {tempScore1:0,},
                    this.holdScore
                );
            }else{
                this.setState(
                    {tempScore1:this.state.tempScore1+sum},
                )
            }
        }
        if(this.state.playerTurn===2){
            if(sum===0){
                this.setState(
                    {tempScore2:0,},
                    this.holdScore
                );
            }else{
                this.setState(
                    {tempScore2:this.state.tempScore2+sum},
                )
            }
        };

    };

    holdScore=()=>{
        if(this.state.playerTurn===1){
            this.setState(
                {
                    totalScore1:
                    this.state.totalScore1 + this.state.tempScore1,
                    playerTurn:2,
                    tempScore1:0
                },
                this.winner
             
            )
        }
        if(this.state.playerTurn===2){
            this.setState(
                {
                    totalScore2:
                    this.state.totalScore2+this.state.tempScore2,
                    playerTurn:1,
                    tempScore2:0
                },
                this.winner
             
            )
        }
    }

    onChangeValue=(event)=>{
        if(+event.target.value){
            this.setState({
                pointsToWin:event.target.value,
            })
        }
    }
    winner=()=>{
        if(this.state.totalScore1>= this.state.pointsToWin){
            this.setState((prevState)=>{
                return{
                    display:"flex",
                    playerwinner: prevState.playerwinner+1

                }
            })
        }
        if(this.state.totalScore2>= this.state.pointsToWin){
            this.setState((prevState)=>{
                return{
                    display:"flex",
                    playerwinner: prevState.playerwinner+2

                }
            })
        }
    }
    Clear = () => {
        this.setState({
          tempScore1: 0,
          tempScore2: 0,
          totalScore1: 0,
          totalScore2: 0,
          playerTurn: 1,
          display: "none",
          playerwinner: 0,
          

        });
      };
    render(){
        const {
            tempScore1,
            tempScore2,
            totalScore1,
            totalScore2,
            playerTurn,
            playerwinner,
            pointsToWin,
            input,
            display,
        }=this.state; 
        return(
            <div>
                <div className="playerContainer">
                    <div className="player1">
                        <Player
                        playernumber={1}
                        tempScorePlayer={tempScore1}
                        totalScore={totalScore1}
                        
                        />
                    </div> 
                    <div className="player2">
                        <Player
                        playernumber={2}
                        tempScorePlayer={tempScore2}
                        totalScore={totalScore2}
                        
                        />
                    </div> 
                </div>
                <Dice onChange={this.scoreChange}/>
                <div className="inputContainer">
                <button onClick={this.holdScore} className="hold" type="button" >hold</button>
                <input
                className="input"
                 type="text"
                 minLength="1"
                 maxLength="3"
                 value={input}
                 style={{width:"10rem"}}
                 onChange={(event)=>this.onChangeValue(event)}
                 />
                 </div>
                 <div className="winner" style={{ display: display }}>
          <p>
            PLAYER <span style={{ color: "#DA0037" }}>{playerwinner}</span>{" "}
            WINS!
          </p>
          <button className="WinnerBtn btn" onClick={() => this.Clear()}>
            Want To Play Again?
          </button>
        
        </div>
            </div>
        )

    }
}