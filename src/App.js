
import './App.css';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log('the user is ',authUser)
      if(authUser){
        // the user just logged in /the user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        // the user is logged out 
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
   <Router>
      <div className="App">
        <Switch>
          <Route path="/login"> 
              <Login/>
          </Route>
          <Route path="/checkout"> 
          <Header/>
              <Checkout/>
          </Route>
          <Route path="/"> 
          <Header/>
            <Home/>
          </Route>
        </Switch>
      
    </div>
   </Router>
  );
}

export default App;
