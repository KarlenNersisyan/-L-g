import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from './Icon';

const styles = {
  root: {
    flexGrow: 1,
  },
  logo: {
    color: 'inherit',
    marginRight: '30px',
    fontSize: '26px',
    textDecoration: 'none',
  },
  toolbar: {
    display: 'flex',
    textAlign: 'center',
  },
  'nav-item-font': {
    color: '#fff',
    fontSize: '22px',
  },
  logInLink: {
    marginLeft: 'auto',
  },
  icon: {
    fontSize: '20px',
  },
};

function SimpleAppBar(props) {
  const { classes, isLoggedIn } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          <Typography variant="title" color="inherit">
            <Link to="/blog-byNersisyan" className={classes.logo}>
              {window.innerWidth > 400 ? <Icon className={classes.icon} /> : ''}
              Blog
            </Link>
          </Typography>

          <Link to="/blog-byNersisyan/blog/create">
            <MenuItem className={classes['nav-item-font']}>
              Create Post
            </MenuItem>
          </Link>

          <Link to="/blog-byNersisyan/auth" className={classes.logInLink}>
            {isLoggedIn ? (
              <MenuItem className={classes['nav-item-font']}>LogOut</MenuItem>
            ) : (
              <MenuItem className={classes['nav-item-font']}>LogIn</MenuItem>
            )}
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
