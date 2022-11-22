import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { CustomRouter } from './components';
import customHistory from './utils/history';
import { Dashboard, Login, SignUp } from './views';

function App() {
  return (
    <CustomRouter history={customHistory}>
      <Suspense fallback={<Spinner>Loading...</Spinner>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </CustomRouter>
  );
}

export default App;
