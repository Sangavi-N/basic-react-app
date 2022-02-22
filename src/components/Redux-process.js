import React,{ PureComponent } from 'react'
import {connect} from 'react-redux';
import {increment, decrement} from '../Actions/Action';
import { useDispatch,useSelector } from 'react-redux';
// class Reduxprocess extends PureComponent{
//     render(){
//         return(
//             <div>
//                 <button onClick={props.incrementInBtn}>+</button>
//                 <h3>{props.count}</h3>
//                 <button onClick={props.decrementInBtn}>-</button>
//             </div>
//         )
//     }
// }
const Reduxprocess = (props) => {
    // render(){
        const dispatch=useDispatch()
        const countProps=useSelector(state=>({count:state.count}))
        console.log("this is count props",countProps)
        return(
            <div>
                {/* <button onClick={props.incrementInBtn}>+</button> */}
                {/* <h3>{props.count}</h3> */}
                {/* <button onClick={props.decrementInBtn}>-</button> */}
                <button onClick={()=>dispatch(increment())}>INCREMENT</button>
                <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
            </div>
        )
    // }
}
const mapStateToProps = (state) => {
    return {
      count: state.count
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      incrementInBtn: () => {
        dispatch(increment());
      },
      decrementInBtn: () => {
        dispatch(decrement());
      }
    };
  };

//export default connect(mapStateToProps, mapDispatchToProps)(Reduxprocess);

     export default Reduxprocess