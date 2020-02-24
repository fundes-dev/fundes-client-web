import { Formik, Form, Field } from 'formik';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
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
  alignItems: 'flex-end',
  minWidth: '400px',
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
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
            Submit
            </Button>
          </FormContainer>
        </Form>
      )}
    </Formik>
  </StyledContainer>
);

export default Hero;
