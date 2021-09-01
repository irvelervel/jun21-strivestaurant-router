import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import MyNavbar from './components/MyNavbar'
import Home from './components/Home'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Reservations from './components/Reservations'

// the first react component that gets its way into the DOM

// our goal with react-router-dom is DIVIDING our components on different routes
const App = () => {
  return (
    <div>
      <Router>
        {/* Router is just a wrapper, allows you to use Route into it */}
        {/* a prop is a dynamic piece of information that is passed with the component's usage */}
        <MyNavbar title="Strivestaurant" color="dark" />
        {/* <MyNavbar title="Magda" color="light" /> */}
        {/* <MyNavbar /> */}
        {/* I want the <Home /> component to load just on '/' */}
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" exact render={(routerProps) => <Home {...routerProps} name="Stefano" />} />
        {/* spreading over routerProps will give the Home component history, location and match as well */}
        {/* Route is a HOC -> High Order Component -> A component wrapping another component */}
        <Route path="/reservations" exact component={Reservations} />
        {/* Reservations is getting history, location and match thank for being inside of a Route */}
        {/* I want the <Reservations /> component to load on '/reservations' */}
      </Router>
    </div>
  )
}

export default App

// export const name = 'Stefano'

// import App from './App'
// import { name } from './App'
