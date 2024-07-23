import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello'
        }
    }
        //third method of binding :use bind in constructor (the best method)
        // this.clickHandler = this.clickHandler.bind(this)
    
    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    // }
    //fourth method: use arrow function in class property
    clickHandler = () =>{
        this.setState({
            message: 'Goodbye'
        })
    }
    

    // first method : use bind in render
    // render() {
    // return (
    //     <div>
    //         <div>{this.state.message}</div>
    //         <button onClick={this.clickHandler.bind(this)}>Click</button>
    //     </div>
    // )
    //second method use arroe function in render
    // render() {
    //     return (
    //         <div>
    //             <div>{this.state.message}</div>
    //             <button onClick={() =>this.clickHandler()}>Click</button>
    //         </div>
    //     )
    // }
    //Third method
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind