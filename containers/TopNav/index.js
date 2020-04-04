import React from 'react';
import { connect } from 'react-redux';
import { styled } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import Link from '../../components/Link';
import Button from '../../components/Button';
import { loginRequested, logoutRequested } from '../../store/actions/user';

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  fontSize: '18px',
}));

const List = styled('ul')({
  display: 'flex',
  justifyContent: 'flex-end',
  marginLeft: 'auto',
  listStyle: 'none',
  alignItems: 'center',
});

const ListItem = styled('li')(({ theme }) => ({
  marginRight: theme.spacing(3),
  '&:last-of-type': {
    marginRight: 0,
  },
}));


const TopNav = ({ isAuthenticated, mockLoginOnClick, mockLogoutOnClick }) => (
  <nav>
    <List>
      <ListItem>
        <StyledLink href="/about">
          About
        </StyledLink>
      </ListItem>
      <ListItem>
        {isAuthenticated ? (
          <StyledLink href="/my-account">
            My Account
          </StyledLink>
        ) : (
          <StyledLink href="/login">
            Sign In
          </StyledLink>
        )}
      </ListItem>
      <ListItem>
        {isAuthenticated ? (
          <Button variant="contained" color="primary" onClick={mockLogoutOnClick}>
            Mock Logout
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={mockLoginOnClick}>
            Mock Login
          </Button>
        )}
      </ListItem>
    </List>
  </nav>
);

TopNav.propTypes = {
  isAuthenticated: propTypes.bool.isRequired,
  mockLoginOnClick: propTypes.func.isRequired,
  mockLogoutOnClick: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});
const mapDispatchToProps = {
  mockLoginOnClick: loginRequested,
  mockLogoutOnClick: logoutRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
