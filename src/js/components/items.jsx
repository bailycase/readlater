/* global chrome */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { CardActionArea } from '@material-ui/core';
import { SaveConsumer } from './context';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 275,
  },
};

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="items">
        <SaveConsumer>
          {context => (
            <Grid
              container
              spacing={8}
              direction="column"
              alignItems="center"
            >
              <Grid item xs={6} />
              {context.state.data.map(value => (
                <Grid key={value} item xs zeroMinWidth>
                  <Card className={classes.card}>
                    <CardActionArea onClick={() => {
                      context.removeItem(value.url);
                      window.open(value.url);
                    }}
                    >
                      <CardContent className={classes.cContent}>
                        <Tooltip title={(
                          <Typography variant="subheading" component="h3">
                            {value.title}
                          </Typography>
)}
                        >
                          <Typography gutterBottom variant="h5" component="h2" noWrap>
                            {value.title}
                          </Typography>
                        </Tooltip>
                        <Typography component="p" noWrap>
                          {value.url}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </SaveConsumer>
      </div>
    );
  }
}
Items.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles)(Items);
