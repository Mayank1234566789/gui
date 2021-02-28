import {  BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Products from './pages/Products'
import Reports from './pages/Reports'
import Table from './components/Table';
import { DummyData } from './components/DummyData';
import MaterialTable from 'material-table'



/*Old datatables.net jquery table<Table data={DummyData.map(function name(name) {
      return name;
      
    })}>
     

    </Table>*/


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
   
    <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={ [
            { title: "Name",field:"name" },
            { title: "Position",field: 'position' },
            { title: "Office",field: 'office' },
            { title: "Extn.",field: 'extn' },
            { title: "Start date",field: 'startDate' },
            { title: "Salary",field: 'salary' }
        ]}
          data={DummyData.map(function name(name) {
            return name;
            
          })}
          title="Product Entries"
        />
      </div>


    </>
  );
}

export default App;
