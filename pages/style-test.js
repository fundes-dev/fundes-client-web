import { styled } from '@material-ui/core/styles';
import Button from '../components/Button';

const StyledButton = styled(Button)({
  backgroundColor: 'blue',
});

const Container = styled('div')({
  maxWidth: '500px',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center',
});

const StyleTest = () => (
  <Container>
    <h1>This is a sample of how styling will be implemented</h1>
    <p>
Components like this button are imported from material-ui and then
      provided additional styles using the theme and styled-components.
    </p>
    <Button>Click Me</Button>
    <p>
Additional styles can then be applied inside a composite component
      or page for one off variations of the component.
    </p>
    <StyledButton>Click Me</StyledButton>
  </Container>
);

export default StyleTest;
