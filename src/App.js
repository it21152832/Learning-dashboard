import { Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './components/Login_Register/Login';
import Register from './components/Login_Register/Register';
// import MainContent from './components/MainContent';
// import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
// import Course from './components/Course';
// import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<MainContent />} />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* <Route path='/course' element={<Course/>}/> */}

        {/* <Route path='/sidebar' element={<Sidebar/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
