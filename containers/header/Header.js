import { Toolbar, AppBar, Typography } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import Link from '../../components/Link';


const useStyles = makeStyles((theme) => ({
  appBar: {
    justifyContent: 'space-between',
  },
  ul: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    listStyle: 'none',
  },
  li: {
    marginRight: theme.spacing(3),
  },
}));

const HeaderLogo = styled(Link)({
  color: 'white',
  textDecoration: 'none',
});
const HeaderLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">
          <HeaderLogo href="/" color="primary">
            Fundes
          </HeaderLogo>
        </Typography>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <HeaderLink href="/about">
              About
            </HeaderLink>
          </li>
          <li className={classes.li}>
            <HeaderLink href="/my-account">
              My Account
            </HeaderLink>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
