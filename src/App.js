import logo from './logo.svg';
import './App.css';
import Dashboard from './components/screens/Dashboard';
import EditProfile from './components/screens/EditProfile';
import QuizReport from './components/screens/QuizReport';
import CourseScreen from './components/screens/CourseScreen';
import SuggestionForm from './components/screens/SuggestionForm';
import Signup from './components/LoginSignup/Signup';
import Login from './components/LoginSignup/Login';

function App() {
  return (
    <div>
      <p className='brand'>AdaptEd</p>
      {/* <Dashboard/> */}
      {/* <EditProfile/> */}
      {/* <QuizReport/> */}
      {/* <CourseScreen/> */}
      {/* <SuggestionForm/> */}
      <Signup />
      <Login />

      
    </div>
    
  );
}

export default App;
