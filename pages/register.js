import React from 'react';
import RegisterForm from '../containers/RegisterForm';
import FormCard from '../containers/FormCard';
import Typography from '../components/Typography';
import Link from '../components/Link';

const Register = () => (
  <FormCard>
    <RegisterForm />
    <Typography variant="body2">
      Already have an account?
      {' '}
      <Link href="/login">Log In</Link>
    </Typography>
  </FormCard>
);


export default Register;
