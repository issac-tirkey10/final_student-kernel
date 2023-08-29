import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "./components/Header.css"
import Login from "./components/auth/Login";
import Lk from "./components/Lk";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Profile from "./components/Profile"
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Feed from "./components/Feed";
import { LeakRemoveOutlined } from "@material-ui/icons";
function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);
 
  return(
    <Router>
    <Switch>
    <Route path="/" exact component ={Feed}>
    <div className="App">{user ? <Lk/> : <Login />}</div>
    </Route>
    <Route path="/Profile" component={Profile}/>
    </Switch>

</Router> 
     
)

}

export default App;
