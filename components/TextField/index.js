import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';

const StyledTextField = styled(MaterialTextField)({
  maxWidth: '500px',
  minWidth: '300px',
  margin: '8px 0',
  width: '100%',
});


const TextField = ({
  field, helperText, form, error, ...others
}) => {
  const fieldName = field?.name;
  const errorMessage = form?.errors[fieldName];
  const touched = form?.touched[fieldName];
  const hasError = touched && !!errorMessage;
  const helperTextMessage = hasError && errorMessage ? errorMessage : helperText;
  return (
    <StyledTextField {...field} error={error || hasError} helperText={helperTextMessage} {...others} variant="outlined" />
  );
};

TextField.propTypes = {
  field: PropTypes.shape({ name: PropTypes.string }),
  helperText: PropTypes.string,
  form: PropTypes.shape({
    errors: PropTypes.object,
    touched: PropTypes.object,
  }),
  error: PropTypes.bool,
};

export default TextField;
