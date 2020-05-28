import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Doughnut } from 'react-chartjs-2';

const DataTile = (props) => {
    return (
        <Card>
          <CardContent>
            <Grid container>
                <Grid item style={{ flexGrow: 1 }}>
                    <Typography variant="h6">{props.title}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6">{props.data.total}</Typography>
                </Grid>
            </Grid>
            <Doughnut
              data={{
                datasets: [{
                  backgroundColor: ['green', 'yellow', 'gray'],
                  data: [props.data.totalCompleted, props.data.totalInProgress, props.data.totalRemaining]
                }],
                labels: [
                    'Completed',
                    'In Progress',
                    'Remaining'
                ]
              }}
              legend={false}
            />
            <Grid container>
                <Grid item style={{ flexGrow: 1 }}>
                    <Typography>Completed</Typography>
                </Grid>
                <Grid item>
                    <Typography>{props.data.totalCompleted}</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item style={{ flexGrow: 1 }}>
                    <Typography>In Progress</Typography>
                </Grid>
                <Grid item>
                    <Typography>{props.data.totalInProgress}</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item style={{ flexGrow: 1 }}>
                    <Typography>Remaining</Typography>
                </Grid>
                <Grid item>
                    <Typography>{props.data.totalRemaining}</Typography>
                </Grid>
            </Grid>
          </CardContent>
        </Card>
    );
}
 
export default DataTile;
