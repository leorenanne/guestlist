import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Items extends React.Component {
  render() {  
    return (
      <div>
        <Grid container spacing={24}> 
        {this.props.items.map(function(item){
          return (
            <Grid item xs={6} sm={3}>
              <Item item={item} />
            </Grid>
          );
        })}
        </Grid>
      </div>
    );
  }

}

export default Items;
