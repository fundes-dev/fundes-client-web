import React from 'react';
import LoginForm from '../containers/LoginForm';
import FormCard from '../containers/FormCard';
import Link from '../components/Link';
import Typography from '../components/Typography';

const Login = () => (
  <FormCard>
    <LoginForm />
    <Typography variant="body2">
      <Link href="/register">Register</Link>
      {' | '}
      <Link href="/password-reset">Forgot Password</Link>
    </Typography>
  </FormCard>
);


export default Login;
