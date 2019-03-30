import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { SaveConsumer } from './context';


const styles = {
  colorPicker: {
    margin: 10,
    backgroundColor: '#f06292',
  },
};

const settingsPopup = (props) => {
  const { classes, isOpen, close } = props;
  return (
    <SaveConsumer>
      {context => (
        <div>
          <Dialog
            open={isOpen}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Settings</DialogTitle>
            <DialogContent>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item xs={8}>
                  <Typography variant="subtitle1">
                      Dark Mode
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Switch
                    checked={context.state.darkMode}
                    onChange={
                    (event) => {
                      context.toggleDark(!event.target.checked);
                    }}
                    value="darkMode"
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="subtitle1">
                      Theme
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                <div>
                  <Avatar className={classes.colorPicker} />
                </div>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={close} color="primary">
                Exit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </SaveConsumer>

  );
};

settingsPopup.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,

};
export default withStyles(styles)(settingsPopup);
