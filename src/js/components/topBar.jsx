/* global chrome */
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/styles';
import AddPopup from './addPopup';
import SettingsPopup from './settingsPopup';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: -15,
  },
};
const TopBar = (styles, props) => {
  const { classes } = styles;
  const [state, setState] = useState({
    addOpen: false,
    settingsOpen: false,
  });
  function handleClose() {
    setState({
      ...state,
      addOpen: false,
      settingsOpen: false,
    });
  }
  function openSettings() {
    setState({
      ...state,
      settingsOpen: true,
    });
  }
  function openAdd() {
    setState({
      ...state,
      addOpen: true,
    });
  }
  return (
    <div className={classes.root}>
      {state.addOpen && <AddPopup isOpen={state.addOpen} isClose={state.addOpen} close={handleClose} />}
      {state.settingsOpen && <SettingsPopup isOpen={state.settingsOpen} isClose={state.settingsOpen} close={handleClose} />}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.grow}
          >
      Save For Later
          </Typography>
          <div className={classes.menuButton}>
            <IconButton color="inherit" aria-label="Add" onClick={openAdd}>
              <AddIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="More" onClick={openSettings}>
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(TopBar);
