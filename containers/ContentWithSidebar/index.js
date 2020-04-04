import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { Grid, Container } from '../../components/Layout';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const ContentWithSidebar = ({ children, sidebar }) => (
  <StyledContainer>
    <Grid container spacing={3}>
      <Grid item xs={12} md={9}>{children}</Grid>
      <Grid item xs={12} md={3}>{sidebar}</Grid>
    </Grid>
  </StyledContainer>
);

ContentWithSidebar.propTypes = {
  children: PropTypes.node,
  sidebar: PropTypes.node,
};

export default ContentWithSidebar;
