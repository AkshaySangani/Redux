import './App.css'
import{useDispatch,useSelector} from "react-redux";
import {getUserFatch} from "./Redux/Action/action";

function App() {
  const dispatch=useDispatch();
  const users=useSelector(state => state.myFirstReducer.users);
  return (
    <div className="App">
      <button onClick={()=>dispatch(getUserFatch())}>Get User</button>
      <div>Users:{users.map((user=>(<div>{user.address.street}</div>)))}</div>
    </div>
  );
}

export default App;
