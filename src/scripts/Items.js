import React from 'react';
import Item from './Item';
import Grid from '@material-ui/core/Grid';

class Items extends React.Component {
  render() {  
    return (
      <div>
        <Grid container spacing={24}> 
        {this.props.items.map(function(item, index){
          return (
            <Grid item xs={6} sm={3} key={index}>
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
