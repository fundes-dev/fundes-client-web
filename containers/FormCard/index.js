import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import Card, { CardContent } from '../../components/Card';


const StyledCard = styled(Card)(
  {
    maxWidth: '400px',
    margin: '20px auto',
  },
);

const FormCard = ({ children }) => (
  <StyledCard>
    <CardContent>
      {children}
    </CardContent>
  </StyledCard>
);

FormCard.propTypes = {
  children: PropTypes.node,
};

export default FormCard;
