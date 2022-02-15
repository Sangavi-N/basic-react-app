import React,{ Component } from 'react'

class Life extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:5
        };
        console.log("constructor of mounting")
    }

    static getDerivedStateFromProps(props,state){
        console.log("static of mounting")
        return null
    }
    componentDidMount(){
        console.log("component did unmount of mounting")
    }
    shouldComponentUpdate(){
        console.log("should component update")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("snapshot of update")
        return null
    }
    componentDidUpdate(){
        console.log("component update")
    }
    changeState=()=>{
        this.setState({ count: this.state.count + 1 })
    }


    render(){
        console.log("render of mounting")
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.changeState}>Click me</button>
            </div>
        )
    }
}

export default Life