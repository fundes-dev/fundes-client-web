import React from 'react';
import MaterialAppBar from '@material-ui/core/AppBar';
import { styled } from '@material-ui/core/styles';

const StyledAppBar = styled(MaterialAppBar)({
  justifyContent: 'space-between',
  background: 'white',
  position: 'static',
});

const AppBar = (props) => <StyledAppBar {...props} />;

export default AppBar;
