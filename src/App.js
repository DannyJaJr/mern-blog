import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'


function App() {
  return (
    <Router>
    <div className="max-w-screen-md mx-auto pt-20">
      <Route path="/" component={Home} />
  
    </div>
    </Router>
  );
}

export default App;
