import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Dashboard, SignUp } from './views';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
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
