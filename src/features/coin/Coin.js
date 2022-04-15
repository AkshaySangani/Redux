import { useSelector} from "react-redux";

function Coin() {
    const count=useSelector((state)=>(state.counter.count));
    const color=useSelector((state => (state.theam.color)))
    return(
        <div>
            <span style={{color:color}}>  COIN: {count}   </span>
        </div>
    )
}

export default Coin;