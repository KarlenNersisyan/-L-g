import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from './Icon';
import GitHub from './GitHub';
import LinkedIn from './LinkedIn';
import Twitter from './Twitter';
import Instagram from './Instagram';
import Facebook from './Facebook';
import AddCircle from './AddCircle';
import ExitToApp from './ExitToApp';
import KeyboardTab from './KeyboardTab';
import { Box } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    textAlign: 'center',
    background: '#ff00ff96',
  },
  'nav-item-font': {
    color: '#fff',
    fontSize: '25px',
  },
  logInLink: {
    marginLeft: 'auto',
    textDecoration: 'none',
  },
  createPostLink: {
    textDecoration: 'none',
  },
  logo: {
    color: 'inherit',
    marginRight: '200px',
  },
  icon: {
    fontSize: '75px',
  },
  githubLogo: {
    color: '#000',
    marginRight: '20px',
  },
  githubIcon: {
    fontSize: '35px',
    height: '42px',
  },
  linkedInLogo: {
    color: '#164e97cf',
    marginRight: '20px',
  },
  linkedInIcon: {
    fontSize: '44px',
  },
  twitterLogo: {
    color: 'rgb(85 219 167)',
    marginRight: '20px',
  },
  twitterIcon: {
    fontSize: '42px',
  },
  instagramLogo: {
    color: 'rgb(219 85 149)',
    marginRight: '20px',
  },
  instagramIcon: {
    fontSize: '42px',
  },
  facebookLogo: {
    color: '#0f02a8',
    marginRight: '230px',
  },
  facebookIcon: {
    fontSize: '42px',
  },
  addCircleIcon: {
    fontSize: '42px',
    color: 'yellowgreen',
    marginLeft: '150px',
  },
  exitToAppIcon: {
    fontSize: '42px',
    color: 'red',
  },
  keyboardTabIcon: {
    fontSize: '42px',
    color: 'aqua',
  },
  container: {
    width: '100%',
    maxWidth: '300px',
    height: '45px',
    border: '1px solid #c9b6b6cf',
    background: '#fff',
    display: 'flex',
    padding: '0 5px',
    borderRadius:'0 30px'
  },
};

function SimpleAppBar(props) {
  const { classes, isLoggedIn } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          <Typography color="inherit">
            <Link to="/blog-byNersisyan" className={classes.logo}>
              {window.innerWidth > 400 ? <Icon className={classes.icon} /> : ''}
            </Link>
          </Typography>
          <Box component="div" className={classes.container}>
            <Typography color="inherit">
              <a
                href="https://github.com/KarlenNersisyan"
                className={classes.githubLogo}
              >
                <GitHub className={classes.githubIcon} />
              </a>
            </Typography>
            <Typography color="inherit">
              <a
                href="https://www.linkedin.com/in/karlen-nersisyan/"
                className={classes.linkedInLogo}
              >
                <LinkedIn className={classes.linkedInIcon} />
              </a>
            </Typography>
            <Typography color="inherit">
              <a
                href="https://twitter.com/nersisyan_karl"
                className={classes.twitterLogo}
              >
                <Twitter className={classes.twitterIcon} />
              </a>
            </Typography>
            <Typography color="inherit">
              <a
                href="https://www.instagram.com/nersisyankarlen/"
                className={classes.instagramLogo}
              >
                <Instagram className={classes.instagramIcon} />
              </a>
            </Typography>
            <Typography color="inherit">
              <a
                href="https://www.facebook.com/karlen.nersisyan.1999/"
                className={classes.facebookLogo}
              >
                <Facebook className={classes.facebookIcon} />
              </a>
            </Typography>
          </Box>

          <Link
            to="/blog-byNersisyan/blog/create"
            className={classes.createPostLink}
          >
            <MenuItem className={classes['nav-item-font']}>
              <AddCircle className={classes.addCircleIcon} />
              Create Post
            </MenuItem>
          </Link>

          <Link to="/blog-byNersisyan/auth" className={classes.logInLink}>
            {isLoggedIn ? (
              <MenuItem className={classes['nav-item-font']}>
                <ExitToApp className={classes.exitToAppIcon} />
                LogOut
              </MenuItem>
            ) : (
              <MenuItem className={classes['nav-item-font']}>
                <KeyboardTab className={classes.keyboardTabIcon} />
                LogIn
              </MenuItem>
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
