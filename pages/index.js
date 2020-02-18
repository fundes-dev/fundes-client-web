import styled from 'styled-components';
import { Container } from '@material-ui/core';

const Hero = styled('div')({
  height: '85vh',
  backgroundColor: '#BBB',
});

const Home = () => (
  <>
    <Hero>
      <Container>
        <div>Hello</div>
      </Container>
    </Hero>
  </>
);

export default Home;
