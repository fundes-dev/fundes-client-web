import { Formik, Form, Field } from 'formik';
import { Button } from '@material-ui/core';
import * as Yup from 'yup';
import { styled } from '@material-ui/core/styles';
import TextField from '../../components/TextField';
import Typography from '../../components/Typography';
import { Box } from '../../components/Layout';

const StyledButton = styled(Button)({
  margin: '10px 0',
});

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const PasswordResetForm = () => (

  <Formik
    initialValues={{
      email: '',
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
        <Box mb={1}>
          <Typography variant="h5">Reset Password</Typography>
          <Typography variant="body2">Enter your user account&apos;s verified email address and we will send you a password reset link.</Typography>
        </Box>
        <Field
          component={TextField}
          name="email"
          type="email"
          label="Email"
        />
        <StyledButton
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          onClick={submitForm}
        >
          Reset Password
        </StyledButton>
      </Form>
    )}
  </Formik>

);

export default PasswordResetForm;
