import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';

const StyledTextField = styled(MaterialTextField)({
  maxWidth: '500px',
  minWidth: '300px',
});


const TextField = ({ ...others }) => (
  <StyledTextField {...others} />
);

export default TextField;
