
import './App.css';
import Login from './Login/Login.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup/Signup.jsx'


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
