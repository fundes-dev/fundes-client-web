import React from 'react';
import MaterialToolbar from '@material-ui/core/Toolbar';
import { styled } from '@material-ui/core/styles';

const StyledToolbar = styled(MaterialToolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});


const Toolbar = (props) => <StyledToolbar {...props} />;


export default Toolbar;
