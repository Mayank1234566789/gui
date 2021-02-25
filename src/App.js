import {  BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Products from './pages/Products'
import Reports from './pages/Reports'
import Table from './components/Table';
import { DummyData } from './components/DummyData';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/reports' component={Products}/>
      <Route path='/products' component={Reports}/>
    </Switch>
    </Router>
    <Table data={DummyData.map(function name(name) {
      return name;
      
    })}>
     

    </Table>
    </>
  );
}

export default App;
