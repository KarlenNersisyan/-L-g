import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = {
  textColor: {
    color: 'yellow',
    fontSize: '25px',
  },
};

const LogOutForm = (props) => {
  const { logOut,classes } = props;

  return (
    <Grid container direction="column" alignItems="center">
      <h1>Log Out</h1>
      <p className={classes.textColor}> Thank you for using the site! </p>
      <Button onClick={logOut} variant="contained" color="primary">
        Log Out
      </Button>
    </Grid>
  );
};

export default withStyles(styles)(LogOutForm);
