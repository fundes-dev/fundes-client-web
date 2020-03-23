import { Formik, Form, Field } from 'formik';
import { styled } from '@material-ui/core/styles';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

const StyledContainer = styled('div')({
  height: '85vh',
  backgroundColor: '#BBB',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const FormContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '400px',
});

const StyledButton = styled(Button)({
  marginLeft: '20px',
});

const Hero = () => (
  <StyledContainer>
    <Formik
      initialValues={{
        package: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <FormContainer>
            <Field
              component={TextField}
              name="package"
              type="text"
              label="Search for an NPM Package"
            />
            <StyledButton
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
              size="large"
            >
              Submit
            </StyledButton>
          </FormContainer>
        </Form>
      )}
    </Formik>
  </StyledContainer>
);

export default Hero;
