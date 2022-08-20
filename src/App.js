import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Components/Home';
import Recipes from './Components/Recipes';
import About from './Components/About'
import Hunting from './Components/Hunting';
import Fishing from './Components/Fishing';
import logo from './Components/images/w2w_logo.png'
// import { Nav, NavItem, NavLink } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <nav className='main_nav'>
        <Link to='/'><img classname='logo' src={logo} alt='W2W logo' /></Link>
        <Link to='/fishing'> Fishing </Link>
        <Link to='/hunting'> Hunting </Link>
        <Link to='/recipes'> Recipes </Link>
        <Link to='/about'> About </Link>
      </nav>
      {/* <div>
        <Nav horizontal='end' pills tabs className='nav'>
          <NavItem active>
            <Link to='/'><img classname='logo' src={logo} alt='W2W logo' /></Link>
          </NavItem>
          <NavItem active>
            <NavLink href='/fishing'> Fishing </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/hunting'> Hunting </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/recipes'> Recipes </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/about'> About </NavLink>
          </NavItem>
        </Nav>
      </div> */}

      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/fishing' element={<Fishing />}></Route>
          <Route path='/hunting' element={<Hunting />}></Route>
          <Route path='/recipes' element={<Recipes />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </div >
  );
}

export default App;