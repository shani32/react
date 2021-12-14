import React from "react";
import './style.css'

class Box5 extends React.Component {
    state = { color: '', counter: 0 ,radius:''}
    colors=['red','blue','green','yellow','black']

    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: 'red', counter: this.state.counter });
        }, 500);
    }
    componentDidUpdate() {

        if (this.state.counter < 5) {
            setTimeout(() => {
            this.setState({ color: this.colors[this.state.counter], counter: this.state.counter + 1 });
            }, 500);
        }
        else {
            this.setState({radius:'50%',counter:0});
        }

    }
    //  componentWillUnmount(){
    //     this.setState({style:'box',change:false});
    //  }

    render() {
        return (
            <div>
                <div className='box' style={{ backgroundColor: this.state.color,borderRadius:this.state.radius }}>
                </div>
            </div>
        );
    }
}
export default Box5