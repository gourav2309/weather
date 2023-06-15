import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Cities from './components/cities';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route exact path='/cities' element={<Cities/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
