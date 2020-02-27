import { styled } from '@material-ui/core/styles';
import Typography from '../../components/Typography';
import AppBar from '../../components/AppBar';
import Toolbar from '../../components/Toolbar';
import Link from '../../components/Link';
import TopNav from '../TopNav';

const HeaderLogo = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
}));

const Header = () => (
  <AppBar>
    <Toolbar>
      <Typography variant="h4">
        <HeaderLogo href="/" color="primary">
          Fundes
        </HeaderLogo>
      </Typography>
      <TopNav />
    </Toolbar>
  </AppBar>
);

export default Header;
