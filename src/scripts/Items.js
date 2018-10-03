import React from 'react';
import Item from './Item';
import Grid from '@material-ui/core/Grid';

class Items extends React.Component {
  render() {  
    const that = this;
    return (
      <div>
        <Grid container spacing={24}> 
        {Object.keys(this.props.items).map(function(key){
          return (
            <Grid item xs={6} sm={3} key={key}>
              <Item item={that.props.items[key]} />
            </Grid>
          );
        })}
        </Grid>
      </div>
    );
  }

}

export default Items;
