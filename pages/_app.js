/* eslint-disable react/prop-types */
import MainLayout from '../layouts/MainLayout';


const App = ({ Component, pageProps }) => (
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
);
export default App;
