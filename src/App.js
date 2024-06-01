import './App.css';
import Dashboard from './components/screens/Dashboard';
import EditProfile from './components/screens/EditProfile';
import Quiz from './components/screens/Quiz';
import QuizReport from './components/screens/QuizReport';
import CourseScreen from './components/screens/CourseScreen';
import SuggestionForm from './components/screens/SuggestionForm';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import {BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate} from 'react-router-dom';
import Prelog from './components/screens/Prelog';
import { useAuth } from './contexts/AuthContext';
import { Button } from 'antd';

function App() {
  
  const {userData,logout} =useAuth();

  const handleLogout = async () => {
    await logout();
  };
  const handleGoBack = () => {
    window.history.back();
  };
  const {isAuthenticated}=useAuth();

  return (
    <div>
      <div className='nav'>
        <p className='brand'>AdaptEd</p>
        <div className='back' onClick={handleGoBack}>Go back</div>
        {/* <Button onClick={handleLogout} style={{ width: 155, marginTop: '2%', justifyContent: 'right' }}>
                Logout
        </Button> */}
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<Prelog/>}></Route>
          <Route path='/signup' element={ !isAuthenticated ? <Signup/> : <Navigate to='/login'/>}></Route>
          <Route path='/login' element={ !isAuthenticated ? <Login/> : <Navigate to={`/dashboard/${userData._id}`}/>}></Route>
          <Route path='/editprofile/:id' element={<EditProfile/>}></Route>
          <Route path='/dashboard/:id' element={<Dashboard/>}></Route>
          <Route path='/course/:userId/:courseId' element={<CourseScreen/>}></Route>
          <Route path='/report/:userId/courseId' element={<QuizReport/>}></Route>
          <Route path='/suggestion' element={<SuggestionForm/>}></Route>
          <Route path='/quiz/:userId/courseId' element={<Quiz/>}></Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
