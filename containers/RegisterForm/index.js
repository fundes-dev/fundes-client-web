import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import Typography from '../../components/Typography';
import { Box } from '../../components/Layout';
import { registrationRequested } from '../../store/actions/registration';

const StyledButton = styled(Button)({
  margin: '8px 0 16px',
});

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
});

const RegisterForm = ({ onSubmit, isFetching, errorMessage }) => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }}
    validationSchema={RegisterSchema}
    onSubmit={(values) => {
      onSubmit(values);
    }}
    validateOnBlur
  >
    {({ submitForm }) => (
      <Form>
        <Box mb={1}>
          <Typography variant="h5">Register Now</Typography>
          <Typography variant="body2">Register to support a package or to claim the fundraising page for own package.</Typography>
        </Box>
        <Field
          component={TextField}
          name="firstName"
          type="text"
          label="First Name"
        />
        <Field
          component={TextField}
          name="lastName"
          type="text"
          label="Last Name"
        />
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
        <Field
          component={TextField}
          name="confirmPassword"
          type="password"
          label="Confirm your password"
        />
        <StyledButton
          variant="contained"
          color="primary"
          disabled={isFetching}
          onClick={submitForm}
        >
          Register
        </StyledButton>
      </Form>
    )}
  </Formik>
);
RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,

};

const mapStateToProps = (state) => ({
  isFetching: state.registration.isFetching,
  errorMessage: state.registration.isFetching,
});

const mapDispatchToProps = ({
  onSubmit: registrationRequested,
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
