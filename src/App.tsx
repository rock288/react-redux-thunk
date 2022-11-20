import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Dashboard, SignUp } from './views';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
