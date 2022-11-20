import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Dashboard, SignUp } from './views';
import { Suspense } from 'react';
import { Spinner } from 'reactstrap';

function App() {
  return (
    <Suspense fallback={<Spinner>Loading...</Spinner>}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
