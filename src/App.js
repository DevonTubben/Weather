import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home' 
import NavBar from './NavBar'

function App() {
  return (
    <Router> 
    <div className="App">
      <NavBar />
      <Switch> 
        <Route exact path='/' component={Home}/>
      </Switch>

      <Home />
    </div>
    </Router>
  );
}

export default App;
