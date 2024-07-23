// import React, { Component } from 'react'

// export class Count extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             count : 0
//         }
//     }
//     // increment(){
//     //     this.setState({
//     //         count: this.state.count+1
//     //     }, ()=> console.log('callback value', this.state.count))
//     //     console.log(this.state.count)  //Asynchronous function (excuted first before increment)
//     // }

//     //count by 5
//     increment(){
//         this.setState(prevState=>({
//             count: prevState.count+1
//         }),()=>console.log('callback value', this.state.count))
//         console.log(this.state.count)  //Asynchronous function (excuted first before increment)
//     }
//     incrementFive(){
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()

//     }
//     render() {
//     return (
//         <div>
//             <div>Count - {this.state.count}</div> 
//             {/* <button onClick = {()=>this.increment()}>Increment</button> */}
//             <button onClick = {()=>this.incrementFive()}>Increment</button>

//         </div>
//     )
//     }
// }

// export default Count