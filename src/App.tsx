import { Routes, Route } from 'react-router-dom';
import { Login, Dashboard, SignUp } from './views';
import { Suspense } from 'react';
import { Spinner } from 'reactstrap';
import { CustomRouter } from './components';
import customHistory from './utils/history';

function App() {
  return (
    <CustomRouter history={customHistory}>
      <Suspense fallback={<Spinner>Loading...</Spinner>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </CustomRouter>
  );
}

export default App;
