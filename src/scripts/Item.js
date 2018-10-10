import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ItemPopUp from './ItemPopUp'

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
          <ItemPopUp item={this.props.item} itemId={this.props.itemId} />
        </CardActions>
      </Card>
    );
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);
