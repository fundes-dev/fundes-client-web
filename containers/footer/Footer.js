import { Toolbar, Typography, Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: '100%',
  position: 'absolute',
  bottom: 0,
}));

const Footer = () => (
  <>
    <StyledFooter>
      <Toolbar>
        <Typography variant="h6">
          Footer
        </Typography>
      </Toolbar>
    </StyledFooter>
    <Box height="64px" />
  </>
);

export default Footer;
