import React from 'react';
import Item from './Item';
import Grid from '@material-ui/core/Grid';

class Items extends React.Component {
  render() {  
    return (
      <div>
        <Grid container spacing={24}> 
        {this.props.items.map(function(item){
          return (
            <Grid item xs={6} sm={3} key={item.id}>
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
