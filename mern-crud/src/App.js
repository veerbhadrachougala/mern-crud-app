
import './App.css';
import AddNav from './components/AddNav';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Home from './components/Home';
import{BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AddNav />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AllUser' element={<AllUser/>} />
        <Route path='/AddUser' element={<AddUser/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
