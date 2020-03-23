import { Formik, Form, Field } from 'formik';
import { Button } from '@material-ui/core';
import * as Yup from 'yup';
import { styled } from '@material-ui/core/styles';
import TextField from '../../components/TextField';
import Typography from '../../components/Typography';

const StyledButton = styled(Button)({
  margin: '10px 0 20px',
});

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

const LoginForm = () => (

  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={LoginSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }, 500);
    }}
  >
    {({ submitForm, isSubmitting }) => (
      <Form>
        <Typography variant="h4">Login</Typography>
        <Field
          component={TextField}
          name="email"
          type="email"
          label="Email"
        />
        <Field
          component={TextField}
          name="password"
          type="password"
          label="Password"
        />
        <StyledButton
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          onClick={submitForm}
        >
          Log in
        </StyledButton>
      </Form>
    )}
  </Formik>

);

export default LoginForm;
