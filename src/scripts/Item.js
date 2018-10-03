import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase/app';
import 'firebase/database';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 240,
    width: 350
  },
};



class Item extends React.Component {
  
  writeUserData(key) {
    console.log("writing " + key)
    firebase.database().ref('publicItemsData/' + key + '/bought').set(true);
  }
  
  render(){
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={"/images/" + this.props.item.image}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.item.name}
            </Typography>
            <Typography component="p">
              {this.props.item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" variant="contained" onClick={() => this.writeUserData(this.props.itemId)}>
            I bought this
          </Button>
        </CardActions>
      </Card>
    );
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);
