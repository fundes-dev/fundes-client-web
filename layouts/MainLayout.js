import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../containers/header/Header';
import Footer from '../containers/footer/Footer';


const PageContainer = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const MainLayout = ({ children }) => (
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
    <PageContainer>
      <Header />
      <CssBaseline />
      <main>
        {children}
      </main>
      <Footer />
    </PageContainer>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
