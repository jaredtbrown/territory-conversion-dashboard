import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import DataTile from './DataTile';

class App extends Component {
  state = {
    isFetching: false,
    allTerritories: {
      total: 0,
      totalCompleted: 0,
      totalInProgress: 0,
      totalRemaining: 0,
    },
    homeTerritories: {
      total: 0,
      totalCompleted: 0,
      totalInProgress: 0,
      totalRemaining: 0,
    },
    ruralTerritories: {
      total: 0,
      totalCompleted: 0,
      totalInProgress: 0,
      totalRemaining: 0,
    }
  }

  async componentDidMount() {
    this.setState({
      isFetching: true
    });
    try {
      const response = await fetch('https://tfdev-territory-conversion-api.azurewebsites.net/v1/report');
      const json = await response.json();
      console.log(json);
      this.setState({
        isFetching: false,
        allTerritories: json.allTerritories,
        homeTerritories: json.homeTerritories,
        ruralTerritories: json.ruralTerritories,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <AppBar position="static">
          <Toolbar>
          <Typography variant="h6">
            Territory Conversion Report
          </Typography>
          {
            this.state.isFetching &&
            <CircularProgress color="inherit" />
          }
          </Toolbar>
        </AppBar>
        <div style={{ width: '100%' }}>
          <Grid style={{ width: '100%', margin: 'auto' }} container spacing={2}>
            <Grid item xs={12} md={4}>
              <DataTile
                title="All Territories"
                data={this.state.allTerritories}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DataTile
                title="Home Territories"
                data={this.state.homeTerritories}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DataTile
                title="Rural Territories"
                data={this.state.ruralTerritories}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
