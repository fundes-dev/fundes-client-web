import React from 'react';
import { styled } from '@material-ui/core/styles';
import Link from '../Link';

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  fontSize: '16px',
}));

const List = styled('ul')({
  display: 'flex',
  justifyContent: 'flex-end',
  marginLeft: 'auto',
  listStyle: 'none',
});

const ListItem = styled('li')(({ theme }) => ({
  marginRight: theme.spacing(3),
}));


const TopNav = () => (
  <nav>
    <List>
      <ListItem>
        <StyledLink href="/about">
              About
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink href="/my-account">
              My Account
        </StyledLink>
      </ListItem>
    </List>
  </nav>
);

export default TopNav;
