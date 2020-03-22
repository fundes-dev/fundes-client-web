import React from 'react';
import MaterialCard from '@material-ui/core/Card';
import MaterialCardActions from '@material-ui/core/CardActions';
import MaterialCardContent from '@material-ui/core/CardContent';

const Card = ({ ...CardProps }) => (
  <MaterialCard {...CardProps} />
);

export const CardActions = ({ ...ActionsProps }) => (
  <MaterialCardActions {...ActionsProps} />
);

export const CardContent = ({ ...ContentProps }) => (
  <MaterialCardContent {...ContentProps} />
);

export default Card;
