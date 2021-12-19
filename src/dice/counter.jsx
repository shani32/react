import React from "react";

export default class Counter extends React.Component{
    render(){
        const {playerNumber, isTemp}=this.props;
        const counterClass= isTemp? `temp-counter-${playerNumber}`: `counter: ${playerNumber}`
        const counterText= isTemp? `temp score`: `total score`
        return(
            <div className={counterClass}>

                <p>
                    {counterText}{this.props.score}
                </p>

            </div>
        )
    }
}