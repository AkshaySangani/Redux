import {useState} from "react";
import {useDispatch} from "react-redux";
import {changeColor} from "./theamSlice";

const Theam=()=>{
const [color,setColor]=useState('');
const dispatch=useDispatch();
    return(
        <div>
            <input type='text' onChange={(event => setColor(event.target.value))}/>
            <button onClick={()=>{dispatch(changeColor(color))}}>color</button>
            <h1>{color}</h1>
        </div>
    )
}

export default Theam