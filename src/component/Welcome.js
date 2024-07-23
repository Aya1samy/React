// /* eslint-disable no-unused-vars */
// import React,{Component} from "react";
// class Welcome extends Component{
//     render(){
//         return <h1>Class Component</h1>
//     }
// }
// export default Welcome

//9-props

/* eslint-disable no-unused-vars */
// import React,{Component} from "react";
// class Welcome extends Component{
//     render(){
//         return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
//     }
// }
// export default Welcome


//12-Destructing props and state

import React,{Component} from "react";
class Welcome extends Component{
    
    render(){
        const {name,heroName} = this.props
        return <h1>Welcome {name} a.k.a {heroName}</h1>

        // const {state1,state2} = this.state
        // return <h1>Welcome {state1} a.k.a {state2}</h1>
    }
}
export default Welcome
