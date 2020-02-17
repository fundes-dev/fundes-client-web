import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../containers/header/Header';
import Footer from '../containers/footer/Footer';


const MainLayout = ({ className, children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <div className={className}>
      <Header />
      <CssBaseline />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  </>
);

const StyledMainLayout = styled(MainLayout)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default StyledMainLayout;
