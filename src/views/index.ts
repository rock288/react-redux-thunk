import React from 'react';

const Login = React.lazy(() => import('./login'));
const SignUp = React.lazy(() => import('./sign-up'));
const Dashboard = React.lazy(() => import('./dashboard'));

export { Login, SignUp, Dashboard };
