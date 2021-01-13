import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import './App.css';
import ContactUS from './ContactUs/ContactUs';
import Homepage from './Homepage/Homepage';

function App() {
  return (
    <div className = "App">
    <div className="navbar">
      <NavLink exact to = "/">Home</NavLink>
      <NavLink to = "/aboutus">About Us</NavLink>
      <NavLink to = "/contactus">Contact Us</NavLink>
    </div>

    <Switch>
      <Route exact path = "/" component={Homepage}/>
      <Route path = "/aboutus" component={AboutUs}/>
      <Route path = "/contactus" component={ContactUS}/>
      <Route path = "/default" render = {() => (<Redirect to = "/"/>)} />
    </Switch>
    </div>
  );
}

export default App;
