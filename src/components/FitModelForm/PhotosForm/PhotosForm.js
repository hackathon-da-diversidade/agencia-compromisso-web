import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Paper from '@material-ui/core/Paper';
import classes from './PhotosForm.module.css';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';

class PhotosForm extends Component {
  inputRef;
  onChange;

  constructor(props) {
    super(props);

    this.onChange = 'onChange' in props ? props.onChange : () => {
    };
    this.state = {
      src: '',
      open: false,
      photos: props.data?.photos || [],
    };
  }

  openDialog = () => this.inputRef.click();

  addPhoto = (event) => {
    const photos = [];

    for (let file of event.target.files) {
      photos.push({ photo: file, url: URL.createObjectURL(file) });
    }

    this.setState({ photos: [...this.state.photos, ...photos] });
    this.onChange({ photos });
  };

  closePhoto = () => this.setState({ open: false, src: '' });

  openPhoto = (src) => this.setState({ open: true, src });

  removePhoto = (index) => {
    const photos = [...this.state.photos];
    photos.splice(index, 1);

    this.setState({ photos });
    this.onChange({ photos });
  };

  render() {
    return (
      <Grid container className={classes.Grid}>
        <Grid item xs={12}>
          <Paper variant="outlined">
            <List>
              <input accept="image/*" multiple type="file" ref={ref => this.inputRef = ref} className={classes.Input}
                     onChange={this.addPhoto}/>
              <ListItem button onClick={this.openDialog}>
                <ListItemAvatar>
                  <Avatar>
                    <AddIcon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Adicionar Foto"/>
              </ListItem>
              {this.state.photos.map(({ photo, url }, index) => (
                <div key={url} id={`photo${index}`}>
                  <Divider/>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={url}/>
                    </ListItemAvatar>
                    <ListItemText primary={photo.name}/>
                    <ListItemSecondaryAction>
                      <IconButton edge="end" onClick={() => this.removePhoto(index)}>
                        <DeleteIcon/>
                      </IconButton>
                      <IconButton edge="end" onClick={() => this.openPhoto(url)}>
                        <VisibilityIcon/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </div>
              ))}
            </List>
          </Paper>
        </Grid>
        <Dialog onClose={this.closePhoto} open={this.state.open}>
          <img src={this.state.src} alt="Image" className={classes.Image}/>
        </Dialog>
      </Grid>
    );
  }
}

export default PhotosForm;
