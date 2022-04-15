import {useDispatch, useSelector} from "react-redux";
import {increment,decrement,incrementByAmount} from "./counterSlice";

function Counter() {

const count=useSelector((state)=>(state.counter.count));
const color=useSelector((state => state.theam.color))
const dispatch=useDispatch();
    console.log("log",count)
    return(
        <div>
            <button onClick={()=>{dispatch(increment())}}>++</button>
            <span style={{color}}> COUNTER:  {count}   </span>
            <button onClick={()=>{dispatch(decrement())}}>--</button>

            <button onClick={()=>{dispatch(incrementByAmount(10))}}>***</button>

        </div>
    )
}
export default Counter