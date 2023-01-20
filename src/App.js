
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CoursePage from './pages/CoursePage/CoursePage';
import Home from './pages/Home/Home';
import TeachersPage from './pages/TeachersPage/TeachersPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/course/:id' element={<CoursePage />}/>
        <Route path='/teachers/:id' element={<TeachersPage />}/>
      </Routes>
    </div>
  );
}

export default App;
