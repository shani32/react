import React from "react";

class ApprovalCard extends React.Component{
    render(){
        return (
        <div className="ui">
        {this.props.children}

    </div>
    )
    }
}
export default ApprovalCard