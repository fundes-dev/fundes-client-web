import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container } from '../../components/Layout';

const ContentWithSidebar = ({ children, sidebar }) => (
  <Container>
    <Grid container spacing={3}>
      <Grid item xs={12} md={9}>{children}</Grid>
      <Grid item xs={12} md={3}>{sidebar}</Grid>
    </Grid>
  </Container>
);

ContentWithSidebar.propTypes = {
  children: PropTypes.node,
  sidebar: PropTypes.node,
};

export default ContentWithSidebar;
