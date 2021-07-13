import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home' 
import NavBar from './Components/NavBar'
import Weather from './Containers/Weather'

function App() {
  return (
    <Router> 
    <div className="App">
      <NavBar />
      <Switch> 
        <Route exact path='/' component={Home}/>
        <Route exact path='/Weather' component={Weather}/>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
