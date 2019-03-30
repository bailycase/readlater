import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { SaveConsumer } from './context';


const addPopup = (props) => {
  const [title, onTitleChange] = useState(null);
  const [url, onUrlChange] = useState(null);
  const handleTitleChange = event => onTitleChange(event.target.value);
  const handleUrlChange = event => onUrlChange(event.target.value);
  const data = {
    title,
    url,
  };
  const {isOpen, close} = props;

  return (
    <SaveConsumer>
      {context => (
        <div>
          <Dialog
            open={isOpen}
            close={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Add Item</DialogTitle>
            <DialogContent>
              <TextField
                id="standard-name"
                label="Title"
                margin="dense"
                fullWidth
                autoFocus
                onChange={handleTitleChange}
              />
              <TextField
                id="standard-name"
                label="URL"
                margin="dense"
                fullWidth
                onChange={handleUrlChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={close} color="primary">
            Cancel
              </Button>
              <Button
                onClick={() => {
                  context.addItem(data);
                  close();
                }}
                color="primary"
                autoFocus
              >
            Save
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </SaveConsumer>
  );
};

export default addPopup;
