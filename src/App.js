import logo from './logo.svg';
import './App.css';
import Dashboard from './components/screens/Dashboard';
import EditProfile from './components/screens/EditProfile';

function App() {
  return (
    <div>
      <p className='brand'>AdaptEd</p>
      {/* <Dashboard/> */}
      <EditProfile/>
    </div>
    
  );
}

export default App;
