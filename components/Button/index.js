import React from 'react';
import PropTypes from 'prop-types';
import MaterialButton from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const StyledButton = styled(MaterialButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,

}));


const Button = ({ children, ...others }) => (
  <StyledButton {...others}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
