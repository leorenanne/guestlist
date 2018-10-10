import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import firebase from 'firebase/app';
import Typography from '@material-ui/core/Typography';
import 'firebase/database';

export default class FormDialog extends React.Component {
  constructor(){
    super();

    this.state = {
      open: false,
      value: '',
      invalid: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      value: '',
      invalid: false
    });
  };

  writeUserData(key) {
    if (this.state.value.trim() === ""){
      this.setState({invalid: true});

    }else {
      console.log("writing " + key + " for " + this.state.value)
      firebase.database().ref('buyerNames/' + key ).set(this.state.value);
      firebase.database().ref('publicItemsData/' + key + '/bought').set(true);
       this.handleClose();
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div>
        <Button
          onClick={this.handleClickOpen}
          color="primary"
          variant="contained"
          size="small"
          disabled={this.props.item.bought}
        >
          I bought this
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Thank You! Please give us your details.</DialogTitle>
          <DialogContent>
            <DialogContentText >
              Thank your for your purchase on our gift registry.
            </DialogContentText>
            <Typography color="error">
              Please ONLY CLICK CONFIRM once you have bought this item. This action cannot be undone.
            </Typography>
            <TextField
              error={this.state.invalid}
              autoFocus
              margin="dense"
              id="name"
              label="Your Full Name"
              type="email"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => this.writeUserData(this.props.itemId)}
              color="secondary"
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
