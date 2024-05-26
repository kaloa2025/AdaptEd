import logo from './logo.svg';
import './App.css';
import Dashboard from './components/screens/Dashboard';
import EditProfile from './components/screens/EditProfile';
import QuizReport from './components/screens/QuizReport';

function App() {
  return (
    <div>
      <p className='brand'>AdaptEd</p>
      {/* <Dashboard/> */}
      {/* <EditProfile/> */}
      <QuizReport/>
    </div>
    
  );
}

export default App;
