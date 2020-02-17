import { Toolbar, AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../../components/Link';

const useStyles = makeStyles((theme) => ({
  appBar: {
    justifyContent: 'space-between',
  },
  ul: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
  },
  li: {
    marginRight: theme.spacing(3),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">
          <Link href="/">
            Fundes
          </Link>
        </Typography>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link href="/about">
              About
            </Link>
          </li>
          <li className={classes.li}>
            <Link href="/my-account">
              My Account
            </Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
