import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Items extends React.Component {
  constructor(){
    super();
    
    this.state = {
      items: [],
    }
  }
  
  componentWillMount(){
    var items2 = [{
      name: 'toaster',
      desc: 'cool toaster'
    },{
      name: 'oven',
      desc: 'cool oven'
    },{
      name: 'fan',
      desc: 'cool fan'
    }];
    
    this.setState({items: items2})
    
  }
  render() {  
    return (
      <div>
        <Grid container spacing={24}> 
        {this.state.items.map(function(item){
          return (
            <Grid item xs={6} sm={3}>
              <Item name={item.name} desc={item.desc} />
            </Grid>
          );
        })}
        </Grid>
      </div>
    );
  }

}

export default Items;