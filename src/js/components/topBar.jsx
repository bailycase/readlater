import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    textAlign: 'center',
  },

});
export default () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" color="inherit">
      Save For Later
      </Typography>
      <IconButton color="inherit" className={styles.button} aria-label="Add">
        <Tooltip title="Coming Soon!">
          <AddIcon />
        </Tooltip>
      </IconButton>
    </Toolbar>
  </AppBar>
);
