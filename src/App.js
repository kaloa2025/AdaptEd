import logo from './logo.svg';
import './App.css';
import Dashboard from './components/screens/Dashboard';
import EditProfile from './components/screens/EditProfile';
import QuizReport from './components/screens/QuizReport';
import CourseScreen from './components/screens/CourseScreen';
import SuggestionForm from './components/screens/SuggestionForm';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';

function App() {
  return (
    <div>
      <p className='brand'>AdaptEd</p>
      {/* <Dashboard/> */}
      {/* <EditProfile/> */}
      {/* <QuizReport/> */}
      {/* <CourseScreen/> */}
      <SuggestionForm/>
      {/* <Login/> */}
      {/* <Signup/> */}
    </div>
    
  );
}

export default App;
