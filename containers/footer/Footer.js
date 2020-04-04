import { Toolbar, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  position: 'absolute',
  bottom: 0,
  width: '100%',
}));

const Footer = () => (
  <StyledFooter>
    <Toolbar>
      <Typography variant="h6">
        Footer
      </Typography>
    </Toolbar>
  </StyledFooter>
);

export default Footer;
