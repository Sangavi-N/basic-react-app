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
        console.log("getDerivedStateFromProps",props,state)
        return null
    }
    componentDidMount(){
        console.log("component did  of mounting")
    }
    shouldComponentUpdate(){
        console.log("should component update")
        return false
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("snapshot of update",prevProps,prevState)
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
            <div className='App'>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.changeState}>Click me</button>
            </div>
        )
    }
}

export default Life